import { PostCard } from 'components/blog/post-card';
import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import { getAllPosts } from 'lib/blog';
import { Metadata } from 'next';
import Image from 'next/image';
import bannerHero from '../assets/banner-pileta.jpg';

export const metadata: Metadata = {
  title: 'Blog - Información sobre Productos para Piletas',
  description: 'Descubre consejos, guías y toda la información sobre productos para el cuidado y mantenimiento de tu pileta.'
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb] md:h-[150px]">
        <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-pensok">
          Blog de Productos
        </h1>
        <Image src={bannerHero} className="h-full w-full object-cover object-center" alt="Banner Blog" />
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 md:py-12">

        {posts.length > 0 ? (
          <Grid className="grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Grid.Item key={post.id} className="aspect-auto">
                <PostCard post={post} />
              </Grid.Item>
            ))}
          </Grid>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              No hay posts disponibles en este momento.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

