import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/cadastro'}>Cadastro</Link>
            </li>
        </ul>

    )
}

export default Menu