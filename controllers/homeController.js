import Account from "../models/schema.js";   //  model file

// Load Create form
export const homeController = (req, res) => {
    res.render("index");     // create page (rename if needed)
};


//Handles Create Submit
export const createController = async (req, res) => {
    try {
        await Account.create(req.body);   // saves  the account to DB
        res.redirect("/read"); 
        console.log("FORM DATA:", req.body);           // goes to read page after creating
    } catch (err) {
        console.error("CREATE ERROR:", err);
        res.status(500).send(err.message);
    }
};
