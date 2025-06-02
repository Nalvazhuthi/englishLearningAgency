import box1 from "../assets/images/price/box1.png"
import box2 from "../assets/images/price/box2.png"
import box3 from "../assets/images/price/box3.png"
import box4 from "../assets/images/price/box4.png"
import box5 from "../assets/images/price/box6.png"
import box6 from "../assets/images/price/box6.png"
import box7 from "../assets/images/price/box7.png"
import box8 from "../assets/images/price/box8.png"

import { RightIcon } from '../assets/svgs/exportIcons'

const Prices = () => {
    return (
        <div className='price-container page-container'>
            <div className="header">Prices</div>
            <div className="grid">
                <div className="item item-0">
                    <div className="heading-wrapper">
                        <div className="heading">Get a <div className="highlight">License</div> and become a teacher</div>
                        <div className="icon"><RightIcon /></div>
                    </div>
                    <div className="message">The cost of obtaining an English teacher license can vary depending on the program and location. Some programs may require fees for application, examinations, and materials, while others may offer more affordable options. </div>
                </div>
                <div className="item item-1">
                    <img src={box1} alt="" />
                </div>
                <div className="item item-2">
                    <img src={box2} alt="" />
                </div>
                <div className="item item-3">
                    <img src={box3} alt="" />
                </div>
                <div className="item item-4">
                    <img src={box4} alt="" />
                </div>
                <div className="item item-5">
                    <img src={box5} alt="" />
                </div>
                <div className="item item-6">
                    <img src={box6} alt="" />
                </div>
                <div className="item item-7">
                    <img src={box7} alt="" />
                </div>
                <div className="item item-8">
                    <img src={box8} alt="" />
                </div>
                <div className="item item-9"><div className="heading-wrapper">
                    <div className="heading">Learn English and Pass <div className="highlight">international exams</div></div>
                    <div className="icon"><RightIcon /></div>
                </div>
                    <div className="message">The cost of English language courses can vary based on factors such as the course length, level, and location. Some courses may offer flexible payment plans or discounts for group enrollments. </div>
                </div>

            </div>

        </div>
    )
}

export default Prices