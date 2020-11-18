import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fatest', displayValue: 'Fatest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fatest',
      },
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {}
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    console.log(formData);
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };
    axios
      .post('/orders.json', order)
      .then((resp) => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error: ' + err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  inputChangedHandler = (event, field) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[field] };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[field] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementArray.map((e) => (
          <Input
            key={e.id}
            elementType={e.config.elementType}
            elementConfig={e.config.elementConfig}
            value={e.config.value}
            changed={(event) => this.inputChangedHandler(event, e.id)}
          />
        ))}
        <Button btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
