import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">Sobre Nosotros</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/team">Equipo</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/plan">PLAN</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/solutions">SOLUCIONES</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/response">RESPONDE</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/repairs">REPARA</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Elements (BORRAR)</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
