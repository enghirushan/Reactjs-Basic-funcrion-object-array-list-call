import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    const Fname ="Haritha";
    const Lname ="ilangasinghe";
    const age = 30;

    const  myC={
      country:"sri lanka"
    
    }

    function getN( f , m , l){
        return `${f} ${m} ${l}`;
    }

    const MyA={  
       age:23
      }
   
    function nedw(){
      console.log("hello");
    }

    const lists = {listStyleType:"square"}
    const listN=<ul style={lists}>
      <li>apple </li>
      <li>orange</li>
      <li>Grapes</li>

      
    </ul>

    const arr =["React","Angular","vue","next"];

  return (
    <>
    <div className="con">
    <h1>Employee Details</h1>
    <p> Name :{Fname} {Lname}</p>
    <p>Full Name(as Functn):{getN("Haritha" , "hirushan" , "ilangasinghe")} </p>
    <p>age:{MyA.age}</p>
    <p>country:{myC.country}</p>
    <p>my favoutite fruits are </p>
    {listN}
    
    
    <p>{Fname} intrest to code {arr[0]}</p>
      {nedw()}
    </div>
    

    </>
  )
}

export default App
