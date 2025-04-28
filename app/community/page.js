import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Welcome to flavor paradise — where foodies unite, recipes ignite, and every bite tells a story!</p>
      </header>
      <main className={classes.main}>
        <h2>Why You’ll Love Being Here</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Dish out your signature recipes and dig into a world of drool-worthy meals</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Meet fellow flavor fanatics, swap foodie secrets, and build your culinary crew</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Snag invites to exclusive events, tasty meetups, and unforgettable kitchen adventures</p>
          </li>
        </ul>
      </main>
    </>
  );
}
