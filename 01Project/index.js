const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
const fs = require('fs')


app.use(express.urlencoded({extended:false}))


//Routers

//GET Route

app.get("/api/users", (req, res) => {
  return res.json(users);
});

//Server Side Rendering

app.get("/users", (req, res) => {
  const html = `
    <ul>
   ${users
     .map(
       (user) =>
         `
    <li>
    ${user.first_name}
    </li>
    `
     )
     .join(" ")}
    </ul>
    `;
  res.send(html);
});


//Dynamic Path Parameters

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id ===id)
    return  res.json(user)

})



//POST New User Create


app.post('/api/users',(req,res)=>{
    const body = req.body
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data)=>{
          
    return res.json({status: "Data Saved"})
    })
    
    
})


//Patch edit user

app.patch('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id === id)
    const body = req.body
    const updated = {...user, ...body}
    updated.id = id
    users[id-1] = updated

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data)=>{
          
        return res.json({status: "Data Saved"})
        })

})


// Delete User

app.delete('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const data = users.filter(user => user.id !== id);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err,data)=>{
          
        return res.json({status: "Data Saved"})
        })
})









app.listen(PORT, () => {
  console.log(`server started at localhost:8000`);
});
