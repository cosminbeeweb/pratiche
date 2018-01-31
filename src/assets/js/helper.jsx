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
