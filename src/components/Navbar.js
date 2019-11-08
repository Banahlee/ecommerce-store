import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
                    <ul className='navbar-nav align-items-center'>
                        <li className='navbar-nav ml-5'>
                            <Link to = '/'>Home</Link>
                        </li>
                    </ul>
                    
                    <Link to='/cart' className='ml-auto'>
                        <button>
                            <i className='fas fa-cart-plus' />
                            view cart
                        </button>
                    </Link>
                   
                </nav>
            </div>
        )
    }
}
