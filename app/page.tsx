import Banner from "@/components/home/Banner";
import BestSeller from "@/components/home/bestSection/BestSeller";
import Clients from "@/components/home/clients/Clients";
import OurMission from "@/components/home/our-mission/OurMission";
import Review from "@/components/home/review/Review";
import Services from "@/components/home/services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <BestSeller />
      <OurMission />
      <Review />
      <Clients />
      <Services />
    </div>
  );
}
