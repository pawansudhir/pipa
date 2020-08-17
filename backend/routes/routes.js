var bodyParser = require("body-parser");
var encode  = bodyParser.urlencoded({extended:true});
var arr = ["pawan","pawa","resp","respo","sudh"];
var newArr = ["asdhhhh"];
const route = (app) => {
    var obj = {};
    app.use(bodyParser.json());
   
  app.post('/',encode,(req,res) => {
    var reg = new RegExp(`${req.body.text}`,"i");
    var myArr = arr.filter(v => {
      return reg.test(v);
    })
   console.log(myArr);
   res.send({myArr:myArr});
  });
}
module.exports = route;