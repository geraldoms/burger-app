import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  const ingredients = [];
  for (let name in props.ingredients) {
    ingredients.push({
      name,
      value: props.ingredients[name],
    });
  }
  const ingredientsOutPut = ingredients.map((ig) => {
    return (
      <span key={ig.name} className={classes.Ingredient}>
        {ig.name} ({ig.value}){' '}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutPut}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
