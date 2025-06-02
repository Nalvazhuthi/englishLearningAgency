import logo from "../assets/images/logo/logo.png"
import { RightIcon, SearchIcon } from "../assets/svgs/exportIcons"
import avatar1 from "../assets/images/avatars/Avatar (1).png"
import avatar2 from "../assets/images/avatars/Avatar (2).png"
import avatar3 from "../assets/images/avatars/Avatar (3).png"
import cardImage from "../assets/images/common/unsplash.png"
const Home = () => {
  return (
    <div className='home-container'>
      <div className="navigation">
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search-bar-wrapper">
            <input type="text" placeholder="Search..." />
            <div className="icon"><SearchIcon /></div>
          </div>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="nav-right">
          <div className="authors">
            <div className="author-users-wrapper">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
            </div>
            <div className="total-authors">+1.2k Authors</div>
          </div>
          <div className="button-secondary">Sign In</div>
          <div className="button-primary">Get Started</div>
        </div>
      </div>
      <div className="home-wrapper">
        <div className="content-1 content-wrapper">
          <div className="content">Improve your English level</div>
          <div className="message">We have published more than <div className="highlight"> 650 episodes </div> of educational materials, every day more than <div className="highlight"> 1.2k teachers work on our materials</div></div>
        </div>
        <div className="content-2 content-wrapper">
          <div className="content">Train with Native speakers</div>
        </div>
        <div className="content-3 content-wrapper">
          <div className="card">
            <div className="image-wrapper">
              <img src={cardImage} alt="" />
            </div>
            <div className="card-content">
              <div className="card-head">Blog</div>
              <div className="card-content">More than 500 articles on educational topics</div>
              <div className="card-footer">
                <div className="view">View All</div>
                <div className="icon"><RightIcon /></div>
              </div>

            </div>
          </div>
          
          <div className="content">Get a license and teach</div>
          <div className="button">
            Let’s Go
            <div className="icon"><RightIcon /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home



