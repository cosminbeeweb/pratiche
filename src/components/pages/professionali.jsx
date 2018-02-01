import React, { Component } from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import { breadcrumbData, pagesData, scrollToTop } from '../../assets/js/helper';

class Professionali extends Component {
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: "",
            activeTab: "professionali"
        };
    }

    componentWillMount()
    {
        scrollToTop();

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
                <div className="page-container">
                    <div className="page-header-services"></div>
                    <div className="hero-container">

                        <div className="breadcrumb-container">
                            <span className="front-breadcrumb"><i className="fa fa-home"></i> Home / </span>
                            <span className="actual-breadcrumb"> { this.state.breadcrumb } </span>
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

                            <Link to="/professionali">
                                <div className="tab-item" active={ activeTab === "professionali" ? "true" : "false" } data-name="professionali" onClick={this.handleItemClick}>
                                    <span><img src="/assets/images/professionisti.png" alt="professionali"/></span>PROFESSIONALI
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

export default Professionali;