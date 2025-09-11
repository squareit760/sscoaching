// import { useState } from "react";
import SSCoachingHero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentArticlesSection from "./components/RecentUpdates";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SSCoachingHero />
      <RecentArticlesSection />
    </>
  );
}

export default App;