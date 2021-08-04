import React from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'French Vanilla',
        description: 'Frenchiest Vanilla Ice Cream',
        price: 2.99,
    },
    {
        id: 'm2',
        name: 'Chocolate Almond',
        description: 'If you love almonds, youll definetely love this ice cream!',
        price: 1.99,
    },
    {
        id: 'm3',
        name: 'Butter Pecan',
        description: 'Buttery and Yummy Ice Cream',
        price: 2.99,
    },
    {
        id: 'm4',
        name: 'Cookie Dough',
        description: "This one's for all the Cookie Dough lovers",
        price: 3.99,
    },
];

function AvailableMeals() {
    const icyList = DUMMY_MEALS.map(ice => (
        <MealItem key={ice.id} id={ice.id} name={ice.name} description={ice.description} price={ice.price} />
    ));
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{icyList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
