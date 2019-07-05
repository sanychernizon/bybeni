import React, { Component } from 'react';
import MenuButton from './Buttons/MenuButton';

class Menu extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    name: "camisa",
                    icon: "https://res.cloudinary.com/bybeni/image/upload/v1562344969/camisa_z39iud.svg"
                },
                {
                    name: "camiseta",
                    icon: "https://res.cloudinary.com/bybeni/image/upload/v1562344971/shirt_qt7vo1.svg"
                },
                {
                    name: "calça",
                    icon: "https://res.cloudinary.com/bybeni/image/upload/v1562344970/jeans_salrcc.svg"
                },
                {
                    name: "bermuda",
                    icon: "https://res.cloudinary.com/bybeni/image/upload/v1562344971/short_hb6xvl.svg"
                },
                {
                    name: "sapato",
                    icon: "https://res.cloudinary.com/bybeni/image/upload/v1562344971/shoes_r5wzq7.svg"
                },
                {
                    name: "jaqueta",
                    icon: "https://res.cloudinary.com/bybeni/image/upload/v1562344970/leather-biker-jacket_sxsqpy.svg"
                }
            ]
        }
    }

    render(){
        return(
            <nav className={ this.props.isOpen ? 'menu-container menu-on' : 'menu-container' }>
                <div className="user-menu">
                    <a href="app-account.html">
                        <div className="user-menu-box">
                            <div className="user-thumbnail">
                                <img src="https://res.cloudinary.com/bybeni/image/upload/v1562344972/user_zd2wcl.svg" alt="user-icon" />
                            </div>
                            <div className="user-login">
                                <p>Logar ou criar minha conta.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <ul>
                {
                    this.state.categories.map((item, idx) => {
                        return <MenuButton key={idx} props={item} />
                    })
                }
                </ul>
            </nav>
        )
    }
}

export default Menu;