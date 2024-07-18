import React,{useState} from 'react';
import axios from 'axios';
import './style.css';

function EmpDel(){

    const [email,setEmail]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();

        axios.delete('http://localhost:5000/emp/email',{data:{email}})
        .then(function (response){
            console.log(response.data);
        })
        .catch(function (error){
            console.error(error);
        });
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Unregister Emp</h1>
                <label>Email:
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                        required
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default EmpDel;