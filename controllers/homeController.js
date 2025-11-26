import Account from "../models/schema.js";   //  model file

// Loads Creates form
export const homeController = (req, res) => {
    res.render("index", {  // creates page (rename if needed)
        displayName: req.user?req.user.displayName:""
    });     
};


//Handles Creates Submit
export const createController = async (req, res) => {
    try {
        await Account.create(req.body);   // saves  the account to DB
        res.redirect("/read"); 
        console.log("FORM DATA:", req.body);
        console.log("REQ BODY:", req.body);
           // goes to read page after creating
    } catch (err) {
        console.error("CREATE ERROR:", err);
        res.status(500).send(err.message);
    }
};
