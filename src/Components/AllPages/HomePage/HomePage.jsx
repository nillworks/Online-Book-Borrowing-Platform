import BrowseByGenre from './BrowseByGenre';
import Hero from './Hero';
import MarqueePage from './MarqueePage';
import TheLuminaExperience from './TheLuminaExperience';

const HomePage = () => {
  return (
    <>
      <Hero />

      <section>
        <MarqueePage />
      </section>

      <section className="pt-20">
        <BrowseByGenre />
      </section>

      <section>
        <TheLuminaExperience />
      </section>
    </>
  );
};

export default HomePage;
