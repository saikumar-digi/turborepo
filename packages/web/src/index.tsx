import {StrictMode, useEffect,useState} from 'react'
import {createRoot} from 'react-dom/client'

import {workspace} from 'typs'

const App =()=>{
    const [data,setData] = useState<workspace[]>([]);
    useEffect(()=>{
        fetch('http;//localhost:5000/workspaces')
        .then(res=>res.json())
        .then(({data})=>setData(data))
    },[])

    return(
        <StrictMode>
            <h1>Building fullstack Typescript with TurboRepo</h1>
            <h1>WorkSpace</h1>
            {
                JSON.stringify(data,null,2)
            }
        </StrictMode>
    )
}

const app = document.getElementById("app")

if (app) {
    createRoot(app).render(<App/>)
}