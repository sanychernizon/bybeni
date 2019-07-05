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
        axios.get(`http://localhost:3004/product?isFeatured=true`)
            .then(function (response) {
                this.setState({products: response.data})
                // PROBLEMA COM O BIND!
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default Home;