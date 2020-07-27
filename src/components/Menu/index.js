import React from 'react';
import logoTechFlix from '../../assets/img/logoTechFlix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={logoTechFlix} alt="TechFlixLogo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;