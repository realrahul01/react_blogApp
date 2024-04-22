import insta from '../images/Vector (6).png'
import twitter from '../images/Vector (5).png'
import linkedin from '../images/Vector (4).png'
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';
import {NavLink} from 'react-router-dom'




const Header=()=>{
const [isMenu, setIsMenu] = useState(false)


const menuHandler=()=>{
    setIsMenu((prev)=>{
        return !prev
    })
}

    return(
        <nav>
            <div className="left_nav">
                <h1>GreatZone</h1>
            </div>
            {isMenu && (
                <div className="menu_Sty">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Post</NavLink></li>
                    <li><img src={insta} alt="error" /></li>
                    <li><img src={twitter} alt="error" /></li>
                    <li><img src={linkedin} alt="error" /></li>
                </ul>
            </div>
            )}
            <div className="right_nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Post</NavLink></li>
                    <li><img src={insta} alt="error" /></li>
                    <li><img src={twitter} alt="error" /></li>
                    <li><img src={linkedin} alt="error" /></li>
                </ul>
            </div>

            <div className="menu">
                {isMenu && (
                    <TfiClose onClick={menuHandler}/>
                )}
                {!isMenu && (
                    <CiMenuFries onClick={menuHandler}/>
                )}
            </div>
        </nav>
    )
}

export default Header;