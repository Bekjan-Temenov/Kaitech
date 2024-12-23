import Career from "@/components/Career";
import Developer from "@/components/Developer";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Geolacation from "@/components/Geolacation";
import Header from "@/components/Header";
import Instagram from "@/components/Instagram";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import Reviews from "@/components/Reviews";
import Success from "@/components/Success";
import Trusting from "@/components/Trusting";
import WhoMe from "@/components/WhoMe";


export default function Home() {
  return (
    <div >
      <Header/>
      <Developer/>
      <WhoMe/>
      <OurServices/>
      <Success/>
      <OurProjects/>
      <OurTeam/>
      <Career/>
      <Trusting/>
      <Reviews/>
      <Instagram/>
      <Form/>
      <Geolacation/>
      <Footer/>
    </div>
  );
}
