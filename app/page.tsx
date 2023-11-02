import ParallaxBg from '@/components/paralaxhero/ParallaxBg'
import AboutUs from '@/components/about-us';
import Products from '@/components/product';
import Footer from '@/components/footer';
export default function Page() {

  return (
    <div>
      <ParallaxBg/>
      <AboutUs/>
      <Products/>
      <Footer/>
    </div>
  )
}