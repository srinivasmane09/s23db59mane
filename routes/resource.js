var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tiger_controller = require('../controllers/tiger');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// tiger ROUTES ///
// POST request for creating a tiger.
router.post('/tigers', tiger_controller.tiger_create_post);
// DELETE request to delete tiger.
router.delete('/tigers/:id', tiger_controller.tiger_delete);
// PUT request to update tiger.
router.put('/tigers/:id', tiger_controller.tiger_update_put);
// GET request for one tiger.
router.get('/tigers/:id', tiger_controller.tiger_detail);
// GET request for list of all tiger items.
router.get('/tigers', tiger_controller.tiger_list);
module.exports = router;
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
