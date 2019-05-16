import React from "react";

class ProductItem extends React.Component{
    render(){
        return(
            <div>
                <p>{this.state.data.Shopname}</p>
                <p>{this.state.data.Can}</p>
                <p>{this.state.data.Area}</p>
            </div>
        )
    }
}

export default ProductItem;