import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-gradient-to-b lg:h-[140vh] no-scrollbar">
      <Header></Header>
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner/>
        <MovieRow sectionTitle="Football" />
        <MovieRow sectionTitle="Top Rated" />
        <MovieRow sectionTitle="Action Movies" />
      </main>
    </div>
  );
}
