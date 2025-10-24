import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 w-full bg-black text-white text-center py-4">
        <div className='flex justify-center items-center mb-2'>
            <Link className='flex flex-col justify-center items-center' to={"https://github.com/bom70489"}>
            <p className='text-2xl'><FaGithub /></p>
            <p>Github</p>
            </Link>
            <Link className='mx-10 flex flex-col justify-center items-center' to={"https://www.facebook.com/phkhphlmngkhlthnaraks?locale=th_TH"}>
            <p className='text-2xl'><FaFacebook /></p>
            <p>Facebook</p>
            </Link>
            <Link className='flex flex-col justify-center items-center' to={"https://www.instagram.com/iwantsleepmak"}>
            <p className='text-2xl'><FaInstagram /></p>
            <p>Instagram</p>
            </Link>
        </div>
        <div className='text-center my-3 flex justify-center items-center'>
            <p>CopyRight ©2025; Designed By Pakapol</p>
        </div>
    </div>
  )
}

export default Footer
