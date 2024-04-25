import React ,{useState} from 'react';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from "uuid";



function  Table() {
    const [expenses,setExpense]=useState([
      {id:uuidv4(),date:"19-05-2004",category:"Loan",amount:4000},
      {id:uuidv4(),date:"9-05-2004",category:"Loan",amount:3000},
      {id:uuidv4(),date:"1-05-2004",category:"Food",amount:1000},

    ]);
    const {table}=useParams()
    const filterArray=expenses.filter((ite)=>ite.category===table)
  return (
    <div>
      <h3>Expense Table</h3>
            <table className="table"
                style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <thead>
                    <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Date</th>
                    <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Category</th>
                    <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Amount</th>
                    <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Delete</th>
                    <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Update</th>
                </thead>
                <tbody>
                  {filterArray.map((ite)=><tr>
                    <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>{ite.date}</td>
                    <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>{ite.category}</td>
                    <td style={{ border: "2px solid black", borderCollapse: "collapse" }} >{ite.amount}</td>
                  
                  </tr>)}
                </tbody>
            </table>
            
    </div>
  )
}

export default Table
