import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {name:'', password:''};
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render(){
        return(
            <div>
            <Card style={{width:'380px',left:'450px', bottom:'-120px'}}>
              <CardHeader>Registration Form</CardHeader>
              <CardBody>
                <CardTitle>User Details</CardTitle>
                <CardText>
                <form>
                    <label>Username/Email id:</label>
                    <input type="text" onChange={this.handleInputChange}></input>
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" onChange={this.handleInputChange}></input>
                    <br />
                    <br />
                    <Button type="submit" className="btn btn-success">Login</Button>
                    
                </form>
                </CardText>
              </CardBody>
              <CardFooter>Water-can at your door</CardFooter>
            </Card>
      
          </div>
        )
    }
}

export default Login;