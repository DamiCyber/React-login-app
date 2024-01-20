import React from 'react'
import { useState } from 'react'
import "../assets/style/Style.css"
const Tenary = () => {
  const [name, setName] = useState("SQI template")
  const [allUsers, setAllUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = (i) => {
    setFirstName(i.target.value)
  }
  const user1 = (i) => {
    setLastName(i.target.value)
  }
  const user2 = (i) => {
    setEmail(i.target.value)
  }
  const user3 = (i) => {
    setPassword(i.target.value)
  }



  const changeName = () => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    setAllUsers((prevUsers) => [...prevUsers, newUser]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

  }

  return (
    <div>

      <center>
        <h4>
          {name}
        </h4>
       <div className="moew">
       <h4 >
          {allUsers.map((user, index) => (
            <div key={index}>
              {user.firstName} {user.lastName} {user.email} {user.password}
            </div>
          ))}
        </h4>
       </div>
        <div className="form">
          <input type="text" onChange={user} placeholder='First Name' value={firstName} />
          <input type="text" onChange={user1} placeholder='Last Name' value={lastName} />
          <input type="text" onChange={user2} placeholder='Email Address' value={email} />
          <input type="password" onChange={user3} placeholder='password ' value={password} />
          <button onClick={changeName} >change name</button>
        </div>
      </center>

    </div>
  )
}

export default Tenary