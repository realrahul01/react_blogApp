import insta from '../images/Vector (6).png'
import twitter from '../images/Vector (5).png'
import linkedin from '../images/Vector (4).png'


const Footer=()=>{
    return(
        <div className="footer">
            <div className="left_foot">GreatZone 2022 copyright all rights reserved</div>
            <div className="right_foot">
                <ul>
                    <li><img src={linkedin} alt="error" /></li>
                    <li><img src={twitter} alt="error" /></li>
                    <li><img src={insta} alt="error" /></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Footer;