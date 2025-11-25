import StudentModel from "../models/schema.js";

const readController = async (req, res) => {
    const records = await StudentModel.find();
    res.render("read", { records });
};

export default readController;
