var mongoose=require('mongoose');
var Schema=mongoose.Schema;

const UsersSchema= new Schema({
  username:String,
  password:String
});

const UsersListModel=mongoose.model("Userslist",UsersSchema);

module.exports=UsersListModel;
