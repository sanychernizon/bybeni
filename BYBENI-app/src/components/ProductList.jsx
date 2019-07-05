import React, { Component } from 'react';

class ProductList extends Component {

    

    render(){
        console.log(this.props.props.match.params.categoryName)
        return(
            <div>ProductList</div>
        )
    }
}

export default ProductList;