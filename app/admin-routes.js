module.exports = function(app, passport){

  //DOES THE USER HAVE ADMINISTRATOR PRIVLIDGES?
  var requiresAdmin = function(req, res, next){
      if (req.isAuthenticated() && req.user.isAdmin === true){
        console.log("is an admin")
        next();
      } else {
        res.send(401, 'Unauthorized');
      }
    };

  //ADMINISTRATOR PANEL
  app.get('/admin', requiresAdmin, function(req, res){
  });

  //GET /USER – A LIST OF ALL USERS FOR ADMIN
  app.get('admin/users', requiresAdmin, function (req, res) {
    console.log('admin area');
  });

  //PUT /USER - UPDATE A USER
  app.put('admin/user/:id', requiresAdmin, function (req, res) {
  });

  //DELETE /USER - DELETE A USER
  app.put('admin/user/:id', requiresAdmin, function (req, res) {
  });


  //END OF EXPORTS
};
