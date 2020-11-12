import React, { Component } from 'react';
import Order from '../../components/Order/CheckoutSummary/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get('/orders.json')
      .then((resp) => {
        const fetchedOrders = [];
        for (let key in resp.data) {
          fetchedOrders.push({
            ...resp.data[key],
            id: key,
          });
        }
        console.log(fetchedOrders);
        this.setState({ orders: fetchedOrders });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            price={+order.price}
            ingredients={order.ingredients}
          />
        ))}
        {/* <Order /> */}
        {/* <Order/> */}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
