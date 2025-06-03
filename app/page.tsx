import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Products from "./components/Products";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import AccordionFAQ from "./components/AccordionFAQ";



export default function Home() {
  return (
    <section>
      <Hero />
      <OurStory />
      <Products />
      <WhyChooseUs />
      <WhoWeAre />
      <AccordionFAQ />
    </section>
  );
}
