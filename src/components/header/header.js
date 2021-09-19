import React from "react"
import './header.css'
import picture from '../img/picture.jpg'
import emailIcon from '../img/emailIcon.svg'
import githubIcon from '../img/githubIcon.svg'
import linkedinIcon from '../img/linkedinIcon.svg'


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
            <a href="https://github.com/fredleal/" className="icon"> 
                <img className="icon" src={githubIcon} alt="GitHub"/>
                <span className="text"> GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/frederico-leal/" className="icon"> 
                <img className="icon" src={linkedinIcon} alt="LinkedIn"/>
                <span className="text"> LinkedIn</span>
            </a>
        </div>
    </section>
    );
}