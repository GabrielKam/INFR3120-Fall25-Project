const homeController = (req,res)=>{
    res.render('index.ejs')
};


//create
const createController = async(req,res)=>{
    console.log(req.body)
    res.render('index.ejs')
}
export {homeController, createController}