import React, { Component } from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import { breadcrumbData, pagesData, scrollToTop, changeTitle } from '../../assets/js/helper';

class Imprese extends Component {
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: "",
            activeTab: "imprese",
            activePage: "imprese"
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
                        <span className="front-breadcrumb"><i className="fa fa-home"></i> Home / </span>
                        <span className="actual-breadcrumb"> { this.state.breadcrumb } </span>
                    </div>
                    <div className="title-breadcrumb">
                        <h2>{ this.state.breadcrumb }</h2>
                    </div>
                </div>

                <div className="hero-inner-container">
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

export default Imprese;