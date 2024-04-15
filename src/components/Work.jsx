import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Work = () => {

const portfolios = [
    {
    id:1,
    src: arrayDestruct,
    link: "https://www.clt-sicherheit.de"
    },
    {
        id:2,
        src: installNode
        },
        {
            id:3,
            src: navbar
            },
            {
                id:4,
                src: reactSmooth
                },
                {
                    id:5,
                    src: reactParallax
                    
                },
                {
                    id:6,
                    src: reactWeather
                    
                },
]


  return (
    
<div 
name= "Portfolio" 
className= "bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

<div className="pb-8">
     
    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        Portfolio
    </p>
    <p className="py-6"> Some of my projects</p>
</div>




<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

{portfolios.map(({id, src}) => (

    <div key={id} className='shadow-md shadow-purple-800 rounded-lg'> 


<img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
<div className='flex items-center justify-center'>
    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-purple-700 rounded '>Demo</button>

    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-rose-600 rounded'> Code</button>
</div>

</div>







))}







</div>

</div>

</div>


    
  )
}

export default Work