import StudentModel from "../models/schema.js";

// LOADS UPDATE PAGE
export const updatePageController = async (req, res) => {
  try {
    const record = await StudentModel.findById(req.params.id);
    res.render("update", { // <-- renders update.ejs
      record,
      displayName: req.user?req.user.displayName:"" 
    });   
  } catch (err) {
    console.log(err);
    res.send("Error loading update page");
  }
};

//HANDLEs UPDATE
export const updateController = async (req, res) => {
  try {
    await StudentModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/read");
  } catch (err) {
    console.log(err);
    res.send("Error updating record");
  }
};

// DELETE
export const deleteController = async (req, res) => {
  try {
    await StudentModel.findByIdAndDelete(req.params.id);
    res.redirect("/read");
  } catch (err) {
    console.log(err);
    res.send("Error deleting record");
  }
};
