import React,{useState} from 'react';
import axios from 'axios';
import './style.css';

function EmpDtl(){

    const [email,setEmail]=useState('');
    const [employee,setEmployee]=useState(null);

    const handleSubmit=async (event)=>{
        event.preventDefault();

        try{
            const response=await axios.get('http://localhost:5000/emp/email',{
                params:{email},
            });
            setEmployee(response.data);
        }catch(error){
            console.error("Error fetching employees details: ",error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Employee Details</h1>
                <input 
                    type="email"
                    name='email'
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                    required
                />
                <input type='submit' value='Submit' />
            </form>

            <h2>Employee Details</h2>
            {employee ?(
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Employee Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.password}</td>
                    </tr>
                </tbody>
            </table>
            ):(
                <p>No Employee details available.</p>
            )}
        </>
    );
}

export default EmpDtl;