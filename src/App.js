import React, {useState} from "react";
import Formulary  from "./components/form/Formulary"
import "./App.css";


export default function App() {
  const [data, setData] = useState({email:'',pass:''})

  function onChange(e){
    let { name, value } = e.target
    setData({...data, [name] : value})
    
  }

  function submit(e){
    e.preventDefault()
    console.log('data ', data)

  }
  
  return (
    <div className="login-app">
      <div className="container container-form pt-4">

        <div id="row-form" className="row row-form align-items-center justify-content-center pt-6">
          <div className="col col-md-6 col-lg-5 text-center">
            <Formulary data={data} onChange={onChange} event={submit} />
          </div>
        </div>
      </div>
    </div>
  );
}
