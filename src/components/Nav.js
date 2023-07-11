import React from 'react';

const Nav = () => {
    return(
        <div className='flex justify-end items-center h-24 max-w-[1240px]  text-white'>
            {/* <h1 className='w-full text-3xl font-bold text-white'>JL</h1> */}
            <ul className='flex justify-between '>
                <li className='p-4'><a href='https://github.com/Janiece-Lewis'target='_blank'>Github</a></li>
                <li className='p-4'><a href='https://www.linkedin.com/in/janiece-lewis-40ba16236/'target='_blank'>LinkedIn</a></li>
                <li className='p-4'><a href='https://drive.google.com/file/d/1f3zbURuepAQbTcaiP4i7n3kT-8hO8lx3/view?usp=sharing'target='_blank'>Resume</a></li>
            </ul>
        
        </div>
    )
}
export default Nav

