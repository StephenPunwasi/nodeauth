module.exports = function(app, passport){

  //HOME
  app.get('/', function(req,res){
      res.render('index.ejs');
  });

  //IS THE USER LOGGED IN? IF NOT REDIRECT TO HOMEPAGE
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  }

  //PROFILE PAGE
  app.get('/profile', isLoggedIn, function(req, res){
      res.render('profile.ejs', {
        user:req.user
      });
  });

  //PROFILE PAGE
  app.get('/administrator', isLoggedIn, function(req, res){
      res.render('admin.ejs', {
        user:req.user
      });
  });

  //LOGOUT
  app.get('/logout', function(req,res){
      req.logout();
      res.redirect('/');
  });

//=============================================================================
// SIGNUP
//=============================================================================

  //LOGIN FORM
  app.get('/login', function(req, res){
      res.render('login.ejs', {message: req.flash('loginMessage')});
  });

  //LOGIN POST
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true
  }));

  //SIGNUP PAGE
  app.get('/signup', function(req, res){
      res.render('signup.ejs',{message: req.flash('signupMessage')});
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  //=============================================================================
  // AUTHORIZE SOCIAL SIGN-IN ROUTES
  //=============================================================================

  // FACEBOOK
  app.get('/auth/facebook', passport.authenticate(
    'facebook', {
    scope: 'email'
  }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/'
    }));

  // TWITTER
  app.get('/auth/twitter', passport.authenticate('twitter', {scope:'email'}));

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect: '/profile',
      failureRedirect: '/'
    }));

  // GOOGLE
  app.get('/auth/google', passport.authenticate(
    'google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/profile',
      failureRedirect: '/'
    }));

  //=============================================================================
  // AUTHORIZING ADDITIONAL ACCOUNTS FOR LOGGED IN USERS
  //=============================================================================

  //CONNECT LOCAL ACCOUNT
  app.get('/connect/local', function(req, res){
      res.render('connect-local.ejs', {message: req.flash('loginMessage')});
  });

  app.post('/connect/local', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/connect/local',
    failureFlash: true
  }));

  //CONNECT FACEBOOK ACCOUNT
  app.get('/connect/facebook', passport.authorize('facebook', {
    scope: 'email'}));

  app.get('/connect/facebook/callback',
    passport.authorize('facebook', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));

  //CONNECT TWITTER ACCOUNT
  app.get('/connect/twitter', passport.authorize('twitter', {
    scope: 'email'}));

  app.get('/connect/twitter/callback',
    passport.authorize('twitter', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));

  //CONNECT GOOGLE ACCOUNT
  app.get('/connect/google', passport.authorize('google', {
    scope: ['profile', 'email']}));

  app.get('/connect/google/callback',
    passport.authorize('google', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));

  //=============================================================================
  // UNLINK USER ACCOUNTS
  //=============================================================================

  //LOCAL UNLINK
  app.get('/unlink/local', function(req, res){
    var user            = req.user;
    user.local.email    = undefined;
    user.local.password = unfedined;
    user.save(function(err){
        res.redirect('/profile');
    });
  });

  //FACEBOOK UNLINK
  app.get('/unlink/facebook', function(req, res){
    var user            = req.user;
    user.facebook.token = undefined;
    user.save(function(err){
        res.redirect('/profile');
    });
  });

  //TWITTER UNLINK
  app.get('/unlink/twitter', function(req, res){
    var user            = req.user;
    user.twitter.token  = undefined;
    user.save(function(err){
        res.redirect('/profile');
    });
  });

  //GOOGLE UNLINK
  app.get('/unlink/google', function(req, res){
    var user            = req.user;
    user.google.token = undefined;
    user.save(function(err){
        res.redirect('/profile');
    });
  });
<<<<<<< HEAD


  //DOES THE USER HAVE ADMINISTRATOR PRIVILIDGES?
  var requiresAdmin = function(req, res, next) {
      if (req.isAuthenticated() && req.user.isAdmin === true)
        next();
      else
        res.send(401, 'Unauthorized');
    };

  //ADMINISTRATOR PANEL
  app.get('/admininistrator', requiresAdmin, function(req, res){
    res.render('admin.ejs');
  });

  //GET /USER – A LIST OF ALL USERS FOR ADMIN
  app.get('admin/users', requiresAdmin, function (req, res) {
    console.log('admin area');
  });

//END OF EXPORTS
=======
>>>>>>> parent of 2114846... Added Admin/Universal User Query
};
