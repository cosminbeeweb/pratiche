import React, { Component } from 'react';

class FooterContent extends Component {
    render()
    {
        return(
            <div className="row footer-content justify-content-start">
                <div className="col-md-6 row1-1">
                    <h2>Perchè scegliere pratiche 2M</h2>
                    <p>Pratiche 2M è una agenzia di disbrigo pratiche amministrative per conto terzi. Il nostro operato è trasparente e verificabile in qualsiasi momento: affidate a noi le vostre pratiche e dite finalmente addio alle file!</p>
                </div>
                <div className="col-md-3 row1-2"></div>
                <div className="col-md-3 row1-3">
                    <h2>Trasparenza</h2>
                    <p>Il nostro team di professionisti è sempre pronto a rispondere alle tue domande.</p>
                </div>

                <div className="col-md-3 row2-1">
                    <h2>Vantaggi</h2>
                    <p>Eviterai di perdere tempo prezioso; i nostri consulenti ti assisteranno anche telefonicamente.</p>
                </div>
                <div className="col-md-3 row2-2"></div>
                <div className="col-md-3 row2-3">
                    <h2>Velocità</h2>
                    <p>Il nostro servizio è in grado di soddisfare le vostre richieste anche in poche ore.</p>
                </div>
                <div className="col-md-3 row2-4"></div>
            </div>
        );
    }
}

export default FooterContent;