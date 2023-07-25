import { useEffect } from 'react'
import PostContainer from '../components/Posts/PostContainer'
import PostalModal from '../components/PostModal/PostModal'
import axios from 'axios'

export const Home = () => {
  return (
    <div>
      {/* <PostalModal /> */}
      <PostContainer />
    </div>
  )
}
