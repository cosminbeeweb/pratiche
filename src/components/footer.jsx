import React, { Component } from 'react';
import { initMap } from "../assets/js/helper";

class Footer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    componentDidMount()
    {
        initMap();
    }

    render()
    {
        return(
            <div>
                <div className="row footer-content justify-content-start">
                    <div className="col-md-6 row1-1">
                        <h2>Perchè scegliere pratiche 2M</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa eaque omnis quod sunt. Adipisci aliquid amet architecto, autem corporis eligendi fugiat hic ipsum odio quod reiciendis sunt ut veniam!</p>
                    </div>
                    <div className="col-md-3 row1-2"></div>
                    <div className="col-md-3 row1-3">
                        <h2>Trasparenza</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa eaque omnis quod sunt. Adipisci aliquid amet</p>
                    </div>

                    <div className="col-md-3 row2-1">
                        <h2>Vantaggi</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa eaque omnis quod sunt. Adipisci aliquid amet</p>
                    </div>
                    <div className="col-md-3 row2-2"></div>
                    <div className="col-md-3 row2-3">
                        <h2>Velocità</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa eaque omnis quod sunt. Adipisci aliquid amet</p>
                    </div>
                    <div className="col-md-3 row2-4"></div>
                </div>

                <div id="map"></div>

                <div className="row justify-content-start bottom container">
                    <div className="col-md-3 offset-md-1">
                        <img src="/assets/images/logo-header.png" alt="logo footer"/>
                    </div>
                    <div className="col-md-3 offset-md-1 footer-details">
                        <p>©2017 | tutti i diritti sono riservati | credits | P.IVA 000000000000</p>
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
        )
    }
}

export default Footer;