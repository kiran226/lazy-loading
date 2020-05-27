import React from 'react';
const NameList=()=>{
    const names=['ram','shiva','krishna'];
    const nameList=names.map((n)=><h2>{n}</h2>)
    return(
        <div>
          {nameList}
        </div>
    )
}
export default NameList;