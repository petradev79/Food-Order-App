import { Fragment, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import useHttp from '../../../hooks/use-http';
import { db } from '../../../firebase/config';

import Card from '../../General/card/Card';
import MealItem from '../mealItem/MealItem';
import classes from './Meals.module.css';
import MealItemType from '../../../types/MealItemType';

const Meals: React.FC = () => {
  const [meals, setMeals] = useState<MealItemType[]>([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const mealsCollectionRef = collection(db, 'meals');
    const transformMeals = (mealsData: any) => {
      setMeals(
        mealsData.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchMeals(getDocs(mealsCollectionRef), transformMeals);
  }, [fetchMeals]);

  const mealsSummary = (
    <section className={classes['meals-summary']}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );

  if (isLoading) {
    return (
      <section className={classes.mealsLodaing}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal: MealItemType) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Fragment>
      {mealsSummary}
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default Meals;
