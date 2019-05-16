import React from "react";
import ProductCard from "react-ui-cards";
import { Link } from 'react-router-dom';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

import WaterCanDetailsRow from './cans/WaterCanDetailsRow';
import {Table} from "reactstrap";



class Book extends React.Component{
    constructor(){
        super();
        this.state={
            items : [
                {
                    "ShopName":"Shop 1",
                    "Can": "Water Can 1",
                    "Area":"HSR"
                   },
                   {
                       "ShopName":"Shop 2",
                       "Can": "Water Can 2",
                       "Area":"Kormangala"
                    }, 
                    {
                       "ShopName":"Shop 3",
                       "Can": "Water Can 3",
                       "Area":"BTM"
                     },
                     {
                       "ShopName":"Shop 4",
                       "Can": "Water Can 4",
                       "Area":"Bellandur"
               }
            ],
            columns: [
                {
                    datafield:'ShopName',
                    text:'Shop Name'
                },
                {
                    datafield:'Can',
                    text:'Water Can'
                },
                {
                    datafield:'Area',
                    text:'Area'
                }
            ],
            quantity: {},
            price:40
                    }
    }
   
    decrease =() => {
        this.setState({
            quantity : this.state.quantity -1,
            price: this.state.price - 40
        });
    }
    increase =() => {
        this.setState({
            quantity : this.state.quantity +1,
            price:this.state.price + 40

        });
    }
    render(){
      const {
        columns,
        items
      } = this.state;
        return(
            <div>
              <table>
                <thead>
                  <tr>
                    {columns.map((column, i) => {
                      return (
                        <th key={i}>
                          {column.text}
                        </th>
                      );
                    })}
                    <th>
                      Quantity
                    </th>
                    <th>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => {
                    return this.getItemAsRow(columns, item);
                  })}
                </tbody>
              </table>
            </div>
        )
    }

  /**
   * Return an item as a table row
   * @param {Array} columns Array of column definitions
   * @param {Object} item The item
   * @returns {String} Item details wrapped in <tr></tr> 
   */
  getItemAsRow(columns, item) {
    return (
      <WaterCanDetailsRow
        columns={columns}
        item={item}
        price={this.state.price}
        quantity={item.quantity}
        setQuantity={this.setQuantity.bind(this, item)}
      />
    );
  }

  setQuantity(item, quantity) {
    item.quantity = quantity;
    this.forceUpdate();
  }
}

export default Book;