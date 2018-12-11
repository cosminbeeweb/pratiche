import $ from 'jquery';
import { headData } from './config';
import { searchKeywords, serviceParents } from './searchKeywords';
import React from 'react';
import axios from 'axios';
const serverName = "http://pratiche-build.wd/";

export const handleSearch = () => {
    $(document).ready(function(){
        if (window.location.href === window.location.origin + "/")
            $("#search-box").on("change keydown keypress keyup", function(){

                if ($(this).val() !== "")
                    $(".search-services-button").show('fast');
                else
                    $(".search-services-button").hide('fast');
            });
    });
};

export const initMap = () => {
    setTimeout(function() {
        $("#map-trigger").click();
    }, 300);
};

export const initRecaptcha = () => {
    setTimeout(function() {
        $("#recaptcha-trigger").click();
    }, 300);
};

export const scrollToTop = () => {
    $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
};

export const scrollToFormTop = () => {

    let vw = $('body').width() + 17;

    let offset = document.getElementsByClassName('form-template')[0].offsetHeight;

    if (vw < 993)
        $("html, body").stop().animate({scrollTop: offset }, 500, 'swing');
    else
        $("html, body").stop().animate({scrollTop: offset - 250}, 500, 'swing');
}

export const tabsData = {
    "emissione": {
        "icon": "firma-digitale.png",
        "heading": "EMISSIONE FIRMA DIGITALE",
        "description": "Pratiche 2M si occuperà di sbrigare tutte le pratiche per il rilascio della firma digitale; in poco tempo, sarai in grado di firmare certificati e documenti telematici come se fossero cartacei.",
        "link": "/servizi-digitali"
    },
    "pratiche": {
        "icon": "pratiche-camerali.png",
        "heading": "PRATICHE CAMERALI",
        "description": "Con il nostro supporto, potrai eseguire qualsiasi pratica camerale di cui hai bisogno con il minimo sforzo e, soprattutto, in pochissimo tempo.",
        "link": "/camera-di-commercio"
    },
    "certificati": {
        "icon": "certificati-visure.png",
        "heading": "CERTIFICATI E VISURE",
        "description": "Pratiche 2M è al tuo fianco anche per richiedere certificati e visure di tutti i tipi, dandoti tutte le informazioni ed i documenti di cui hai bisogno e risolvendo qualsiasi problematica.",
        "link": "/camera-di-commercio"
    }
};

export const faqData = {
    "1": {
        "title": "Do you provide product support?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    },
    "2": {
        "title": "Is your product compactible with Linux servers?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    },
    "3": {
        "title": "Which currencies do you accept?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    },
    "4": {
        "title": "Is health insurance included?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    },
    "5": {
        "title": "Which currencies do you accept?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    },
    "6": {
        "title": "Is your product compactible with Linux servers?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    },
    "7": {
        "title": "Do you provide product support?",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi culpa cum deserunt dolor, eos eveniet expedita hic nulla, officiis placeat quidem quisquam sit soluta tempore, ut velit. Assumenda, ut."
    }
};

export const servicesList = {
    "agenzia-delle-entrate" : {
        icon: "entrate.png",
        list: [
            "Contratti di locazione",
            "Contratti di comodato",
            "Registrazione atti e verbali",
            "Apertura partita iva",
            "Certificati reddituali",
            "Dichiarazione di successione",
            "Codice fiscale attribuzione e/o duplicato",
            "Certificato reddituale",
            "Regolarità fiscale"
        ]
    },
    "agenzia-per-la-riscossione" : {
        icon: "riscossione.png",
        list: [
            "Estratto di ruolo",
            "Relate di notifica",
            "Pagamento cartelle",
            "Rateizzi",
            "Rimborsi",
            "Richiesta RAV"
        ]
    },
    "comune" : {
        icon: "comune.png",
        list: [
            "SUAP",
            "Certificati di residenza",
            "Stato di famiglia",
            "Certificato di matrimonio",
            "Certificato di cittadinanza",
            "Certificato di congruità",
            "Certificato godimento dei diritti politici",
            "Iscrizione liste elettorali"
        ]
    },
    "servizi-digitali" : {
        icon: "digitali.png",
        list: [
            "PEC",
            "Firma digitale / CNS",
            "Smart card",
            "Aruba Key",
            "Codice LEI",
            "Fatturazione elettronica",
            "Conservazione sostitutiva"
        ]
    },
    "servizi-professionali" : {
        icon: "professionali.png",
        list: [
            "Ricorsi",
            "Legge 3/2012 sovraindebitamento",
            "Marchi e brevetti",
            "DVR - sicurezza sul lavoro"
        ]
    },
    "tribunale" : {
        icon: "tribunale.png",
        list: [
            "Casellario giudiziale",
            "Carichi pendenti",
            "Anagrafica delle sanzioni amministrative"
        ]
    },
    "camera-di-commercio" : {
        icon: "camera.png",
        list: [
            "Cessione quote societarie",
            "Deposito bilanci",
            "Conversione bilanci in XBRL",
            "Comunicazione cambio amministratore",
            "Comunicazione cambio sede (nello stesso comune)",
            "Visura camerale ordinaria",
            "Visura camerale storica",
            "Visura protesti",
            "Certificati di iscrizione",
            "Estratto conto diritti camerali"
        ]
    }
};

export const breadcrumbData = {
    "/" : {
        "placeholder" : "Home",
    },
    "/imprese" : {
        "placeholder" : "Imprese",
        "activeitem" : "imprese"
    },
    "/privati" : {
        "placeholder" : "Privati",
        "activeitem" : "privati"
    },
    "/professionisti" : {
        "placeholder" : "Professionisti",
        "activeitem" : "professionisti"
    },
    "/chi-siamo" : {
        "placeholder" : "Chi siamo",
        "activeitem" : "chi-siamo"
    },
    "/contatti" : {
        "placeholder" : "Contatti",
        "activeitem" : "contatti"
    },
    "/domande-frequenti" : {
        "placeholder" : "DOMANDE FREQUENTI",
        "activeitem" : "faq"
    },
    "/agenzia-delle-entrate" : {
        "placeholder" : "AGENZIA DELLE ENTRATE",
        "activeitem" : "agenzia-delle-entrate"
    },
    "/agenzia-per-la-riscossione" : {
        "placeholder" : "AGENZIA PER LA RISCOSSIONE",
        "activeitem" : "agenzia-per-la-riscossione"
    },
    "/tribunale" : {
        "placeholder" : "TRIBUNALE",
        "activeitem" : "tribunale"
    },
    "/comune" : {
        "placeholder" : "COMUNE",
        "activeitem" : "tribunale"
    },
    "/servizi-digitali" : {
        "placeholder" : "SERVIZI DIGITALI",
        "activeitem" : "servizi-digitali"
    },
    "/servizi-professionali" : {
        "placeholder" : "SERVIZI PROFESSIONALI",
        "activeitem" : "servizi-professionali"
    },
    "/camera-di-commercio" : {
        "placeholder" : "CAMERA DI COMMERCIO",
        "activeitem" : "camera-di-commercio"
    },
}

export const pagesData = {
    "imprese" : {
        "title" : "IMPRESE",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugit illum magni ullam unde vero voluptates. Asperiores aspernatur cum, facere iure iusto maiores necessitatibus nobis numquam quam quod ratione unde?",
        "list" : [
            "Visure e certificati CCIAA",
            "Copia atti e bilanci",
            "Certificato nulla osta antimafia",
            "Certificato negativo fallimentare",
            "Visura catasto e conservatoria",
            "Estratto di mappa e planimetria",
            "Trascrizione nota in conservatoria",
            "Carichi pendenti e casellario giudiziale",
            "Certificati anagrafici al Comune",
            "Ceritificato regolarità fiscale",
            "Pratiche SISTRI e RAEE",
            "Iscrizione, modifica e cancellazione CCIAA",
            "Apertura, modifica e chiusura unità locale CCIAA",
            "Apertura, variazione e cancellazione IVA",
            "Vidimazione libri e registri",
            "Deposito bilancio",
            "Conversione bilancio in XBLR",
            "Rilascio/rinnovo firma digitale e PEC",
            "Registrazione e risoluzione atti  e contratti",
            "Estratti ruolo e/o notifica, sgravi, rateizzi e ricorsi su cartelle Equitalia",
            "Consegne cittadine, nazionali ed internazionali",
            "Raccomandata A/R a valore legale"
        ]
    },
    "privati" : {
        "title" : "PRIVATI",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugit illum magni ullam unde vero voluptates. Asperiores aspernatur cum, facere iure iusto maiores necessitatibus nobis numquam quam quod ratione unde?",
        "list" : [
            "Estratii ruolo e/o notifica, sgravi, rateizzi e ricorsi su cartelle Equitalia",
            "Visura protesti",
            "Cancellazione protesti",
            "Cancellazione di pignoramenti",
            "Visura catasto e conservatoria",
            "Estratto di mappa e planimetria",
            "Registrazione e resoluzione atti e contratti",
            "Visura P.R.A",
            "Visura Sita",
            "Carichi pendenti e casellario giudiziale",
            "Certificati anagrafici al Comune",
            "Dichiarazioni redditi modello 730/Unico",
            "Passaporto biometrico rilascio/duplicato",
            "Passaporto minore anni 12",
            "Consegne cittadine, nazionali ed internazionali",
            "Raccomandata A/R a valore legale",
            "Transferimento moneta con Western Union",
            "Ricariche telefoniche e pay-tv Lottomatica"
        ]
    },
    "professionisti" : {
        "title" : "PROFESSIONISTI",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugit illum magni ullam unde vero voluptates. Asperiores aspernatur cum, facere iure iusto maiores necessitatibus nobis numquam quam quod ratione unde?",
        "list" : [
            "Deposito bilancio",
            "Conversione bilancio in XBLR",
            "Iscrizione, modifica e cancellazione CCIAA",
            "Apertura, variazione e cancellazione IVA",
            "Pratiche SUAP",
            "Elaborazione e deposito SCIA",
            "Pratiche SISTRI e RAEE",
            "Vidimazione libri e registri",
            "Rilascio/rinnovo firma digitale e PEC",
            "Trascrizione nota in conservatoria",
            "Visura catasto e conservatoria",
            "Estratto di mappa e planimetria",
            "Registriazione marchi e brevetti",
            "Registrazione e risoluzione atti  e contratti",
            "Visure e certificati CCIAA",
            "Visura protesti",
            "Copia atti e bilanci",
            "Certificato nulla osta antimafia",
            "Certificato negativo fallimentare",
            "Carichi pendenti e casellario giudiziale",
            "Certificati anagrafici al Comune",
            "Ceritificato regolarità fiscale",
            "Visura P.R.A.",
            "Visura Sita",
            "Estratti ruolo e/o notifica, sgravi, rateizzi e ricorsi su cartelle Equitalia",
            "Consegne cittadine, nazionali ed internazionali",
            "Raccomandata A/R a valore legale"
        ]
    }
};

const clearMetas = () => {
    if ($('meta[name=keywords]').length !== 0)
        $('meta[name=keywords]')[0].remove();

    if ($('meta[name=description]').length !== 0)
        $('meta[name=description]')[0].remove();

    if ($('meta[name=author]').length !== 0)
        $('meta[name=author]')[0].remove();
};

export const generateMetas = page => {
    clearMetas();
    for (let i = 1; i < headData[page].length; i++)
        $("head").append("<meta name='" + headData[page][i].name + "' content='" + headData[page][i].content + "'>");
};

export const changeTitle = page => {
    $("title")[0].innerHTML = "Pratiche 2M - " + headData[page][0].title;
};

export const attemptSearch = searchedValue => {
    $(".search-results").empty();
    let actualSearch = searchedValue;
    let searchWords = searchedValue.split(" ").filter(x => x.length > 1);

    searchWords = searchWords.map(word => word = word.toLowerCase());

    let matches = [];

    for (let i = 0; i < searchKeywords.length; i++) // for each service
    {
        let matchObj = {};
        matchObj.hit = 0;

        for (let j = 0; j < searchKeywords[i].keywords.length; j++) // for each keyword of each service
        {
            matchObj.parent = searchKeywords[i].parent;
            matchObj.service = searchKeywords[i].service;

            for (let k = 0; k < searchWords.length; k++)
                if (searchKeywords[i].keywords[j].indexOf(searchWords[k]) > -1)
                    matchObj.hit += 1;
        }

        if (matchObj.hit !== 0)
            matches.push(matchObj);
    }

    $(document).mouseup(function(e)
    {
        var container = $(".search-container");

        if (!container.is(e.target) && container.has(e.target).length === 0)
            $('.search-results').removeClass('open');
    });

    if (matches.length > 0)
        renderSearchResults(matches, actualSearch);
    else
        $(".search-results").append('<div>0 risultati trovati per "' + actualSearch + '"</div>');

    $(".search-results").addClass('open');
}

const renderSearchResults = (results, searchedValue) => {
    let maxHit = results[0].hit;

    for (let i = 1; i < results.length; i++)
        if (results[i].hit > maxHit)
            maxHit = results[i].hit;

    results = results.filter(result => result.hit == maxHit);

    for (let i = 0; i < results.length; i++)
        $(".search-results").prepend(renderSearchResult(results[i]));

    $(".search-results").append('<div>' + results.length + ' risultati trovati per "' + searchedValue + '"</div>');
}

const renderSearchResult = result => {
    const resultRendered = '' +
            '<a href="/' + result.parent + '">' +
                '<div class="result">' +
                    '<div class="result-image">' +
                        '<img src="/assets/images/' + serviceParents[result.parent].icon + '" alt="' + result.service + '"/>' +
                    '</div>' +
                    '<div class="result-service">' +
                        '<h4>' + result.service + '</h4>' +
                    '</div>' +
                '</div>' +
            '</a>';

    return resultRendered;
}

export const sendEmail = (data, callback) => {
    axios.post("https://www.pratiche2m.it/mail", data)
        .then(response => callback(response))
        .catch(error => console.log(error));
}

const isNumber = val => /^\d+$/.test(val)

export const validateForm = (data, callback) => {
    let errors = {};

    if (data.name === "")
        errors.name = "Name field is required";

    if (data.surname === "")
        errors.surname = "Surname field is required";

    if (data.phone !== "")
    {
        if (!isNumber(data.phone))
            errors.telefono = "Phone format is invalid";
    }
    else
        errors.telefono = "Phone field is required";

    if (data.email !== "")
    {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)))
            errors.email = "Email format is invalid";
    }
    else
        errors.email = "Email field is required";

    if (data.recaptcha === "")
        errors.recaptcha = "We have to know that you are not a robot";

    let response = {};

    let count = 0;

    for (let i in errors)
        if (errors.hasOwnProperty(i))
            count++;

    if (count === 0)
        response.errors = 0;
    else
        response.errors = errors;

    callback(response);
}