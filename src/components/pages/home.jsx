import React, { Component } from 'react';
import {tabsData, scrollToTop, changeTitle, attemptSearch } from "../../assets/js/helper";
import Footer from '../footer';

class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activeTab: "emissione",
            activePage: "home",
            activeIndex: 0
        };
    }

    componentWillMount()
    {
        scrollToTop();
        changeTitle(this.state.activePage);
        // generateMetas(this.state.activePage);
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

    handleItemClick = e => this.setState({ activeTab: e.currentTarget.dataset.name });

    checkActive(tab, local)
    {
        if (tab === local)
            return(
                <span className="triangle">
                    <img src="/assets/images/triangle.png" alt="triangle"/>
                </span>
            );
    }

    renderInformationTab(tab)
    {
        const activeTab = this.state.activeTab;

        return (
            <div className="container">
                <div className="information-tab wide row justify-content-start">
                    <div className="left-box col-md-4">
                        <h2 className="information-heading"> IN EVIDENZA </h2>
                        <h4 className="information-tab-item" active={ activeTab === "emissione" ? "true" : "false" } data-name="emissione" onClick={this.handleItemClick}> EMISSIONE FIRMA DIGITALE { this.checkActive(tab, 'emissione') } </h4>
                        <h4 className="information-tab-item" active={ activeTab === "pratiche" ? "true" : "false" } data-name="pratiche" onClick={this.handleItemClick}> PRATICHE CAMERALI { this.checkActive(tab, 'pratiche') } </h4>
                        <h4 className="information-tab-item" active={ activeTab === "certificati" ? "true" : "false" } data-name="certificati" onClick={this.handleItemClick}> CERTIFICATI E VISURE { this.checkActive(tab, 'certificati') } </h4>
                    </div>
                    <div className="right-box col-md-8">
                        <div className="left-image col-md-2 col-md-offset-1">
                            <img src={"/assets/images/" + tabsData[tab].icon} alt="Certificati e visure"/>
                        </div>
                        <div className="col-md-12">
                            <h2 className="tab-heading"> { tabsData[tab].heading } </h2>
                            <p className="tab-description">{ tabsData[tab].description }</p>
                            <button className="details-button" type="button">+ Dettagli </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderInformationTabsMobile()
    {
        const activetabM = this.state.activeTab;
        const tabs = Object.keys(tabsData).map(tab => {
            return (
                <div key={tab}>
                    <div className={activetabM === tab ? "title active" : "title"} data-name={tab} onClick={this.handleItemClick}>
                        <h3>{tabsData[tab].heading}</h3>
                        <i aria-hidden="true" className={activetabM === tab ? "fa fa-minus dd-icon" : "fa fa-plus dd-icon"}></i>
                    </div>
                    <div className={activetabM === tab ? "content active" : "content"}>
                        <p>{tabsData[tab].description}</p>
                        <button className="details-button" type="button">+ Dettagli </button>
                    </div>
                </div>
            );
        });

        return tabs;
    }

    render()
    {
        return(
            <div>
                <div className="subheader-container">
                    <div className="subheader">
                        <div className="subheader-content">
                            <h3>da oggi svolgerai</h3>
                            <h3>le tue pratiche</h3>
                            <h3>in soli <span className="paragraph-theme-color"> 2 minuti!</span></h3>

                            <div className="subheader-button">
                                <button>SCOPRI I SERVIZI</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-content">
                    <div className="container">
                        <div className="search-container">
                            <form className="search-services-form">
                                <input id="search-box" className="search-services" placeholder="Inserisci il nome del documento o del servizo che stai cercando..."/>
                            </form>
                            <div className="search-results"></div>
                        </div>
                    </div>

                    { this.renderInformationTab(this.state.activeTab)}

                    <div className="information-tab-mobile">
                        <h2 className="information-heading-mobile"> IN EVIDENZA </h2>
                        <div className="accordion ui styled">
                            { this.renderInformationTabsMobile() }
                        </div>
                    </div>


                    <div className="container services-container">
                        <h2 className="services-heading"> SERVIZI </h2>
                        <p>Sei un professionista, un privato o possiedi un impresa?</p>
                        <p className="ln-height-sp">Richiedi la promozione più adatta alle tue esigenze... noi ti diamo la soluzione!</p>
                    </div>

                    <div className="mgtop60"></div>

                    <div className="container services-details">
                        <div className="row justify-content-start">
                            <div className="col-md-4">
                                <div className="top">
                                    <img src="/assets/images/imprese.png" alt="Imprese"/><br/>
                                    <h4 className="service-heading">IMPRESE</h4>
                                </div>
                                <p>Lorem ipsum e un testo segnaposto utilizzato net settore della tipografia</p>
                            </div>
                            <div className="col-md-4">
                                <div className="top">
                                    <img src="/assets/images/privati.png" alt="Privati"/><br/>
                                    <h4 className="service-heading" alt="Privati">PRIVATI</h4>
                                </div>
                                <p>Lorem ipsum e un testo segnaposto utilizzato net settore della tipografia</p>
                            </div>
                            <div className="col-md-4">
                                <div className="top">
                                    <img src="/assets/images/professionisti.png" alt="Professionisti"/><br/>
                                    <h4 className="service-heading">PROFESSIONISTI</h4>
                                </div>
                                <p>Lorem ipsum e un testo segnaposto utilizzato net settore della tipografia</p>
                            </div>
                        </div>

                        <div className="mgtop60"></div>

                        <div className="services-button">
                            <button type="button">VEDI I SERVIZI<span className="right-arrow"><img src="/assets/images/right-arrow.png" alt="right arrow"/></span></button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;