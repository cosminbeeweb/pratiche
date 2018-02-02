import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return(
            <div>
                <div className="overlay-sidebar"></div>
                <div className="sidebar-menu-hero">
                    <main className="cd-main-content">
                        <nav className="cd-side-nav">
                            <div className="cd-nav-top-close">
                                <i id="cd-nav-trigger-close" className="fa fa-times" aria-hidden="true"></i>
                                <span className="span-close-sidebar">MENU</span>
                            </div>
                            <ul>
                                <li className="has-children overview">
                                    <a href="#0">CAMERA DI COMMERCIO <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                    <ul>
                                        <li><a href="#0">Banche Dati</a></li>
                                        <li><a href="#0">Deposito Bilancio</a></li>
                                        <li><a href="#0">Comunica Starweb</a></li>
                                        <li><a href="#0">Start Up innovative - Iscrizione</a></li>
                                        <li><a href="#0">Visure Camerali</a></li>
                                        <li><a href="#0">Registrazione Marchio Aziendale</a></li>
                                        <li><a href="#0">Estratto Conto Diritti Camerali</a></li>
                                        <li><a href="#0">PEC - Posta Electronica Certificata</a></li>
                                    </ul>
                                </li>
                                <li className="has-children overview">
                                    <a href="#0">AGENZIA ENTRATE / INPS / INAIL <i className="fa fa-angle-right" aria-hidden="true"></i></a>

                                    <ul>
                                        <li><a href="#0">Start Up innovative - Iscrizione</a></li>
                                        <li><a href="#0">Banche Dati</a></li>
                                        <li><a href="#0">Estratto Conto Diritti Camerali</a></li>
                                        <li><a href="#0">Deposito Bilancio</a></li>
                                        <li><a href="#0">Comunica Starweb</a></li>
                                        <li><a href="#0">Registrazione Marchio Aziendale</a></li>
                                        <li><a href="#0">Visure Camerali</a></li>
                                        <li><a href="#0">PEC - Posta Electronica Certificata</a></li>
                                    </ul>
                                </li>
                                <li className="has-children overview">
                                    <a href="#0">ALTRI SERVIZI <i className="fa fa-angle-right" aria-hidden="true"></i></a>

                                    <ul>
                                        <li><a href="#0">Estratto Conto Diritti Camerali</a></li>
                                        <li><a href="#0">Deposito Bilancio</a></li>
                                        <li><a href="#0">Start Up innovative - Iscrizione</a></li>
                                        <li><a href="#0">Visure Camerali</a></li>
                                        <li><a href="#0">Registrazione Marchio Aziendale</a></li>
                                        <li><a href="#0">Comunica Starweb</a></li>
                                        <li><a href="#0">PEC - Posta Electronica Certificata</a></li>
                                        <li><a href="#0">Banche Dati</a></li>
                                    </ul>
                                </li>
                                <li className="has-children overview">
                                    <a href="#0">SUPPORTI DIGITALI <i className="fa fa-angle-right" aria-hidden="true"></i></a>

                                    <ul>
                                        <li><a href="#0">Start Up innovative - Iscrizione</a></li>
                                        <li><a href="#0">Banche Dati</a></li>
                                        <li><a href="#0">Comunica Starweb</a></li>
                                        <li><a href="#0">Deposito Bilancio</a></li>
                                        <li><a href="#0">Visure Camerali</a></li>
                                        <li><a href="#0">Registrazione Marchio Aziendale</a></li>
                                        <li><a href="#0">PEC - Posta Electronica Certificata</a></li>
                                        <li><a href="#0">Estratto Conto Diritti Camerali</a></li>
                                    </ul>
                                </li>

                                <li className="single overview">
                                    <Link to="/imprese"> IMPRESE </Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/privati">PRIVATI</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/professionisti">PROFESSIONISTI</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/chi-siamo">CHI SIAMO</Link>
                                </li>

                                <li className="single overview">
                                    <a href="#0">DOMANDE FREQUENTI</a>
                                </li>

                                <li className="single overview">
                                    <a href="#0">CONTATTI</a>
                                </li>
                            </ul>
                        </nav>
                    </main>
                </div>


                <nav className="navbar navbar-toggleable-md navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item hero-offset-2 col-md-2 item0">
                                <div style={{ float: "left", marginRight: "30px" }} id="cd-nav-trigger" className="nav-link"><i style={{ color: "#000"}} className="fa fa-bars fa-3" aria-hidden="true"></i></div>
                                <span><Link to="/" className="nav-link"><img src='/assets/images/logo-header.png' alt="logo-header"/></Link></span>
                            </li>
                            <li className="nav-item offset-md-1 item-hero item1">
                                <a className="nav-link" href="#0">CAMERA <br/> DI COMMERCIO</a>
                            </li>
                            <li className="nav-item item-hero item2">
                                <a className="nav-link" href="#0">AGENZIA ENTRATE <br/> INPS / INAIL</a>
                            </li>
                            <li className="nav-item item-hero item3">
                                <a className="nav-link" href="#0">ALTRI <br/> SERVIZI</a>
                            </li>
                            <li className="nav-item item-hero item4">
                                <a className="nav-link" href="#0">SUPPORTI <br/> DIGITALI</a>
                            </li>
                            <li className="nav-item item-hero item5">
                                    <span style={{float: 'left', marginTop: '16px', marginRight: '10px'}}>
                                        <img className="telephone-button" src='/assets/images/telefono-header.png' alt="contact-phone-icon"/>
                                    </span>
                                <a className="nav-link" href="#0">
                                    <span className="text-contact-header">Contattaci Subito!</span><br/>
                                    <span className="header-telephone">081 198 12836</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;