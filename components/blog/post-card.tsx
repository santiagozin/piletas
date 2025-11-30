import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from 'lib/blog/types';
import { getBlogImage } from 'lib/blog/images';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const imageSrc = getBlogImage(post.image);

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          {post.featured && (
            <div className="absolute top-4 right-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
              Destacado
            </div>
          )}
          {post.category && (
            <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 dark:bg-neutral-800/90 dark:text-white">
              {post.category}
            </div>
          )}
        </div>
        <div className="flex flex-col p-6">
          <div className="mb-2 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h2 className="mb-3 text-xl font-bold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {post.title}
          </h2>
          <p className="mb-4 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center text-sm font-semibold text-blue-600 group-hover:underline dark:text-blue-400">
            Leer más
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

