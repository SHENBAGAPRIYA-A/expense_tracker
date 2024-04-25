import { useState ,useEffect} from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Cards from './Cards'
import Header from './components/Header'
import { v4 as uuidv4 } from 'uuid';
import UserList from './components/UserList'

function App() {
  // const [expense, setExpense] = useState([
  //   {id:uuidv4(),date:"25/10/2023",category:"Food",amount:1000},
  //   {id:uuidv4(),date:"14/10/2023",category:"Loan",amount:2000},
  // ]);

  const[expense,setExpense]=useState(null)
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const response=await axios.get("http://localhost:3001/api")
      setExpense(response.data);
      }
      catch(error){
        console.error(error)
      }
    }
    fetchData();
  },[])

  
  const [category, setCategory] = useState([]);
  expense && expense?.map((item)=>{
    category.includes(item.category)?" ":category.push(item.category)
  })
  console.log(category)
  
  const[content,setContent]=useState("Start");
  const handleChange=()=>{
    setContent(content==="Start" ? "Stop":"Start");
  }
  return (
    <>
    <Header/>
    {/* <Cards category={category} setCategory={setCategory}/> */}
    <UserList expense={expense} setExpense={setExpense}/>
      <button style={{marginLeft:"100px",}}onClick={()=> handleChange()}
      className={content==="Start" ? "success":"failure"}
      >{content}</button>
    </>
  )
}
export default App
