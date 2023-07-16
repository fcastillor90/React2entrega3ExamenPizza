import React, { useContext } from 'react'
import { Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import Contexto from '../context/Context';

const Navbar1 = () => {    
    const {total, formatCurrency } = useContext(Contexto)
    
    return (
        <div>
            <Navbar className="bg-dark">
                <Container>
                <Navbar.Brand>
                    <Link className to='/'>       
                    <div className='titulo'>
                    <h1>🍕¡Pizzería Mamma Mia!🍕</h1>
                    <p>🍕¡Tenemos las mejores pizzas que podrás encontrar!🍕</p>
        </div></Link>
                </Navbar.Brand>
                <NavLink className to='/carrito titulo'>🛒🍕Total: {formatCurrency(total)}🍕 </NavLink>
                </Container>                   
            </Navbar>
        </div>
    );
    };

export default Navbar1