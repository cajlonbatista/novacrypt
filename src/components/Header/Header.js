import React from 'react';

import {
    HeaderContainer
} from './styles';
import { Link } from 'react-router-dom';

import logo from '../../global/assets/icons/logo.svg';
import home from '../../global/assets/icons/home.svg';
import about from '../../global/assets/icons/sobre.svg';
import contact from '../../global/assets/icons/contato.svg';


export default function Header(){
    return(
        <HeaderContainer>
            <div>
                <img src={logo}></img>
                <span>NovaCrypt</span>
            </div>
            <div>
                <Link to='#'>
                    <img src={home} style={{width: 23}}></img>
                    Início
                </Link>
                <Link to='#'>
                    <img src={contact}></img>
                    Contato
                </Link>
                <Link to='#'>
                    <img src={about}></img>
                    Sobre
                </Link>
            </div>
        </HeaderContainer>
    );
}