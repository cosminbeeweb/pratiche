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
                                <span className="span-close-sidebar"> MENU </span>
                            </div>
                            <ul>
                                <li className="single overview">
                                    <Link to="/camera-di-commercio"> CAMERA DI COMMERCIO </Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/agenzia-delle-entrate"> AGENZIA DELLE ENTRATE </Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/tribunale"> TRIBUNALE </Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/comune"> COMUNE </Link>
                                </li>

                                {/*<li className="single overview">*/}
                                    {/*<Link to="/imprese"> IMPRESE </Link>*/}
                                {/*</li>*/}

                                {/*<li className="single overview">*/}
                                    {/*<Link to="/privati">PRIVATI</Link>*/}
                                {/*</li>*/}

                                {/*<li className="single overview">*/}
                                    {/*<Link to="/professionisti">PROFESSIONISTI</Link>*/}
                                {/*</li>*/}


                                <li className="single overview">
                                    <Link to="/agenzia-per-la-riscossione">AGENZIA PER LA RISCOSSIONE / EX EQUITALIA</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/servizi-digitali">SERVIZI DIGITALI</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/servizi-professionali">SERVIZI PROFESSIONALI</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/chi-siamo">CHI SIAMO</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/domande-frequenti">DOMANDE FREQUENTI</Link>
                                </li>

                                <li className="single overview">
                                    <Link to="/contatti">CONTATTI</Link>
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