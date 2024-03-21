import './Dashboard.css'
import Left from "./Left";
import { useParams } from 'react-router-dom';
import Mid from './Mid';
import Right from './Right';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Main() {
  const { access_token } = useParams();
  const [user,setUser] = useState();
  console.log(access_token)
  
  useEffect(() => {
    axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          if (res.data) {
            console.log(res.data.name);
            setUser(res.data)
          } else {
            console.log('Name not available');
          }  
        })
        .catch((err) => console.log(err));
  },[access_token])

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <div className="main-dashboard">
      {user &&
        <div className='flex h-[100%]'>
          <Left 
            access_token={access_token} 
            name={user.name} 
            pannel={1}
            img={user.picture}

          />
          <Mid />
          <Right />
        </div>
      }
    </div>
  )
}
