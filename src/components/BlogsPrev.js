import React from 'react'
import blogs from './web logos/blogs.svg'
const BlogsPrev = () => {
  return (
    <div className='prevsblock' id='blogsprev'>
            <div className="introsection">
                <p>Here I have listed some of my technical blogs which I have written
                </p>
                <button id='download_cv' className='primarybtn'>see Blogs</button>
            </div>
            <div className='imagesection'>
                <img src={blogs} alt="" />
            </div>
        </div>
  )
}

export default BlogsPrev