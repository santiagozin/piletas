import BannerCarousel from 'components/bannerCarousel';
import { Carousel } from 'components/carousel';
import Chatbot from 'components/chatbot';
import ContentAbout from 'components/contentAbout';
import ContentHeader from 'components/contentHeader';
import ContentProcess from 'components/contentProcess';
import { FourItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'Tienda de productos para piletas y el cuidado del hogar',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>

      <BannerCarousel />
      <ContentHeader />
      <FourItemGrid />
      <ContentProcess />
      <Carousel />
      <Chatbot />
      <ContentAbout />
      <Footer />
    </>
  );
}
