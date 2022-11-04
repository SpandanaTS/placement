import express form 'express'
const app = express()
const PORT = 5000
app.listen(PORT, () =>
	console.log('Server running on: https://localhost/$(PORT)')
)

app.get("api,(req,res) => {
const { first =0 , second=0 } = req.query
const total  = parseInt(first) + parseInt(second)
res.status(200).send({
success: 'true',
total
})
})

const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("demo_image");

app.post("/image", (req, res) => {
   upload(req, res, (err) => {
    if(err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });
});

var storage = multer.diskStorage({   
   destination: function(req, file, cb) { 
      cb(null, './uploads');    
   }, 
   filename: function (req, file, cb) { 
      cb(null , file.originalname);   
   }
});