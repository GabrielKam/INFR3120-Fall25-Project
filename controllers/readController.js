import StudentsModel from "../models/schema.js";

const readController = async (req, res) => {
    try {
        const records = await StudentsModel.find();

        console.log("Loaded records:", records); // Debug
        console.log("Records:", records);


        res.render("read", { //SENDS the DATA TO read.ejs
            records,
            displayName: req.user?req.user.displayName:""
        }); 
    } catch (err) {
        console.log(err);
        res.send("Error loading records");
    }
};

export default readController;

