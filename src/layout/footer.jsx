import React from 'react'
import Logo from '../assets/logo-colored.svg'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import Applestore from '../assets/appstore.png'
import Playstore from '../assets/playstore.png'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between'>
      <div className='logo'>
        <Link to="/"><img src={Logo} alt="" /></Link>
        <p className='font-sans mt-3 text-gray-500'>Best information about the company <br /> gies here but now lorem ipsum is</p>
        <ul className='flex flex-row gap-2 mt-3'>
          <li><Link><TiSocialFacebook className="bg-gray-300 rounded-xl text-white size-6" /></Link></li>
          <li><Link><TiSocialTwitter className="bg-gray-300 rounded-xl text-white p-0.5 size-6" /></Link></li>
          <li><Link><TiSocialLinkedin className="bg-gray-300 rounded-xl text-white size-6" /></Link></li>
          <li><Link><TiSocialInstagram className="bg-gray-300 rounded-xl text-white p-0.5 size-6" /></Link></li>
          <li><Link><TiSocialYoutube className="bg-gray-300 rounded-xl text-white p-1 size-6" /></Link></li>
        </ul>
      </div>
      <div className='grid grid-cols-4 gap-10'>
        <div>
          <h2 class="font-medium text-xl text-gray-800">About</h2>
          <ul className='font-sans text-gray-400 mt-3'>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Find store</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="font-medium text-xl text-gray-800">Partenership</h2>
          <ul className='font-sans text-gray-400 mt-3'>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Find store</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="font-medium text-xl text-gray-800">Information</h2>
          <ul className='font-sans text-gray-400 mt-3'>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Money Refund</Link>
            </li>
            <li>
              <Link to="/">Shipping</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="font-medium text-xl text-gray-800">For users</h2>
          <ul className='font-sans text-gray-400 mt-3'>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <Link to="/">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
        <div>
          <h2 class="font-medium text-xl text-gray-800">About</h2>
          <ul>
            <li className='mt-4'>
              <Link>
                <img src={Applestore} alt="" width={100} />
              </Link>
            </li>
            <li className='mt-3'>
              <Link>
                <img src={Playstore} alt="" width={100} />
              </Link>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer