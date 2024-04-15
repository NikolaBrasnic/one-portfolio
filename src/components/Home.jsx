
import React from "react";
import HeroImage from"../assets/heroImage.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll";


const Home = () => {
  return (
    
<div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900" >


<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

<div className="flex flex-col justify-center h-full">
    <h2 className="text-4xl sm:text-7xl font-bold">

<span className="bg-gradient-to-r from-purple-700 to-rose-700 text-transparent bg-clip-text">
       Hi, i am a software engineer
        </span>
        
    </h2>

    <p className="text-white py-4 max-wmd">
        I am a software engineer who is passionate about creating software solutions that make a difference. I am always looking for new challenges and opportunities to learn and grow. I am proficient in a variety of programming languages and technologies and have experience working on a wide range of projects. I am a team player who is always willing to go the extra mile to get the job done. I am excited to bring my skills and experience to your team and help you achieve your goals.

    </p>

    <div> 
        <Link to = "Portfolio" smooth duration ={500}
         className=" group   text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-rose-700 cursor-pointer" 
        >
            Portfolio 
            <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
            </span>


        </Link>
    </div>
</div>


<div>
   
<img src={HeroImage} alt="my profil" className="rounded-2xl mx-auto  w-2/3 md:w-full"/>

</div>


</div>
    </div>
  )
};

export default Home

//Group kann man zuordnen zb Beim Button damit der gesamte Button davon betroffen ist.