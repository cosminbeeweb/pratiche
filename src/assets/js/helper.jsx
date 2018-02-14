import $ from 'jquery';
import { headData } from './config';

export const handleSearch = () => {
    $(document).ready(function(){
        if (window.location.href === window.location.origin + "/")
            $("#search-box").on("change keydown keypress keyup", function(){
                console.log(1);

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

export const tabsData = {
    "emissione": {
        "icon": "firma-digitale.png",
        "heading": "EMISSIONE FIRMA DIGITALE",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    "pratiche": {
        "icon": "pratiche-camerali.png",
        "heading": "PRATICHE CAMERALI",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis commodi corporis dolore eligendi eum fugit ipsum laudantium nemo neque nostrum nulla numquam praesentium provident quaerat quidem, tempore veniam vero!"
    },
    "certificati": {
        "icon": "certificati-visure.png",
        "heading": "CERTIFICATI E VISURE",
        "description": "Tutti i contratii di locazione e affitto di beni immobili (compresi i fondi rustici) devono essere obbligatoriamente registrati presoo l'Agenzia delle Entrate, dall'affittuario (Condutorre) o dal proprietario (Locatore), qualunque sia l'ammontare del canone pattuito, entro 30 giorni dalla data di stipula o dalla."
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
    }
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