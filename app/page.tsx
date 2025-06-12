import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
// import Products from "./components/Products";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import AccordionFAQ from "./components/AccordionFAQ";
import FeaturedBoats from "./components/FeaturedBoats";



export default function Home() {
  return (
    <section className="overflow-clip">
      <Hero />
      <OurStory />
      {/* <Products /> */}
      <FeaturedBoats />
      <WhyChooseUs />
      <WhoWeAre />
      <AccordionFAQ />
    </section>
  );
}
