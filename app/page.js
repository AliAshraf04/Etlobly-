import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from './components/images/image-slideshow';

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Etlobly – Where Foodies Find Flavor</h1>
            <p>Discover, taste, and share incredible dishes from around the globe.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join Our Foodie Fam</Link>
            <Link href="/meals">Start Exploring Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Etlobly brings food lovers together to share their favorite recipes and
            discover unique flavors from every corner of the world.
          </p>
          <p>
            Whether you&apos;re a seasoned chef or a curious beginner, Etlobly is your
            go-to spot for inspiration, connection, and delicious discovery.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Etlobly?</h2>
          <p>
            Because food is more than fuel—it&apos;s culture, creativity, and connection.
            Etlobly makes it easy to find new favorites and meet fellow flavor adventurers.
          </p>
          <p>
            Join a passionate community where every bite tells a story. This is where
            your food journey begins.
          </p>
        </section>
      </main>
    </>
  );
}
