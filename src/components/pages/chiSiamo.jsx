import React, { Component } from 'react';
import Footer from '../footer';
import { breadcrumbData, scrollToTop, changeTitle } from '../../assets/js/helper';

class Imprese extends Component {
    constructor(props){
        super(props);
        this.state = {
            breadcrumb: "",
            activePage: "chi-siamo"
        };
    }

    componentWillMount()
    {
        scrollToTop();
        changeTitle(this.state.activePage);
        // generateMetas(this.state.activePage);

        this.setState({ breadcrumb: breadcrumbData[window.location.pathname].placeholder });
    }

    render()
    {
        return (
            <div>
                <div className="page-container-hero">
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
                        <div className="chi-siamo-wrapper">
                            <div className="banner-chi-siamo">
                                <h2>da oggi svolgerai</h2>
                                <h2>la tue pratiche</h2>
                                <h2>in soli <span className="heading-sp-w">2 minuti</span></h2>
                            </div>

                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laboriosam necessitatibus nihil odio repellat voluptatibus! Alias assumenda deleniti magni nam non, quae quidem quo sequi? Ad commodi consectetur nam pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloremque ducimus et ipsum molestiae molestias perspiciatis repudiandae similique sint? Ab accusamus accusantium corporis fuga hic inventore iste nam similique vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore magni placeat veniam? A animi, consectetur excepturi ipsum iure laudantium, minus molestiae nulla officiis porro, quidem reiciendis sapiente tenetur voluptatum!
                            </div>
                        </div>

                        <hr className="hr-hero"/>

                        <div className="heading chi-siamo">
                            <h2>PERCHÈ SCEGLIERE PRATICHE 2M</h2>
                        </div>

                        <div className="images chi-siamo">
                            <div>
                                <img src="/assets/images/trasparenza.jpg" alt="Trasparenza"/>
                                <h3 className="heading">TRASPARENZA</h3>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur consequuntur dolore exercitationem facilis</p>
                            </div>
                            <div>
                                <img src="/assets/images/vantaggi.jpg" alt="Vantaggi"/>
                                <h3 className="heading">VANTAGGI</h3>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur consequuntur dolore exercitationem facilis</p>
                            </div>
                            <div>
                                <img src="/assets/images/velocita.jpg" alt="Velocità"/>
                                <h3 className="heading">VELOCITÀ</h3>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur consequuntur dolore exercitationem facilis</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer type="secondary"/>
            </div>
        );
    }
}

export default Imprese;