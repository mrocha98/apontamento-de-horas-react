import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCog, faExpandArrowsAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
import './menu-top.styles.scss';

const MenuTop = () => {
    return (
        <nav role="navigation" aria-label="main navigation" className="menu-top">
            <div className="navbar-brand menu-top-container">

                <div className="menu-top-container__logo" />

                <h1 className="menu-top-container__title">Projeto <strong>Fácil</strong></h1>

                <button className="button is-text menu-top-container__hamburger-button">
                    <FontAwesomeIcon icon={faBars}/>
                </button>

                <p className="control has-icons-right menu-top-container__search-bar">
                    <input className="input is-rounded is-hovered" type="text" placeholder="Buscar..."/>
                        <FontAwesomeIcon icon={faSearch} className="icon is-right search-bar__icon"/>
                </p>

                <div className="menu-top-container__control-buttons">
                    <button className="button is-text rounded-button control-buttons__config-button">
                        <FontAwesomeIcon icon={faCog} color="white"/>
                    </button>
                    <button className="button is-text rounded-button control-buttons__fullscreen-button">
                        <FontAwesomeIcon icon={faExpandArrowsAlt} color="white"/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default MenuTop;