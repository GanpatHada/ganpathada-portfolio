import React from 'react'
import blogs from './web logos/blogs.svg'
import { Link } from 'react-router-dom'
const BlogsPrev = () => {
  return (
    <div className='prevsblock' id='blogsprev'>
            <div className="introsection">
                <h2>Blogs</h2>
                <p>Here I have listed some of my technical blogs which I have written
                </p>
                <Link to='/blogs'><button id='download_cv' className='primarybtn'>see Blogs</button></Link>
                
            </div>
            <div className='imagesection'>
                <img src={blogs} alt="" />
            </div>
        </div>
  )
}
export default BlogsPrev