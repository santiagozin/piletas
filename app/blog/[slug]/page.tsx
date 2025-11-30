import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from 'components/layout/footer';
import Prose from 'components/prose';
import { getPostBySlug, getAllPosts } from 'lib/blog';
import { getBlogImage } from 'lib/blog/images';
import { Metadata } from 'next';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post no encontrado'
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      type: 'article',
      publishedTime: post.date
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const imageSrc = getBlogImage(post.image);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Botón de regreso */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver al blog
        </Link>

        {/* Imagen destacada */}
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 896px, 100vw"
          />
          {post.featured && (
            <div className="absolute top-4 right-4 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
              Destacado
            </div>
          )}
        </div>

        {/* Contenido del post */}
        <article>
          {/* Header */}
          <header className="mb-8">
            {post.category && (
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {post.category}
              </span>
            )}
            <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white md:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>Por {post.author}</span>
            </div>
          </header>

          {/* Contenido HTML */}
          <Prose html={post.content} />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <h3 className="mb-4 text-sm font-semibold uppercase text-neutral-600 dark:text-neutral-400">
                Etiquetas
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
      <Footer />
    </>
  );
}

