import express from "express";
// Connection to the Model/Database.

export const home = async (req, res: express.Response, next) => {
    await res.render("index", {
        title: "Handlebars",
        name: "Henry Quartermain",
        age: 18,
        isProfessor: true
    });
};

export const dashboard = async (req, res: express.Response, next) => {
    await res.render("dashboard", {
        title: "Dashboard",
        isListEnabled: true
    });
};

export const contact = async (req, res: express.Response, next) => {
    await res.render("contact", {
        title: "Contact",
        people: [
           "Kola",
           "Maggie",
           "Nina",
           "Henry"
        ],
        user: {
            professor: "Henry Quartermain",
            age: 18,
            staff: true
        },
        lists: [
            {
                items: ["Sally", "Linus", "Lucy", "Charlie"]
            },
            {
                items: ["Kola", "Maggie", "Nina", "Henry"]
            }
        ]
    });
};

