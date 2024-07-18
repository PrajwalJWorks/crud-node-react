import React,{useState} from 'react';
import axios from 'axios';
import './style.css';

function EmpUpdt(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(event)=>{

        event.preventDefault();

        axios.put('http://localhost:5000/emp/email',{email,password})
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.error(error);
        });

    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Update Password</h1>
                <label >Enter Email:
                    <input 
                        type="email"
                        name='email'
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                        required
                    />
                    <br />
                    </label>
                <label >Enter New Password:
                    <input 
                        type="password"
                        name='password'
                        value={password}
                        onChange={(event)=>{setPassword(event.target.value)}}
                        required
                    />
                </label>
                <br />
                <input type="submit" value='Submit' />
            </form>
        </>
    );
}

export default EmpUpdt;