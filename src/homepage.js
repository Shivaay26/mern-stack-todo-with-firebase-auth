import React,{useState,useEffect} from 'react'
import axios from "axios";
import Forms from './Forms';
import Cards from './Cards';

const Homepage = ({logout,user}) => {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    const deletefunction=(_id)=>{
       const newdata= data.filter(todo=>todo._id!==_id); setdata(newdata);
       axios.delete('http://localhost:5000/'+user.uid+"/"+_id).then(data=>{console.log(data)})
    }

    useEffect(() => { axios.get('http://localhost:5000/'+user.uid)
  .then((res)=>{setloading(false);setdata(res.data);console.log(res.data)    })}, [])

  if(loading){return<h1 className="center">please wait your data is being loaded</h1>}

    return (
        <div>
            <h1>Todo app</h1>
            {data.length===0? 
           <div className="center"> please add some todos to be displayed</div>
            : data.map(todo=>{return <Cards todo={todo} deletefunction={deletefunction}/>})}

            <Forms setdata={setdata} data={data} user={user}/>
          <div className="center">  <button onClick={logout}>logout</button> </div>
        </div>
    )
}

export default Homepage


// D2j6GKvLL2YLYPmxGKYREij7pix1