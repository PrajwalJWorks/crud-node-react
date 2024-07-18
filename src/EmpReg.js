import React,{useState} from 'react';
import axios from 'axios';
import './style.css';

function EmpReg(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [passwordMatch,setPasswordMatch]=useState(true);
    const [registrationStatus,setRegistrationStatus]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();

        if(password!==confirmPassword){
            setPasswordMatch(false);
            return;
        }

        setPasswordMatch(true);

        axios.post('http://localhost:5000/emp',{name,email,password})
        .then(function (response){
            console.log(response.data);
            setRegistrationStatus('Employee registered successfully.');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setRegistrationStatus('');
        })
        .catch(function (error){
            console.error(error);
            setRegistrationStatus('sorry, registration was not successful.');
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>Name:
                    <br/> 
                    <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    required />
                </label>
                <br />
                <label>Email:
                    <br/> 
                    <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    required />
                </label>
                <br />
                <label>Password:
                    <br/> 
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    required />
                </label>
                <br />
                <label>Confirm Password:
                    <br/> 
                    <input 
                    type="password"
                    name="confirmpassword"
                    value={confirmPassword}
                    onChange={(event)=>setConfirmPassword(event.target.value)}
                    required />
                </label>
                {!passwordMatch && <p style={{color:'red'}}>Password do not match.</p>}
                {registrationStatus && <p>{registrationStatus}</p>}
                <br />
                <input type="submit" value="submit" />
            </form>
        </>
    );
}

export default EmpReg;