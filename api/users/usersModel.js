const {nanoid} = require("nanoid");
const users = [];


const defaultUsers = [
    {username: "ali", password: "1234"},
    {username: "veli", password: "1234"},
    {username: "49", password: "1234"},
    {username: "50", password: "1234"}
]

for(const x of defaultUsers){
    users.push({userId: nanoid(50), ...x});
};

const getAllUsers = ()=>{
    return users;
}


module.exports = {getAllUsers};