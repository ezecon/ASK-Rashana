import { Footer } from "../../Components/Footer/Footer";
import { Gallary } from "../../Components/Gallary/Gallary";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopRoutes from "../../Components/TopRoutes/TopRoutes";
import WhyUs from "../../Components/WhyUs/WhyUs";


export default function Home() {
  return (
    <div>
      <HeroSection/>
        <WhyUs/>
        <Gallary/>
        <TopRoutes/>
        <Footer/>
    </div>
  )
}
