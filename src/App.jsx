import {
  Navbar,
  HeroSection,
  IntroductionSection,
  GuildelineSection,
  CriteriaSection,
  FAQSection,
  RewardSection,
  Sponsor,
  PolicySection,
  Footer,
} from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <GuildelineSection />
      <CriteriaSection />
      <FAQSection />
      {/* <TimelineSection /> */}
      <RewardSection />
      <Sponsor />
      <PolicySection />
      <Footer />
    </div>
  );
}

export default App;
