import $ from 'jquery';

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
}

export const scrollToTop = () => {
    $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
};

export const tabsData = {
    "emissione": {
        "icon": "firma-digitale.png",
        "heading": "Emissione firma digitale",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    "pratiche": {
        "icon": "pratiche-camerali.png",
        "heading": "Pratiche camerali",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis commodi corporis dolore eligendi eum fugit ipsum laudantium nemo neque nostrum nulla numquam praesentium provident quaerat quidem, tempore veniam vero!"
    },
    "certificati": {
        "icon": "certificati-visure.png",
        "heading": "Certificati e visure",
        "description": "Tutti i contratii di locazione e affitto di beni immobili (compresi i fondi rustici) devono essere obbligatoriamente registrati presoo l'Agenzia delle Entrate, dall'affittuario (Condutorre) o dal proprietario (Locatore), qualunque sia l'ammontare del canone pattuito, entro 30 giorni dalla data di stipula o dalla."
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
    "/professionali" : {
        "placeholder" : "Professionali",
        "activeitem" : "professionali"
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
    "professionali" : {
        "title" : "PROFESSIONALI",
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