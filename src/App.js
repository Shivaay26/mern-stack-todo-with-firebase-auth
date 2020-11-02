import React,{useState,useEffect,useContext} from 'react';
import {authapp} from './Firebase'
import firebase from 'firebase';
import Homepage from './homepage';
import Login from './Login';

const App=()=>{
  const [user, setuser] = useState(null);//to check if the user logged in
  const [loading, setloading] = useState(true)//to check if the app is still oading
  const logout=()=>{authapp.signOut().then(()=>{console.log('u are logged out')
}).catch(error=>{console.error(error)})
} //as the name suggest logs you out from the account once u clicked on this

const handleclick=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).catch(error=> {console.error(error)}); }

useEffect(() => {
    const unlisten=firebase.auth().onAuthStateChanged(user=> {
      setloading(false);
      if(user){setuser(user);
    } else { setuser(null);console.log("no user singed in")}  });
    
    return () => {unlisten()}
  })

    if(loading===true){return<div className="loading">loading</div>}
    else{
      if(user){return<> <Homepage user={user} logout={logout} />   </>}
      else{return <Login handleclick={handleclick}/>
      }
    }
  }

export default App;




































  // var token = result.credential.accessToken;

  
// function App() {
//   const [email, setemail] = useState("")
//   const [password, setpassword] = useState("")
//   const [user, setuser] = useState(null)

//   const signup=async (email,password)=>{
//     try{ await authapp.createUserWithEmailAndPassword(email,password);console.log('success');
//     return authapp.onAuthStateChanged(user => {
//       setuser(user);console.log(user.email)
//   });}
//     catch(e){console.log(e)} }
  
//   const signin=async (email,password)=>{
//     try{ await authapp.signInWithEmailAndPassword(email,password);console.log('suceessfully signed in')
//     return authapp.onAuthStateChanged(user => {
//       setuser(user);console.log(user.displayName)
//   });}
//     catch(e){console.log(e)}  }

//   const onSignup=(e)=>{
//     e.preventDefault();signup(email,password);setpassword("");setemail("")
//   }
//   const onSignin=(e)=>{
//     e.preventDefault();signin(email,password);setpassword("");setemail("");
//   }

//   useEffect(() => {
//     return authapp.onAuthStateChanged(user => {
//       setuser(user);
//     });
//   });
// const ap=()=>authapp.onAuthStateChanged(user=>{setuser(user);console.log(user.displayName)})

//   return user?(
//   <>hey u are logged in {user.displayName}</>
//   ):(
//     <>
//     <h1>hey guys</h1>
//     <div>
//     <form>
//        <div>email:- <input value={email} type="email" onChange={e=>{setemail(e.target.value)}}></input></div>
//        <div>password: - <input value={password} type="password" onChange={e=>{setpassword(e.target.value)}}></input></div>   
//        <button type="submit" onClick={onSignup}>signup</button>
//        <button type="submit" onClick={onSignin}>signin</button>
//      </form>
//    </div></>
//   )
// }


// return (<>
//   <h1>Hey guys</h1>
//   <h2>This is a react firebase authentication tutorial</h2>

//   </>)



    
  //   authapp.signInWithPopup(provider).then((result)=>{
  //   setuser(result.user);console.log(result.user)
  // }).catch(error=>{
  //   seterror(error);console.error(error)
  // })
