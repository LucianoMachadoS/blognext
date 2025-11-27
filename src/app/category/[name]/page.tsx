import { getPostsByCategory } from '@/app/data/posts/get-posts-by-category';
import HomePage from '@/app/containers/HomePage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllCategories } from '@/app/data/categories/get-all-categories';

type Props = {
  params: Promise<{ name: string }>;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.name);

  return {
    // DIFERENÇA 2: Título mais limpo (sem "Página 1")
    title: `${capitalize(categoryName)}`,
    description: `Artigos sobre ${categoryName}.`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    name: category.name,
  }));
}

export default async function CategoryPage(props: Props) {
  const params = await props.params;
  const categoryName = decodeURIComponent(params.name);

  const page = 1;

  const { data: posts, meta } = await getPostsByCategory(categoryName, page);

  if (!posts || posts.length === 0) {
    return notFound();
  }

  return (
    <HomePage
      posts={posts}
      category={categoryName}
      pagination={{
        page: page,
        pageCount: meta.pagination.pageCount,
        basePath: `/category/${params.name}`,
      }}
    />
  );
}
