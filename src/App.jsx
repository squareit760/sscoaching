// import { useState } from "react";
import SSCoachingHero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentArticlesSection from "./components/RecentUpdates";
import NNGLearnSection from "./components/NNGLearnSection";
import PopularCoursesSection from "./components/PopularCoursesSection";
import PrivateTeamTraining from "./components/PrivateTeamTraining";
import WhyNNGSection from "./components/WhyNNGSection";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SSCoachingHero />
      <RecentArticlesSection />
      <NNGLearnSection />
      <PopularCoursesSection />
      <PrivateTeamTraining />
      <WhyNNGSection />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;