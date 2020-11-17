import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let InputElement = null;
  switch (props.elementType) {
    case 'input':
      InputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      InputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'select':
      InputElement = (
        <select className={classes.InputElement} value={props.value}>
          {props.elementConfig.options.map((op) => (
            <option key={op.value} value={op.value}>{op.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      InputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }

  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      {InputElement}
    </div>
  );
};

export default input;
