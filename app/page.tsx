import { Carousel } from 'components/carousel';
import ContentAbout from 'components/contentAbout';
import ContentHeader from 'components/contentHeader';
import ContentProcess from 'components/contentProcess';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'Tienda de productos para piletas',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <div className="mt-10 px-6 text-gray-800">
        <h1>
          <span className="text-h1">Todo lo que tu pileta necesita,</span>
          <span className="text-h1 block">en un solo lugar.</span>
        </h1>
        <h3 className="mt-4">
          {' '}
          <span className="text-h1-light">Calidad, precio y comodidad a un clic de distancia</span>
        </h3>
      </div>
      <ContentHeader />
      <ContentProcess />
      <ThreeItemGrid />


      <Carousel />
      <ContentAbout />
      <Footer />
    </>
  );
}
