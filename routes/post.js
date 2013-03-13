
exports.post = function(req, res){
    req.setEncoding();
    res.writeHead(302);
    var body = req.body
    console.log(body);
});
