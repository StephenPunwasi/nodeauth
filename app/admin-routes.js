module.exports = function(app, passport){

  //DOES THE USER HAVE ADMINISTRATOR PRIVILIDGES?
  var requiresAdmin = function(req, res, next) {
      if (req.isAuthenticated() && req.user.isAdmin === true)
        next();
      else
        res.send(401, 'Unauthorized');
    };

  //ADMINISTRATOR PANEL
  app.get('/admin', requiresAdmin, function(req, res){
      res.render('admin.ejs');
  });

  //GET /USER – A LIST OF ALL USERS FOR ADMIN
  app.get('admin/users', requiresAdmin, function (req, res) {
  });

  //PUT /USER - UPDATE A USER
  app.put('admin/user/:id', requiresAdmin, function (req, res) {
  });

  //DELETE /USER - DELETE A USER
  app.put('admin/user/:id', requiresAdmin, function (req, res) {
  });


  //END OF EXPORTS
};
