

const { crudOPERATIONS } = require('../models/indexmodel')
function GET(req, res, next){
  crudOPERATIONS.find({}, '', function(err,records){
    if(err) console.log(err);
    res.json({
      successful:true,
      records
    })
  })
}

function indexController(req, res, next) {
  res.render('index', { title: 'Express' })
}


function handlePost(request, response) {
    let  { name, phoneNumber, year } = request.body;
    
    
    const addRecord = new crudOPERATIONS({
        name,
        phoneNumber,
        year
    })
    
    addRecord.save((err, newRecord)=>{
        
        response.json({
            successful:true,
            newRecord
        })
      
    })
    // console.log(request.body);
//   response.send('this is a POST request');
}
function PUT(req, res, next) {
  res.send('this is a PUT request');
}
function PATCH(req, res, next) {
  res.send('this is a PATCH request');
}
function DELETE(req, res, next) {
  res.send('this is a DELETE request');
}
module.exports={indexController,GET,handlePost,PUT,PATCH,DELETE}