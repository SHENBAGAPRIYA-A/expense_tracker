import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
const UserList = (props) => {
    const{expense,setExpense}=props;
    //const{expenses,setExpenses}=props;
    const[date,setDate]=useState();
    const[category,setCategory]=useState();
    const[amount,setAmount]=useState();
    const[isEdit,setIsEdit]=useState(false)
    const[EditId,setEditId]=useState()
    const handleDelete = async(id) => {
        // let deletedArray = expense.filter((user, i) => index != i)
        // setExpense(deletedArray);
        const response=await axios.delete(`http://localhost:3001/api/${id}`)
        const newexpense=expense.filter((ele)=>ele._id!==id);
        toast.success("Expense Deleted successfully")
        setExpense(newexpense);
    };
    const handleUpdate=(user)=>{
        setEditId(user._id);
        setIsEdit(true);
        setDate(user.date);
        setCategory(user.category);
        setAmount(user.amount);
    };
    const handledate = (event) => {
        setDate(event.target.value);   
    };

    const handlecategory = (event) => {
        setCategory(event.target.value);
    };
    const handleamount = (event) => {
        setAmount(event.target.value);
    };
    const AddExpense = async(event) => {
        event.preventDefault();
        if (!isEdit) {
            // const newexpense = {
            //     id:uuidv4(),
            //     date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
            //     category:category,
            //     amount: parseInt(amount)
            // };
            const response=await axios.post('http://localhost:3001/api',{
                category:category,
                amount: parseInt(amount)
            })
            setExpense([...expense, response.data]);  //spread operator
            toast.success("New user Added Successfully!");  
            setDate("");
            setCategory("");
            setAmount("");
        } else {
            const response=await axios.put(`http://localhost:3001/api/${EditId}`,{category,amount})
            console.log({response})
            const updatedArray=expense.map((item)=>{
                return item._id===EditId?{...item,date,category,amount:parseInt(amount)}:item;
            });
            setExpense(updatedArray);
            toast.info("Expense Updated Successfully!");
            setIsEdit(false);
            setEditId("");
            setDate("");
            setCategory("");
            setAmount("");
        }
    };
    let sum = 0;
    expense&&expense?.map((exp) => sum += parseInt(exp.amount))
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"10px",
        }}>
            
            <div style={{
            paddingTop:"50px",
            paddingLeft:"100px",
        }} >
                
                <h3>Expense Form</h3> 
                <form onSubmit={(event)=>AddExpense(event)}> 
                {/* <label>Date: </label>
                <input type="date" value={date} onChange={handledate}></input><br></br><br></br> */}
                <label>Category:</label>
                <select value={category} onChange={handlecategory}>
                    <option value="-">-</option>
                    <option value="Food">Food</option>
                    <option value="Loan">Loan</option>
                    <option value="Work">Work</option>
                    <option value="Income">Income</option>
                    <option value="Fruits">Fruits</option>
              </select><br></br><br></br>
                <label >Amount : </label>
                <input type="number" value={amount} onChange={handleamount}></input><br></br><br></br>
                <button style={{marginLeft:"150px"}} type="submit">{isEdit? "Update":"Submit"}</button>
                </form>
            </div>
            <div style={{
            paddingRight:"200px",
            paddingTop:"50px",
        }}>
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
                     {expense && expense?.map((user,index) => (
                        <tr>
                            <td style={{ border: "2px solid black" }}>{user.date}</td>
                            <td style={{ border: "2px solid black" }}>{user.category}</td>
                            <td style={{ border: "2px solid black" }}>{user.amount}</td>
                            <td><button onClick={() => handleDelete(user._id)}>DeleteUser</button></td>
                            <button onClick={() => handleUpdate(user)}>Update</button>
                            
                        </tr>
                    ))}
                    <tr><td style={{ border: "2px solid black" }}>Total</td>
                        <td style={{ border: "2px solid black" }}>Rs.{sum}</td>
                    </tr>

                    {/* {expense.map((user, index) => (
                        <tr key={index}>
                            <td style={{ border: "2px solid black" }}>{user.date}</td>
                            <td style={{ border: "2px solid black" }}>{user.category}</td>
                            <td style={{ border: "2px solid black" }}>{user.amount}</td>
                            <td><button onClick={() => handleDelete(index)}>DeleteUser</button></td>
                            <button onClick={() => handleUpdate(user)}>Update</button>
                            
                        </tr>
                    ))}
                    <tr><td style={{ border: "2px solid black" }}>Total</td>
                        <td style={{ border: "2px solid black" }}>Rs.{sum}</td>
                </tr> */}
                </tbody>
            </table> 
            
            </div>
            </div>
)}
export default UserList;
