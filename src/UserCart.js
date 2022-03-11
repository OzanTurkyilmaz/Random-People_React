import React from 'react'

export default function UserCart({ users }) {
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className='users_container'>
      <div className="users">
        {users?.map((user) => (

          <div key={user.name.last} className="user">
            <img src={user.picture.thumbnail} className='user_picture' alt={user.name.first}></img>
            <div className='user_info'>
              <p>{user.name.first} {user.name.last}</p>
              <p>{user.email}</p>
              <p>{user.location.country} | {user.location.city}</p>
            </div>


          </div>
        ))}
      </div>
      <button onClick={refreshPage} className='btn'>
        Get Different People
      </button>


    </div>



  )
}

