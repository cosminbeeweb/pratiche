import $ from 'jquery';

const headData = {
    "home": [
        {
            "name" : "keywords",
            "content" : "key1, key2, key3"
        },
        {
            "name" : "description",
            "content" : "Some description.."
        },
        {
            "name" : "author",
            "content" : "John Doe"
        },
    ],
    "imprese": [
        {
            "name" : "keywords",
            "content" : "key1, key2, key3, imprese"
        },
        {
            "name" : "description",
            "content" : "Some description.. imprese"
        },
        {
            "name" : "author",
            "content" : "John Doe imprese"
        },
    ],
    "privati": [
        {
            "name" : "keywords",
            "content" : "key1, key2, key3, privati"
        },
        {
            "name" : "description",
            "content" : "Some description.. privati"
        },
        {
            "name" : "author",
            "content" : "John Doe privati"
        },
    ],
    "professionali": [
        {
            "name" : "keywords",
            "content" : "key1, key2, key3, professionali"
        },
        {
            "name" : "description",
            "content" : "Some description.. professionali"
        },
        {
            "name" : "author",
            "content" : "John Doe professionali"
        },
    ],
};

const clearMetas = () => {
    if ($('meta[name=keywords]').length !== 0)
        $('meta[name=keywords]')[0].remove();

    if ($('meta[name=description]').length !== 0)
        $('meta[name=description]')[0].remove();

    if ($('meta[name=author]').length !== 0)
        $('meta[name=author]')[0].remove();
}

export const generateMetas = (page) => {
    clearMetas();
    for (let i = 0; i < headData[page].length; i++)
        $("head").append("<meta name='" + headData[page][i].name + "' content='" + headData[page][i].content + "'>");
}