import React from 'react'
const Blogs = () => {
    return (
        <div id='blogs' className='mainblocks'>
            <h1><span>B</span>logs</h1>
            <div className="blogslist">
                <div id="blog1" className='blogs'>
                    <h1>Angular vs React</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias eaque! Id facilis eius in voluptates rerum ipsa! Minus, nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero quo libero nam exercitationem adipisci rem alias saepe sequi nemo.</span>
                    <a href="https://ganpathada.hashnode.dev/react-vs-angular" target='_blank'> Read more...</a>
                </div>
                <div id="blog2" className='blogs'>
                    <h1>Need of Typescript</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias eaque! Id facilis eius in voluptates rerum ipsa! Minus, nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero quo libero nam exercitationem adipisci rem alias saepe sequi nemo.</span>
                    <a href="/" target='_blank'> Read more...</a>
                </div>
            </div>

        </div>
    )
}

export default Blogs