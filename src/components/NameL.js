import React,{useState,useEffect} from 'react';
import AddressL from './AddressL';
const Name=()=>{
    const [name,setName]= useState("");
    useEffect(() => {
        const getName=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Kiran from Nellore")
            },4000)
        })
        getName.then((result)=>{
            setName(result);
        })
        
    }, []);

    // if(!name){
    //     return <div><h1>Loading Name</h1></div>
    // }
  return(
      <div>
            <h1>Name Title</h1>
            <h2>{name}</h2>
            <AddressL></AddressL>
      </div>
  )
}
export default Name;