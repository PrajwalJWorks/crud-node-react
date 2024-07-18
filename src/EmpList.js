import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './style.css';

function EmpList(){
    const [employees,setEmployees]=useState([]);

    useEffect(()=>{
        const fetchEmployees=async()=>{
            try{
                const response=await axios.get('http://localhost:5000/emp');
                setEmployees(response.data);
            }catch(error){
                console.error("Error fetching employee data: ",error);
            }
        };
        fetchEmployees();
    },[]);
    return (
        <>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp=>(
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmpList;