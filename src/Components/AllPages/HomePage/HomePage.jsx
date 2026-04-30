import BrowseByGenre from './BrowseByGenre';
import FeaturedBooks from './FeaturedBooks';
import Hero from './Hero';
import MarqueePage from './MarqueePage';
import TheLuminaExperience from './TheLuminaExperience';

const HomePage = () => {
  return (
    <main className="space-y-10">
      <section>
        <Hero />
      </section>

      <section>
        <MarqueePage />
      </section>

      <section>
        <FeaturedBooks />
      </section>

      <section>
        <BrowseByGenre />
      </section>

      <section>
        <TheLuminaExperience />
      </section>
    </main>
  );
};

export default HomePage;
