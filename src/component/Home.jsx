import trip from '../images/unsplash_TkrRvwxjb_8.png'
import established from '../images/image 1 (1).png'
import laptop from '../images/image 2 (1).png'
import ppl from '../images/image 4 (1).png'
import screen from '../images/image 5.png'
import stand from '../images/image 7.png'
import { MdOutlineArrowCircleDown } from "react-icons/md"


const Home=()=>{
    return(
        <>
        <section>
            <div className="zone">
                <div className="left_zone">
                    <p className="txt1">Make Zone <br /> Better !</p>
                    <p className='txt2'>Why Better Zone Important ?</p>
                </div>
                <div className="right_zone">
                    <img src={trip} alt="error" />
                </div>
            </div>
            <div className="establish">
                <div className="left_esta">
                    <p className='esta_txt1'>long established</p>
                    <p className='esta_txt2'>It is a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that...</p>
                    <span className='esta_day'>may 20th 2020</span> 
                    <span className='read'>Read more</span>
                </div>
                <div className="right_esta">
                    <img src={established} alt="error" />
                </div>
            </div>
            <div className="main">
                <div className="card">
                    <img src={laptop} alt="error" />
                    <div className="card_details">
                    <p className='card_txt1'>long established</p>
                    <p className='card_txt2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...</p>
                    <span className='esta_day'>may 20th 2020</span> 
                    <span className='read'>Read more</span>
                </div>
                </div>
                <div className="card">
                    <img src={ppl} alt="error" />
                    <div className="card_details">
                    <p className='card_txt1'>long established</p>
                    <p className='card_txt2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...</p>
                    <span className='esta_day'>may 20th 2020</span> 
                    <span className='read'>Read more</span>
                </div>
                </div>
                <div className="card">
                    <img src={screen} alt="error" />
                    <div className="card_details">
                    <p className='card_txt1'>long established</p>
                    <p className='card_txt2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...</p>
                    <span className='esta_day'>may 20th 2020</span> 
                    <span className='read'>Read more</span>
                </div>
                </div>
            </div>
            <div className="ipsum">
                <div className="left_ipsum">
                    <p className='ipsum_txt1'>What is Lorem <br /> Ipsum?</p>
                    <p className='ipsum_txt2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <span className='ipsum_day'>may 20</span> 
                    <span className='ipsum_read'>Read more</span>
                </div>
                
                <div className="right_ipsum">
                    <img src={stand} alt="error" />
                </div>
            </div>

            <div className="see_more">
                <button>See More <MdOutlineArrowCircleDown /></button>
            </div>
        </section>
        </>
    )
}

export default Home;