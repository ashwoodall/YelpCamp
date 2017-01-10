var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "http://visitindianacountypa.org/wp-content/themes/indianna/images/graphics/wheel%20in%20campground%20(2).jpg",
        description: "Asymmetrical man braid etsy kogi shoreditch. Swag iPhone neutra retro, lyft vexillologist freegan. Flannel synth offal hashtag single-origin coffee cold-pressed. Fap lyft 8-bit pok pok flexitarian literally. Keffiyeh seitan migas lumbersexual squid kickstarter flexitarian. "
    },
        {
        name: "Hauli Huvila", 
        image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg",
        description: "Hammock bicycle rights umami, kombucha fam tacos lyft twee chia woke. Jean shorts seitan humblebrag 3 wolf moon, gastropub health goth skateboard ugh 8-bit af."
    },
        {
        name: "White Face", 
        image: "http://camprrm.com/wp-content/uploads/2011/06/whiteface1.jpg",
        description: "Food truck distillery pickled snackwave. Occupy jean shorts keytar, pickled quinoa locavore bespoke banh mi 8-bit roof party skateboard lyft vegan poutine sartorial. Thundercats snackwave street art organic, distillery portland humblebrag gentrify wolf YOLO pickled. a"
    }
];

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;