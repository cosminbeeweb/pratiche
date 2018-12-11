import React, { Component } from 'react';
import Footer from '../footer';
import {
    breadcrumbData, servicesList, scrollToTop, changeTitle, initRecaptcha,
    attemptSearch
} from '../../assets/js/helper';
import { Link } from 'react-router-dom';

class fatturazioneElettronica extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            breadcrumb: "",
            activePage: "fatturazione-elettronica"
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
        initRecaptcha();
    }

    render()
    {
        return(
            <div>
                <div className="page-container-hero">
                    <div className="page-header-services"></div>
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

                    <div className="hero-inner-container servizi">
                        <div className="page-container">
                            <div className="hero-row">
                                <div className="contact-information hero-column hero-col-6">
                                    <div className="services-list">
                                        <div className="list-header row">
                                            <div className="hero-col-3">
                                                <img src={"/assets/images/icona-fattura.png"} alt="service icon"/>
                                            </div>
                                            <div className="hero-col-8">
                                                <h3 style={{fontSize: 17 + 'px'}}>{ this.state.breadcrumb } B2B</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <p>La Legge di Stabilità 2018 ha introdotto l’obbligo generalizzato della fattura elettronica per tutte le operazioni (cessioni di beni e prestazioni di servizi) fra soggetti identificati ai fini IVA in Italia esercenti imprese, arti o professioni, sia nei confronti di imprese/artisti/professionisti (Business- to-Business o B2B) sia nei confronti di privati (Business-to-Consumer o B2C).</p>
                                            <p>L’obbligo di utilizzare la fattura elettronica implica che le fatture cartacee non saranno più ammesse per le operazioni nazionali e si considereranno come non emesse, esponendo i cedenti/prestatori nonché i cessionari/destinatari a rilevanti sanzioni (Fatture emesse dal 90% al 180% dell’IVA; Fatture ricevute il 100% dell’IVA)</p>
                                            {/*<div className="subheader-button">*/}
                                                {/*<button>SCARICA IL PDF INFORMATIVO</button>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-form hero-column hero-col-6">
                                    <h3>COMPILA UN MODULO <br/> PER MAGGIORI INFORMAZIONI</h3>

                                    <form className="form-template">
                                        <div className="form-corner"></div>
                                        <label htmlFor="name">NOME</label>
                                        <input required type="text" name="name" id="name" autoCorrect="off"/>
                                        <label htmlFor="surname">COGNOME</label>
                                        <input required type="text" name="surname" id="surname" autoCorrect="off"/>
                                        <label htmlFor="phone">TELEFONO</label>
                                        <input required type="text" name="phone" id="phone" autoCorrect="off"/>
                                        <label htmlFor="email">EMAIL</label>
                                        <input required type="email" name="email" id="email" autoCorrect="off"/>
                                        <label htmlFor="message">MESSAGGIO</label>
                                        <textarea required name="message" id="message" cols="30" rows="10" autoCorrect="off"></textarea>

                                        <div className="g-recaptcha" data-sitekey="6LdnlEQUAAAAAIkXZOfhbc2n0aGb6P7PfYrvpxX_"></div>
                                        <button className="contact-submit" type="button">INVIA MESSAGGIO</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textarea-clearfix hidden"></div>
                <span className="contact"></span>
                <Footer type="secondary"/>
            </div>
        );
    }
}

export default fatturazioneElettronica;