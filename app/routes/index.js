module.exports = function(app, passport){

  //HOME
  app.get('/', function(req,res){
      res.render('index.ejs');
  });



  //IMPORT USER ROUTES
  require('./user');

  //IMPORT ADMIN ROUTES
  require('./admin');


//END OF EXPORTS
};
