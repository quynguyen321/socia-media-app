import React from 'react'
import"./Home.css"
import ProfileSide from '../../components/Profile/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide">Rightside</div>
    </div> 
  )
}

export default Home