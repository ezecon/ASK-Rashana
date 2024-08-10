import { Footer } from "../../Components/Footer/Footer";
import { Gallary } from "../../Components/Gallary/Gallary";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Products } from "../../Components/Products/Products";
import TopMenu from "../../Components/TopMenu/TopMenu";
import WhyUs from "../../Components/WhyUs/WhyUs";



export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Products isHome/>
      <TopMenu/>
      <Gallary/>
      <WhyUs/>
        <Footer/>
    </div>
  )
}
