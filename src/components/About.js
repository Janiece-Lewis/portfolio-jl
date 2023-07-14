import React from "react";
import avatar from '../images/avatar.png'



const About= () =>{
    return(
    <div className="">

<div class="flex items-center space-x-8 h-28 max-w-[1240px] px-5">
    <img class="w-50 h-50 rounded-full" src={avatar} alt=""/>
    <div class="font-medium dark:text-white text-2xl">
        <div class='text-white'>Janiece Lewis</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">fullstack web dev</div>
    </div>
</div>

    // </div>
    )
}

export default About