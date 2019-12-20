import React from 'react';
import "./footer.styles.scss";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => (
    <footer className="footer">
        <p className="footer__legend">2019 Desenvolvido com muito <FontAwesomeIcon
            icon={faCoffee}/></p>
        <div className="footer__links">
            <p>Dashboard</p>
            <p>Alterar plano</p>
            <p>Ajuda & Suporte</p>
        </div>
    </footer>
);

export default Footer;