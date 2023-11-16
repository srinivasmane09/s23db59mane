var tiger = require('../models/tiger');
// List of all tigers
exports.tiger_list = async function(req, res) {
    try{
        thetigers = await tiger.find();
        res.send(thetigers);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// Handle tiger create on POST.
exports.tiger_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: tiger create POST');
};
// Handle tiger delete form on DELETE.
exports.tiger_delete = function(req, res) {
res.send('NOT IMPLEMENTED: tiger delete DELETE ' + req.params.id);
};
// Handle tiger update form on PUT.
exports.tiger_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: tiger update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.tiger_view_all_Page = async function(req, res) {
    try{
    thetiger = await tiger.find();
    res.render('tiger', { title: 'tiger Search Results', results: thetiger });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle tiger create on POST.
exports.tiger_create_post = async function(req, res) {
    console.log(req.body)
    let document = new tiger();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tiger_type":"goat", "cost":12, "size":"large"}
    document.tiger_color = req.body.tiger_color;
    document.tiger_breed = req.body.tiger_breed;
    document.tiger_price = req.body.tiger_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific tiger.
exports.tiger_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await tiger.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
    
//Handle tiger update form on PUT.
exports.tiger_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await tiger.findById( req.params.id)
    // Do updates of properties
    if(req.body.tiger_color)
    toUpdate.tiger_color = req.body.tiger_color;
    if(req.body.tiger_breed) toUpdate.tiger_breed = req.body.tiger_breed;
    if(req.body.tiger_price) toUpdate.tiger_price = req.body.tiger_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle tiger delete on DELETE.
    exports.tiger_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await tiger.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.tiger_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await tiger.findById( req.query.id)
    res.render('tigerdetail',
    { title: 'tiger Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a tiger.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.tiger_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('tigercreate', { title: 'tiger Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a tiger.
// query provides the id
exports.tiger_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await tiger.findById(req.query.id)
res.render('tigerupdate', { title: 'tiger Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


    
    
