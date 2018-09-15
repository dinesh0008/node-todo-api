const env = process.env.NODE_ENV || 'development';
const localdb = 'mongodb://localhost:27017/TodoApp';
const devdb = 'mongodb://dinesh:todoapptestpassword1@ds257732.mlab.com:57732/todoapptest';
if(env==='development'){
  process.env.PORT=3000;
  process.env.MONGODB_URI = localdb;
}
