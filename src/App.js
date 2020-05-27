import React,{lazy, Suspense} from 'react';
import './App.css';

import Name from './components/NameL';
// import MyCompLazy from './components/MyCompLazy';

// const MyCompLazy=lazy(()=>import("./components/MyCompLazy"))


// import NameList from './components/NameList';

function App() {
  return (
    
    <div className="App">

      {/* <NameList /> */}
            
      {/* <div>Another component</div>
      <Suspense fallback={<div>Loading...</div>}>
      <MyCompLazy></MyCompLazy>
      </Suspense> */}

      <Name/>
    </div>
    
  );
}

export default App;
