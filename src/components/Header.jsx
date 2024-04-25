import Image from '../assets/react.svg' 

function Header(){
    return(
        
       <div 
            style={{
                display:"flex",
                justifyContent:"space-between",
                backgroundColor:"grey",
                
            }}
       >
        {/* <img src = {Image}/> */}
        <h2 style={{color:"white",marginLeft:"500px"}}>Expense Tracker</h2>
           <nav>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="/about"><li>About us</li></a>
                <a href="#"><li>Contact us</li></a>
                
                
            </ul>
           </nav>
       </div>
    );
};

export default Header;