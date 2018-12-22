var express = require('express');
var router = express.Router();
var cors = require('cors');
var monk = require('monk');
var db = monk('localhost:27017/Cooking_App');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Get all recipes
router.get('/', function(req, res, next){
    var collection = db.get('Recipes');
    collection.find({}, function(err,recipes){
        if (err) throw err;
       
        res.json(recipes);
        next();
    });
});

// Get one recipe based on ID
router.get('/:recipeid',function(req, res, next){
    var collection = db.get('Recipes');
    collection.findOne({_id: req.params.recipeid}, function(err,recipe){
        if(err) throw err;

        res.json(recipe);
        next();
    });
});

// Add a recipe
router.post('/', function(req, res, next){
    var collection = db.get('Recipes');
    collection.insert({
        recipe_name: req.body.recipe_name,
        recipe: [],
        user: req.body.user,
        ingredients: [],
        comments: []
    }, function(err, recipe){
        if(err) throw err;
        
        res.json(recipe);
        next();
    });
});

// Delete a recipe
router.delete('/:recipeid', function(req,res){
    var collection = db.get('Recipes');
    collection.remove({_id: req.params.recipeid }, function(err, recipe){
        if(err) throw err;

        res.json(recipe);
    });
});

module.exports = router;