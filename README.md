# OnlineMEAN_MongooseDemo
##We dove into Mongoose at a fast and furious pace!  This repo should help you get started with incorporating Mongoose in your server files!
######Check out the `app.get('/')` ...and ask yourself, why do we need to render the response inside the User.find() callback?
```javascript
app.get('/', function(req, res){
  User.find({}, function(err, users){
    if (err){
      console.log(err);
    }else{
      res.render('index', {users: users});
    }
  });
});

// why can't we use the code below and get our desired result?  This is not a scoping issue!

app.get('/', function(req, res){
  var allMyUsers;
  User.find({}, function(err, users){
    if (err){
      console.log(err);
    }else{
      allMyUsers = users;
    }
  });
  res.render('index', {users: allMyUsers});
});
```
