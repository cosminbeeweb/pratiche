import React, { Component } from 'react';
import Footer from '../footer';
import Map from '../map';
import {breadcrumbData, scrollToTop, changeTitle, initRecaptcha, attemptSearch} from '../../assets/js/helper';
import { Link } from 'react-router-dom';

class Contatti extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            breadcrumb: "",
            activePage: "contatti"
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

    render()
    {
        return(
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

                    <Map/>

                    <div className="hero-inner-container contact">
                        <div className="container">
                            <div className="search-container">
                                <form className="search-services-form">
                                    <input id="search-box" className="search-services" placeholder="Inserisci il nome del documento o del servizo che stai cercando..."/>
                                </form>
                                <div className="search-results"></div>
                            </div>
                        </div>
                        <div className="page-container hero-row">
                            <div className="contact-form hero-column hero-col-6">
                                <h3>INVIA UN MESSAGGIO</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis consequuntur cupiditate dignissimos, dolorem earum eius eligendi consequunt </p>

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
                            <div className="contact-information hero-column hero-col-6">
                                <h3>RECAPITI</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis consequuntur cupiditate dignissimos, dolorem earum eius eligendi consequunt </p>

                                <div className="hero-row">
                                    <div className="hero-column horizontal-align hero-col-2">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <div className="hero-column vertical-align hero-col-10">
                                        <div>Viale J.F. Kennedy, 5 (Adiacente alL'ACI - PRA)</div>
                                        <div>80125 - Napoli</div>
                                        <div>Ampia possibilità di parcheggio nelle vicinanze</div>
                                    </div>
                                </div>

                                <div className="hero-row">
                                    <div className="hero-column horizontal-align hero-col-2">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className="hero-column vertical-align hero-col-10">
                                        <div>Tel. +39 081 198 12836</div>
                                        <div>Fax +39 081 198 12923</div>
                                    </div>
                                </div>

                                <div className="hero-row">
                                    <div className="hero-column horizontal-align hero-col-2">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="hero-column vertical-align hero-col-10">
                                        <div><a href="mailto:info@pratiche2m.it"> info@pratiche2m.it </a></div>
                                    </div>
                                </div>

                                <hr className="hr-hero2"/>

                                <div className="hero-row social-links">
                                    <div className="hero-column justified hero-col-offset-1 hero-col-2">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="hero-column justified hero-col-2">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="hero-column justified hero-col-2">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="hero-column justified hero-col-2">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-2" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="hero-column justified hero-col-2">
                                        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-2" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textarea-clearfix hidden"></div>
                <span className="contact"></span>
                <Footer type="contact"/>
            </div>
        );
    }
}

export default Contatti;