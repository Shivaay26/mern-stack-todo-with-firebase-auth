import axios from "axios";
import React,{useState} from 'react'

const Forms = ({setdata,data,user}) => {
    const [todo, settodo] = useState("")

    const submit=async(e)=>{e.preventDefault(); console.log(todo); 
        setdata([...data,{todo:todo}]) 
        settodo("")
        await axios.post('http://localhost:5000/'+user.uid,{todo:todo} )
    }

    return (
        <div>
            <form className="form" onSubmit={submit}>
              Insert  todo:- <input onChange={(e)=>{settodo(e.target.value)}} value={todo}></input> 
                
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Forms
