import React from 'react'
import"./Home.css"
import ProfileSide from '../../components/Profile/ProfileSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <div className="postSide">Post</div>
        <div className="rightSide">Rightside</div>
    </div> 
  )
}

export default Home