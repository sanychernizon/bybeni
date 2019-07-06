import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: ''
        }
    }

    componentWillMount() {
        let products = []
        axios.get(`http://localhost:3004/product?isFeatured=true`)
            .then(function (response) {
                products.push(response.data)
                // PROBLEMA COM O BIND!
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({products}) 
    }

    render(){
        // console.log(this.state.products)
        return(
            <div>
                
            </div>
        )
    }
}

export default Home;