import { useState } from "react";
import { useHistory } from "react-router";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const onChangeHandler = (fieldName, value)=>{
    if(fieldName==="email"){
      setEmail(value);
    }
   else if(fieldName === "password"){
        setPassword(value);
      }
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(email.trim() ==="" || password===""){
      alert("required all fields");
    }
    else{
      e.preventDefault()
      history.push('/Logout');
      setEmail("");
      setPassword("");
  }
}
  return (
    <div className="App">
    <div className="header"><h1>Enter details</h1></div>
    <div className="details">
      <form onSubmit={(e)=>{onSubmitHandler(e)}}>
        <label for="email"><b>Email:     </b></label><br/>
         <input type="email"  value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}} /> <br/><br/>
         <label for="password"><b>Password:     </b></label><br/>
         <input type="password" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} /><br/> <br/>
         <button type="submit">Login</button>
        </form>
        </div>
    </div>
  );
}
