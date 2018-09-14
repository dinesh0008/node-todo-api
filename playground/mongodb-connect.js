const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect mongodb');
  }
  console.log('mongodb connection established');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable to insert todo',error);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  // db.collection('Users').insertOne({
  //   name:'Dinesh',
  //   age:21,
  //   location:'Jaipur'
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable to insert user',error);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  client.close();
});
