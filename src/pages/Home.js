import React,{useState} from 'react'
import PowerBtn from '../components/PowerBtn';
import Logo from '../components/Logo';
import Socials from '../components/Socials';
import { NavLink } from 'react-router-dom';
import { FaYinYang} from 'react-icons/fa'
import DarkBg from '../components/DarkBg';
const Home = () => {
const [click,setClick] = useState(false);
    const Links = (props)=>{
        return <NavLink to={props.link} className={props.classes}>
{props.title}
</NavLink>
    }
  return (
    <div className='h-screen relative'>
<Logo/>
   <PowerBtn/>
   <DarkBg click={click}/>
   <Socials/>
<Links classes='absolute top-8 right-0 font-medium text-md' link='/about' title='About'/>
<Links classes='absolute top-1/2 right-0 font-medium rotate-90 text-md' link='/skills' title='My Skills'/>
<Links classes='absolute bottom-2 left-1/4 font-medium  text-md' link='/work' title='Work'/>
<Links classes='absolute bottom-2 right-1/4 font-medium  text-md' link='/project' title='Fun Project'/>
<button className={`absolute ${click?`tp`:`top-1/2 left-1/2`}
${click?`w-28 h-28`:`w-48 h-48`}  trans-y  cursor-pointer -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center border-none outline-none`} onClick={()=>setClick(!click)}>
<FaYinYang className='w-full h-full animate-spin'/>
<span className={`${click?'hidden':'text-sm font-medium'}`}>click here</span>
</button>

    </div>  
  )
}

export default Home;