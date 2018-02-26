import React, { Component } from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import {breadcrumbData, pagesData, scrollToTop, changeTitle, attemptSearch} from '../../assets/js/helper';

class Privati extends Component {
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: "",
            activeTab: "privati",
            activePage: "privati"
        };
    }

    componentWillMount()
    {
        scrollToTop();
        changeTitle(this.state.activePage);
        // generateMetas(this.state.activePage);

        this.setState({
            breadcrumb: breadcrumbData[window.location.pathname].placeholder,
            activeTab: breadcrumbData[window.location.pathname].activeitem
        });
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

    renderList(item)
    {
        const list = pagesData[item].list.map(li => {
            return(<li key={pagesData[item].list.indexOf(li)}>{ li }</li>);
        });

        return (<ul> {list} </ul>);
    }

    render()
    {
        const activeTab = this.state.activeTab;

        return (
            <div>
                <div className="page-container-hero">
                    <div className="page-header-services"></div>

                    <div className="breadcrumb-container">
                        <div className="main-breadcrumb">
                            <ul className="breadcrumb-list" itemScope itemType="http://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <i className="fa fa-home"></i>
                                    <span className="front-breadcrumb" itemProp="name"> Home </span>
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
                        <div className="tab">
                            <Link to="/imprese">
                                <div className="tab-item" active={ activeTab === "imprese" ? "true" : "false" } data-name="imprese" onClick={this.handleItemClick}>
                                    <span><img src="/assets/images/imprese.png" alt="imprese"/></span>IMPRESE
                                </div>
                            </Link>
                            <Link to="/privati">
                                <div className="tab-item" active={ activeTab === "privati" ? "true" : "false" } data-name="privati" onClick={this.handleItemClick}>
                                    <span><img src="/assets/images/privati.png" alt="privati"/></span>PRIVATI
                                </div>
                            </Link>

                            <Link to="/professionisti">
                                <div className="tab-item" active={ activeTab === "professionisti" ? "true" : "false" } data-name="professionisti" onClick={this.handleItemClick}>
                                    <span><img src="/assets/images/professionisti.png" alt="professionisti"/></span>PROFESSIONISTI
                                </div>
                            </Link>
                        </div>

                        <div className="tab-item-content">
                            <div className="title"> { pagesData[activeTab].title } </div>
                            <div className="description"> { pagesData[activeTab].description } </div>
                            <div className="list"> { this.renderList(activeTab) } </div>
                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Privati;