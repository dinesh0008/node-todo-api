const env = process.env.NODE_ENV || 'development';
const localdb = 'mongodb://localhost:27017/TodoApp';
if(env==='development'){
  process.env.PORT=3000;
  process.env.MONGODB_URI = localdb;
}
