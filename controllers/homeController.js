const homeController = (req, res, next) =>{
  res.render('index', { title: 'Create',displayName: req.user?req.user.displayName:"" });
};

export {homeController}