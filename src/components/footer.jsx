import React, { Component } from 'react';
import { initMap } from "../assets/js/helper";
import Map from './map';
import FooterContent from './footerContent';

class Footer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            type: "initial"
        };
    }

    componentWillMount()
    {
        if (this.props.type !== undefined)
            this.setState({ type: this.props.type });
    }

    componentDidMount()
    {
        initMap();
    }

    render()
    {
        const type = this.state.type;

        if (type === "initial")
            return(
                <div>
                    <FooterContent/>
                    <Map/>
                    <div className="row justify-content-start bottom container">
                        <div className="col-md-3 offset-md-1">
                            <img src="/assets/images/logo-header.png" alt="logo footer"/>
                        </div>
                        <div className="col-md-4 footer-details">
                            <p>©2017 | tutti i diritti sono riservati | credits | P.IVA 06757301210</p>
                        </div>
                        <div className="col-md-3 offset-md-1 footer-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2" aria-hidden="true"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-2" aria-hidden="true"></i></a>
                            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-2" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            );
        else if (type === "contact")
            return(
                <div>
                    <FooterContent/>
                    <div className="row justify-content-start bottom container">
                        <div className="col-md-3 offset-md-1">
                            <img src="/assets/images/logo-header.png" alt="logo footer"/>
                        </div>
                        <div className="col-md-4 footer-details">
                            <p>©2017 | tutti i diritti sono riservati | credits | P.IVA 06757301210</p>
                        </div>
                        <div className="col-md-3 offset-md-1 footer-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2" aria-hidden="true"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-2" aria-hidden="true"></i></a>
                            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-2" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            );
        else if (type === "simple")
            return(
                <div className="row justify-content-start bottom container">
                    <div className="col-md-3 offset-md-1">
                        <img src="/assets/images/logo-header.png" alt="logo footer"/>
                    </div>
                    <div className="col-md-4 footer-details">
                        <p>©2017 | tutti i diritti sono riservati | credits | P.IVA 06757301210</p>
                    </div>
                    <div className="col-md-3 offset-md-1 footer-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2" aria-hidden="true"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-2" aria-hidden="true"></i></a>
                        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-2" aria-hidden="true"></i></a>
                    </div>
                </div>
            );
        else
            return(
                <div>
                    <Map/>
                    <div className="row justify-content-start bottom container">
                        <div className="col-md-3 offset-md-1">
                            <img src="/assets/images/logo-header.png" alt="logo footer"/>
                        </div>
                        <div className="col-md-4 footer-details">
                            <p>©2017 | tutti i diritti sono riservati | credits | P.IVA 06757301210</p>
                        </div>
                        <div className="col-md-3 offset-md-1 footer-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2" aria-hidden="true"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-2" aria-hidden="true"></i></a>
                            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-2" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Footer;