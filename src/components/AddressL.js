import React,{useState,useEffect} from 'react';
const AddressL=()=>{
    const [address,setAddress]= useState("");
    useEffect(() => {
        const getName=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("#1111, shpet")
            },4000)
        })
        getName.then((result)=>{
            setAddress(result);
        })
        
    }, []);

    // if(!address){
    //     return <div><h1>Loading Address</h1></div>
    // }
  return(
      <div>
            <h1> Address Title</h1>
            <h2>{address}</h2>
      </div>
  )
}
export default AddressL;