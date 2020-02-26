const express = require ('express');
require ('./db/mongoose');

const  userRouter = require('./router/user');
const taskRouter = require('./router/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port,() =>{
    console.log('Server is up on port' + port);
});

//const bcrypt = require ('bcryptjs');

/*const myFunction = async () => {
    const password = 'seattle';
    const hashedPassword = await bcrypt.hash(password,8);
    
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('seattle1',hashedPassword);
    console.log(isMatch);

}*/
//myFunction();
//using json webtoken

const jwt = require('jsonwebtoken');

const myFunction = async() => {
    const token = await jwt.sign({_id:'data1'},'lovepizza', { expiresIn: '3days'});
    console.log(token);

    const data =await jwt.verify(token,'lovepizza');
    console.log(data);
}
myFunction();

