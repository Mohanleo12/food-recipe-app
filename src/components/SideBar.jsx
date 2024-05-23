import React from 'react'
import NavBar from "./NavBar.jsx"
import Search from "./Search.jsx"
import Chats from "./Chats.jsx"

const SideBar = () => {
  return (
    <div className='sidebar' >
      <NavBar />
      <Search />
      <Chats />
    </div>
  )
}

export default SideBar
