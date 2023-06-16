import React from "react";
import c from '../images/c.jpg'

const About= () =>{
    return(
    // <div id='about' >

<div class="flex items-center space-x-4 h-20 max-w-[1240px]">
    <img class="w-10 h-10 rounded-full" src={c} alt=""/>
    <div class="font-medium dark:text-white">
        <div>Janiece Lewis</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">fullstack web dev</div>
    </div>
</div>

    // </div>
    )
}

export default About