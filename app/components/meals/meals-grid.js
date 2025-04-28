import classes from './meals-grid.module.css';
import MealInfo from './meal-details';
export default function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => <li key={meal.id}>
              <MealInfo {...meal} />
            </li>)}
        </ul>
    );
}