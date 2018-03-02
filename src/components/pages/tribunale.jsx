import React, { Component } from 'react';
import Footer from '../footer';
import {
    breadcrumbData, servicesList, scrollToTop, changeTitle, initRecaptcha,
    attemptSearch
} from '../../assets/js/helper';
import { Link } from 'react-router-dom';

class Tribunale extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            breadcrumb: "",
            activePage: "tribunale"
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

        initRecaptcha();
    }

    renderList()
    {
        const list = servicesList[this.state.activePage].list.map((item, i) => {
            return (
                <div key={i}>
                    <li> <span>{ item }</span></li>
                </div>
            )
        });

        return list;
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
                        <div className="container">
                            <div className="search-container">
                                <form className="search-services-form">
                                    <input id="search-box" className="search-services" placeholder="Inserisci il nome del documento o del servizo che stai cercando..."/>
                                </form>
                                <div className="search-results"></div>
                            </div>
                        </div>
                        <div className="page-container">
                            <div className="hero-row">
                                <div className="hero-column hero-col-12">
                                    <p>Con il nostro supporto è possibile ottenere pratiche e documenti anche dal tribunale, come casellari giudiziari, carichi pendenti e notifiche di atti. I nostri collaboratori sono costantemente a vostra disposizione, consentendo a tutti i nostri clienti di ottenere i documenti desiderati in poco tempo.</p>
                                </div>
                            </div>
                            <div className="hero-row">
                                <div className="contact-information hero-column hero-col-6">
                                    <div className="services-list">
                                        <div className="list-header row">
                                            <div className="hero-col-3">
                                                <img src={"/assets/images/" + servicesList[this.state.activePage].icon } alt="service icon"/>
                                            </div>
                                            <div className="hero-col-8">
                                                <h3>SERVIZI</h3>
                                            </div>
                                        </div>

                                        <ul>
                                            { this.renderList() }
                                        </ul>
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

export default Tribunale;