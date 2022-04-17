import './App.css';
import {useState} from "react";
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { AddUser,EditUser } from './utils/functions';
import { ToastContainer } from "react-toastify";

const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}

function App() {
 const [info,setInfo]=useState(initialValues);

 const handleFormSubmit=(e)=>{
   e.preventDefault();
  if (info.id) {
    EditUser(info)
  }
   else  {AddUser(info)}
 }

 const editHandler=(id,username,phoneNumber,gender)=>{
   setInfo({id,username,phoneNumber,gender})
 }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts editHandler={editHandler}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
