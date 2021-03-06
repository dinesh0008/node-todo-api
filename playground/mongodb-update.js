const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect mongodb');
  }
  console.log('mongodb connection established');
  const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate(
  {
    _id:new ObjectID('5b9ab1862445281964d5d411')
  },
  {
    $set:
    {
      completed:true
    }
  },
  {
  returnOriginal:false
  }
).then((result)=>{
  console.log(result);
});
  //client.close();
});
