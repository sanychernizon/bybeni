import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import ProductList from './ProductList';
import Home from './Home';

class Content extends Component {

    render() {
        return(
            <div className={ this.props.isOpen ? 'main-content main-on' : 'main-content' }>
                <main>
                    <NavBar menuBtnFunc={this.props.funcs} isOpen={this.props.isOpen} />
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/category/:categoryName" render={(props) => (<ProductList props={props} />)} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Content;