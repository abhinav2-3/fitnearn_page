import Header from "./components/Header";
import Hero from "./components/Hero";
import Community from "./components/Community";
import CoachSection from "./components/CoachSection";
import FeatureSection from "./components/FeatureSection";
import ActionCard from "./components/ActionCard";
import StepSection from "./components/StepSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="bg-brown w-full h-auto text-primary_white overflow-hidden">
      <Header />
      <Hero />
      <div className="lg:px-24 md:16 px-8">
        <Community />
      </div>
      <CoachSection />
      <FeatureSection />
      <ActionCard />
      <StepSection />
      <Testimonial />
      <Footer />
    </section>
  );
}

export default App;
