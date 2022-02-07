'use strict'


var gProjs = [
    {
        id: 'pac man',
        name: "Pac Man",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/pac man",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "mine sweeper",
        name: "mine sweeper",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/pac man",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "ball board",
        name: "Ball Board",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/pac man",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "book-shop",
        name: "book-shop",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/pac man",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]

function getProjs() {
    return gProjs;
}

function getProj(id) {
    return gProjs[gProjs.findIndex(proj => proj.id === id)]
}