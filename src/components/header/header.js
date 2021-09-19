import React from "react"
import './header.css'
import picture from '../img/picture.jpg'
import emailIcon from '../img/emailIcon.svg'

export function Container() {
   return (
    <section className="header">
        <div className="background" />
        <img src={picture} className="picture" alt="Fred Leal profile"/>
        <h1 className="name">Frederico Leal</h1>
        <h4 className="description">Front-end Developer</h4>

        <div className="midias">
        <a href={`mailto:flm_@msn.com`} className="icon"> 
                    <img className="icon" src={emailIcon} alt="Email"/>
                    <span className="text"> Email</span>
        </a>
        </div>
    </section>
    );
}