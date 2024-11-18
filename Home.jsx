import'./pages.css'
import React, {useEffect,useState} from 'react'
import  {Link} from "react-router-dom"
import axios from 'axios'
import { getUser } from '../controllers/users'
import { toast } from 'react-toastify'


const Home = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    getUsers()
  },[]);

  const getUsers = async () => {
    const response = await axios.get(" http://localhost:4000/users");
    if(response.status === 200){
      setData(response.data);
    }
  }; 

const onDeleteUser  = async (id) =>{
  if(window.confirm("Are you sure you wanted to delete this user?"))
  {
    const response = await axios.delete(`http://localhost:4000/user/${id}`)
    if (response.status === 200){
      toast.success(response.data);
      getUsers();  
    }
  }
}

  console.log("data=>",data)

  return (
    <div className="container" style={{marginTop: "60px"}}>
      <h2  className="Text">Contacts</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>No.</th>
            <th style={{textAlign: "center"}}>Name</th>
            <th style={{textAlign: "center"}}>Email</th>
            <th style={{textAlign: "center"}}>Contact</th>
            <th style={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item,index) => {
          return(

            <tr key={index}>
              <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className='btn btn-edit'>Edit</button>
                  </Link>
                   <button className='btn btn-delete ' onClick={() => onDeleteUser(item.id)}>Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className='btn btn-edit'>View</button>
                  </Link>

                </td>
            </tr>

          )
   })}
        </tbody>
      </table>
      
    </div>
  )
}

export default Home
