import React from "react";
import ProductCard from "react-ui-cards";
import { Link } from 'react-router-dom';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
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
                    datafield:'shopname',
                    text:'Shop Name'
                },
                {
                    datafield:'WaterCan',
                    text:'Water Can'
                },
                {
                    datafield:'Area',
                    text:'Area'
                }
            ],
            quantity:0,
            price:0
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
        return(
            <div>
                       <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Shop Name</th>
      <th>Water Can</th>
      <th>Area</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Shop 1</td>
      <td>Water Can 1</td>
      <td>HSR</td>
      <td>
      <button onClick={this.decrease}>-</button>
     {this.state.quantity}
      <button onClick={this.increase}>+</button>
      </td>
      <td>
      ₹{this.state.price}
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Shop 2</td>
      <td>Water Can 2</td>
      <td>Kormangala</td>
      <td>
      <button onClick={this.decrease}>-</button>
      {this.state.quantity}
      {
          console.log("cdcdc",this.state.quantity)
      }
      <button onClick={this.increase}>+</button>
      </td>
      <td>
      ₹{this.state.price}
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Shop 3</td>
      <td>Water Can 3</td>
      <td>BTM</td>
      <td>
      <button onClick={this.decrease}>-</button>
      {this.state.quantity}
      <button onClick={this.increase}>+</button>
      </td>
      <td>
      ₹{this.state.price}
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Shop 4</td>
      <td>Water Can 4</td>
      <td>Bellandur</td>
      <td>
      <button onClick={this.decrease}>-</button>
      {this.state.quantity}
      <button onClick={this.increase}>+</button>
      </td>
      <td>
      ₹{this.state.price}
      </td>
    </tr>
    
  </tbody>
</Table>
            </div>
        )
    }
}

export default Book;