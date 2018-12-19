var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/HW4');

// Get all recipes
router.get('/', function(req, res){
    var collection = db.get('recipes');
    collection.find({}, function(err,recipes){
        if (err) throw err;
        res.json(recipes);
    });
});

// Get one recipe based on ID
router.get('/:recipeid',function(req, res){
    var collection = db.get('recipes');
    collection.findOne({_id: req.params.recipeid}, function(err,recipe){
        if(err) throw err;
        res.json(recipe);
    });
});

// Add a recipe
router.post('/', function(req, res){
    var collection = db.get('recipes');
    collection.insert({
        recipe_name: req.body.recipe_name,
        recipe: req.body.recipe,
        user: req.body.user,
        ingredients: []
    }, function(err, recipe){
        if(err) throw err;

        res.json(recipe);
    });
});

// Delete a recipe
router.delete('/:recipeid', function(req,res){
    var collection = db.get('recipes');
    collection.remove({_id: req.params.recipeid }, function(err, recipe){
        if(err) throw err;

        res.json(recipe);
    });
});

module.exports = router;