import React,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EmpDtl from './EmpDtl';
import EmpRm from './EmpRm';
import EmpList from './EmpList';
import EmpUpdt from './EmpUpdt';
import EmpReg from './EmpReg';
import reportWebVitals from './reportWebVitals';
import './style.css';

const App=()=>{
  const [activeComponent,setActiveComponent]=useState('EmpDtl');

  const renderComponent=(componentName)=>{
    switch(componentName){
      case 'EmpDtl':
        return <EmpDtl />;
      case 'EmpRm':
        return <EmpRm />;
      case  'EmpList':
        return  <EmpList />;
      case  'EmpUpdt':
        return   <EmpUpdt />;
      case   'EmpReg':
        return    <EmpReg />;
      default:
        return <EmpDtl />;
    }
  };

  return(
    <React.StrictMode>
      <div >
        <button onClick={()=>setActiveComponent('EmpDtl')}>EmpDtl</button>
        <button onClick={()=>setActiveComponent('EmpReg')}>EmpReg</button>
        <button onClick={()=>setActiveComponent('EmpList')}>EmpList</button>
        <button onClick={()=>setActiveComponent('EmpUpdt')}>EmpUpdt</button>
        <button onClick={()=>setActiveComponent('EmpRm')}>EmpRm</button>
      </div>
      {renderComponent(activeComponent)}
    </React.StrictMode>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
