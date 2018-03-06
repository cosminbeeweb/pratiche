import React, { Component } from 'react';
import Footer from '../footer';
import {breadcrumbData, scrollToTop, changeTitle, attemptSearch} from '../../assets/js/helper';
import { Link } from 'react-router-dom';

class Imprese extends Component {
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: "",
            activePage: "chi-siamo"
        };
    }

    componentWillMount()
    {
        scrollToTop();
        changeTitle(this.state.activePage);
        // generateMetas(this.state.activePage);

        this.setState({ breadcrumb: breadcrumbData[window.location.pathname].placeholder });
    }

    componentDidMount()
    {
        document.getElementById('search-box').addEventListener('keyup', event => {
            if ((document.getElementById('search-box').value).length >= 3)
                attemptSearch(document.getElementById('search-box').value);
            else
                document.getElementsByClassName('search-results')[1].classList.remove("open");
        });
    }

    render()
    {
        return (
            <div>
                <div className="page-container-hero">
                    <div className="breadcrumb-container">
                        <div className="main-breadcrumb">
                            <ul className="breadcrumb-list" itemScope itemType="http://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <i className="fa fa-home"></i>
                                    <Link to="/"><span className="front-breadcrumb" itemProp="name"> Home </span></Link>
                                    <meta itemProp="position" content="1" />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <span className="actual-breadcrumb" itemProp="name"> { this.state.breadcrumb } </span>
                                    <meta itemProp="position" content="2" />
                                </li>
                            </ul>
                        </div>
                        <div className="title-breadcrumb">
                            <h2>{ this.state.breadcrumb }</h2>
                        </div>
                    </div>

                    <div className="hero-inner-container">
                        <div className="container">
                            <div className="search-container">
                                <form className="search-services-form">
                                    <input id="search-box" className="search-services" placeholder="Inserisci il nome del documento o del servizo che stai cercando..."/>
                                </form>
                                <div className="search-results"></div>
                            </div>
                        </div>

                        <div className="chi-siamo-wrapper">
                            <div className="banner-chi-siamo">
                                <h2>da oggi svolgerai</h2>
                                <h2>la tue pratiche</h2>
                                <h2>in soli <span className="heading-sp-w">2 minuti</span></h2>
                            </div>

                            <div className="description">
                            	La società 2M srl nasce dall’idea di Mario e Massimo Santoro, due professionisti che nel 2010 decidono di
								costituire un’ Agenzia di disbrigo pratiche amministrative che eroga i propri servizi a favore di
								professionisti, aziende e privati su tutto il territorio nazionale. Grazie ad una efficiente struttura
								organizzativa e ad un team altamente qualificato, l’Agenzia 2M, riesce ad espletare tutte le pratiche
								burocratiche in tempi rapidi e costi ridotti facendo risparmiare ai propri clienti tempo e denaro.
								Con un approccio completamente orientato al raggiungimento dei risultati, alla soddisfazione del cliente e
								con un continuo dialogo con la pubblica amministrazione, la società 2M riesce ad espletare ogni tipo di
								adempimenti burocratici anche i più complessi    
                            </div>
                        </div>

                        <hr className="hr-hero"/>

                        <div className="heading chi-siamo">
                            <h2>PERCHÈ SCEGLIERE PRATICHE 2M</h2>
                        </div>

                        <div className="images chi-siamo">
                            <div>
                                <img src="/assets/images/trasparenza.jpg" alt="Trasparenza"/>
                                <h3 className="heading">TRASPARENZA</h3>
                                <p className="description">Il nostro team di professionisti è sempre pronto a rispondere alle tue domande.</p>
                            </div>
                            <div>
                                <img src="/assets/images/vantaggi.jpg" alt="Vantaggi"/>
                                <h3 className="heading">VANTAGGI</h3>
                                <p className="description">Eviterai di perdere tempo prezioso; i nostri consulenti ti assisteranno anche telefonicamente.</p>
                            </div>
                            <div>
                                <img src="/assets/images/velocita.jpg" alt="Velocità"/>
                                <h3 className="heading">VELOCITÀ</h3>
                                <p className="description">Il nostro servizio è in grado di soddisfare le vostre richieste anche in poche ore.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer type="secondary"/>
            </div>
        );
    }
}

export default Imprese;