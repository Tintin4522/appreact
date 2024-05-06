'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';

export const Header = () => {
  return(
    <header> 
      <Link id='Link' href="#top">John DOE</Link>
      <nav className='MenuNav'>
        <Link id='LinkNav' href="/">Accueil</Link>
        <Link id='LinkNav' href="/service/">Services</Link>
        <Link id='LinkNav' href="/realisations/">Réalisations</Link>
        <Link id='LinkNav' href="/blog/">blog</Link>
        <Link id='LinkNav' href="/about/">Me contacter</Link>
      </nav>
    </header>
  )
}

export const Footer = () => {
  return (
    <div className="footerDiv">
      <footer className="footer">
        <div className="footerColumn">
          <h4><strong>John Doe</strong></h4>
          <p>40 Rue laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Télephone: 06 20 30 40 50</p>
          <div className="socialLinks">
            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i> 
            </a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/username/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i> 
            </a>
          </div>
        </div>
        <div className="footerColumn">
          <h4><strong>Liens utiles</strong></h4>
          <div className="supportLinks">
            <Link className="supportLink" href="/">
              <i className="fa fa-angle-right"></i>Accueil
            </Link>
            <Link className="supportLink" href="/service">
              <i className="fa fa-angle-right"></i>Services
            </Link>
            <Link className="supportLink" href="/realisations">
              <i className="fa fa-angle-right"></i>Réalisations
            </Link>
            <Link className="supportLink" href="/blog">
              <i className="fa fa-angle-right"></i>Blog
            </Link>
            <Link className="supportLink" href="/about">
              <i className="fa fa-angle-right"></i>Me contacter
            </Link>
          </div>
        </div>
        <div className="footerColumn">
          <h4><strong>Mes dernières réalisations</strong></h4>
          <div className="supportLinks">
            <Link className="supportLink" href="">
              <i className="fa fa-angle-right"></i>Fresh food
            </Link>
            <Link className="supportLink" href="">
              <i className="fa fa-angle-right"></i>Restaurant Akira
            </Link>
            <Link className="supportLink" href="">
              <i className="fa fa-angle-right"></i>Espace bien-être
            </Link>
          </div>  
        </div>
        <div className="footerColumn">
          <h4><strong>Mes derniers articles</strong></h4>
          <div className="supportLinks">
            <Link className="supportLink" href="">
              <i className="fa fa-angle-right"></i>Coder son site en HTML/CSS
            </Link>
            <Link className="supportLink" href="">
              <i className="fa fa-angle-right"></i>Vendre ses produits sur le web
            </Link>
            <Link className="supportLink" href="">
              <i className="fa fa-angle-right"></i>Se positionner sur Google
            </Link>
          </div>  
        </div>
        
      </footer>
    <div className="footerCopyright">
      <strong>© Designed by John Doe</strong>
    </div>
    </div>
  )
}

export const ImageHome = () => {
  return (
    <div className="imageHome"> 
      <picture>
        <source srcSet="/img/hero-bg-tablette.jpg" media="(max-width: 1024px)" />
        <source srcSet="/img/hero-bg-mobile.jpg" media="(max-width: 768px)" />
        <Image 
          src="/img/hero-bg.jpg" 
          alt="Image d'accueil représentant un homme devant son ordinateur" 
          className="backgroundImage"
          layout="fill"
          objectFit="cover"          
        />
      </picture>
      <div className="overlayBackground"></div>
      <div className="textOverlay"> 
        <h1><strong>Bonjour, je suis John Doe</strong></h1> 
        <h2><strong>Développeur web full stack</strong></h2>
        <Link href="#homePage">
          <button className="btnHome">En savoir plus</button>
        </Link>
      </div>
    </div>
  );
};

export const ImageProfil = () => {
  return(
    <div>
      <picture>
        <Image
          src="/img/john-doe-about.jpg"
          alt="photo de John Doe"
          className="profilImage"
          layout="fill"
          objectFit="cover"
        />
      </picture>
    </div>
  )
}

export const ProgressBar = ({ skill, percentage, color }) => {
  return (
    <div className="progressBar">
      <label>{skill}</label>
      <div className="progressBarContainer">
        <div 
          className="progressBarFill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export const ProgressBars = () => {
  return (
    <div className="progressBars">
      <ProgressBar skill="HTML 90%" percentage={90} color="red" />
      <ProgressBar skill="CSS 80%" percentage={80} color="turquoise" />
      <ProgressBar skill="JAVASCRIPT 70%" percentage={70} color="yellow" />
      <ProgressBar skill="PHP 60%" percentage={60} color="green" />
      <ProgressBar skill="React 50%" percentage={50} color="blue" />
    </div>
  );
};

export const Localisation = ({ width = '100%', height = '450px', src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.949070057507!2d4.7983647899675645!3d45.77873482756797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1714746834940!5m2!1sfr!2sfr'}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export const TitlePage = () => {
  return (
      <div>
          <h2 className="PageTitle">Mentions légales</h2>
          <div>    
              <div className="Separateur"></div>
          </div>
      </div>
  )
}

export const Accordion = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (   
    <div className="accordion" id="myAccordion">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                className={`accordion-button ${activeItem === 0 ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleItem(0)}
                aria-expanded={activeItem === 0}
                aria-controls="collapseOne"
                >
                Editeur du site
                </button>
            </h2>
            <div
            id="collapseOne"
            className={`accordion-collapse collapse ${activeItem === 0 ? 'show' : ''}`}
            aria-labelledby="headingOne"
            data-bs-parent="#myAccordion"
            >
                <div className="accordion-body">
                <p><strong>John Doe</strong></p>
                <p><i className="fa-solid fa-map-marker-alt"></i>40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p><a href="tel:0620304050"><i className="fa-solid fa-mobile-screen"></i>06 20 30 40 50</a></p>
                <p><a href="mailto:john.doe@gmail.com"><i className="fa-solid fa-envelope"></i>john.doe@gmail.com</a></p>
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className={`accordion-button ${activeItem === 1 ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleItem(1)}
                    aria-expanded={activeItem === 1}
                    aria-controls="collapseTwo"
                >
                Hébergeur
                </button>
            </h2>
            <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${activeItem === 1 ? 'show' : ''}`}
            aria-labelledby="headingTwo"
            data-bs-parent="#myAccordion"
            >
            <div className="accordion-body">
            <p><strong>Always Data</strong></p>
            <p>91 rue du Faubourg Saint Honoré</p>
            <p>75008 Paris</p>
            <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-globe"></i>
                www.alwaysdata.com
            </a>
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className={`accordion-button ${activeItem === 2 ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleItem(2)}
                    aria-expanded={activeItem === 2}
                    aria-controls="collapseTwo"
                >
                Crédits
                </button>
            </h2>
            <div
            id="collapseThree"
            className={`accordion-collapse collapse ${activeItem === 2 ? 'show' : ''}`}
            aria-labelledby="headingThree"
            data-bs-parent="#myAccordion"
            >
            <div className="accordion-body">
            <p><strong>Crédits</strong></p>
            <p>Site développé par John Doe, étudiant du CEF</p>
            <p>Les images libres de droit sont issues du site <a className="linkMentionsPage" href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a> </p>
            </div>
            </div>
        </div>
    </div>
  );
};



