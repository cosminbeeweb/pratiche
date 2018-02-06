import React, { Component } from 'react';
import Footer from '../footer';
import Map from '../map';
import FooterContent from '../footerContent';
import { breadcrumbData, faqData, scrollToTop, changeTitle } from '../../assets/js/helper';

class Faq extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            breadcrumb: "",
            activeTab: "1",
            activePage: "domande-frequenti"
        };
    }

    componentWillMount()
    {
        scrollToTop();
        changeTitle(this.state.activePage);
        // generateMetas(this.state.activePage);

        this.setState({ breadcrumb: breadcrumbData[window.location.pathname].placeholder });
    }

    handleItemClick = e => this.setState({ activeTab: e.currentTarget.dataset.name });

    renderInformationTabs()
    {
        const activetab = this.state.activeTab;
        const tabs = Object.keys(faqData).map(tab => {
            return (
                <div key={tab}>
                    <div className={activetab === tab ? "title active" : "title "} data-name={tab} onClick={this.handleItemClick}>
                        <h3>{faqData[tab].title}</h3>
                    </div>
                    <div className={activetab === tab ? "content active" : "content"}>
                        <p>{faqData[tab].content}</p>
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
                <div className="page-container-hero">
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
                        <div className="faq-tab-container">
                            <div className="accordion ui styled">
                                { this.renderInformationTabs() }
                            </div>
                        </div>
                    </div>

                    <span className="faq"></span>
                    <FooterContent/>
                    <Map/>
                    <Footer type="simple"/>
                </div>
            </div>
        );
    }
}

export default Faq;