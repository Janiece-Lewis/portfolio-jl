import React from 'react';

const Nav = () => {
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-white'>JL</h1>
            <ul className='flex justify-between '>
                <li className='p-4'><a href='#about'>me</a></li>
                <li className='p-4'><a href='https://github.com/Janiece-Lewis'target='_blank'>Github</a></li>
                <li className='p-4'><a href='https://www.linkedin.com/in/janiece-lewis-40ba16236/' target='_blank'>LinkedIn</a></li>
                <li className='p-4'><a href='#about'target='_blank'>resume</a></li>
            </ul>
        
        </div>
    )
}
export default Nav

// get shared link pdf google drive