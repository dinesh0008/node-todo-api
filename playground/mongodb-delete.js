const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect mongodb');
  }
  console.log('mongodb connection established');
  const db = client.db('TodoApp');

//deleteMany
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log('data deleted',result);
// });
// //deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log('data deleted',result);
// });
//findOneAndDelete
db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
  console.log('data deleted',result);
});
  //client.close();
});
