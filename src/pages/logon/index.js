import React from 'react';
import './style.css';
import {FiLogIn} from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"></img>
            
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit"> Entrar </button>

                    <a href="/register">
                        <FiLogIn SIZE={16} color="#E02041" />
                        Não tenho cadastro
                    </a>

                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}