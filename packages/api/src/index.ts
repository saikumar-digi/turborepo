import cors from 'cors'
import express from 'express'

import {workspace} from 'typs'

const app = express();
const PORT = 3000;

app.use(cors({origin:"https://localhost:3000"}))

app.get("/workspaces",(_,response)=>{
    const workspaces : workspace[]=[
        {name:"api",version:"1.2.3"},
        {name:"type",version:"1.2.3"},
        {name:"web",version:"1.2.3"},
    ]
    response.json({data:workspaces})
})

app.listen(PORT,()=>console.log(`Listeing on http://localhost:${PORT}`))