// src/app/components/homepage/HomePage.tsx
import Header from "../layout/Header";
import Hero from "./Hero";
import MainPostsSection from "./MainPostsSection";
import BigCTASection from "./BigCTASection";
import TopDestinationsSection from "./DestinationCard";
import MainContent from "./MainContent";
import Footer from "../layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="relative">
        <Hero />
        <Header />
      </div>

      {/* Blog cards section */}
      <MainPostsSection />
      <BigCTASection />
      <TopDestinationsSection />
      <MainContent />
      <Footer />
    </main>
  );
}
