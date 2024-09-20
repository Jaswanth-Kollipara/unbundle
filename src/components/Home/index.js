import { FaAngleDown, FaArrowRight, FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"
import { GrNotes } from "react-icons/gr"
import { FiPhone } from "react-icons/fi"
import { IoStarSharp } from "react-icons/io5"
import { MdOutlineSearch } from "react-icons/md"
import { BsChatRightDots } from "react-icons/bs"
import './index.css'
const downIcon=<FaAngleDown />
const chatIcon=<BsChatRightDots />
const noteIcon=<GrNotes />
const phoneIcon=<FiPhone />
const starIcon=<IoStarSharp />
const searchIcon=<MdOutlineSearch />
const rightArrowIcon=<FaArrowRight />
const leftCircleArrowIcon=<FaArrowCircleLeft />
const rightCircleArrowIcon=<FaArrowCircleRight />

const Home = () => (
    <div className="home-container">
        <div className="home-header">
            <div className="home-header-icon">
                <h1 className="home-header-icon-h1 orange">clove<span className="home-header-icon-sp dark-brown">{`:)`}</span></h1>
                <p className="home-header-icon-p dark-brown">D E N T A L</p>
            </div>
            <div className="home-header-drawcharts">
                <p>Treatments <sapan className="orange">{downIcon}</sapan> | Dental Plans <sapan className="orange">{downIcon}</sapan> | Our Doctors | Careers | Find a Clinic</p>
            </div>
            <p className="home-header-appointment">{noteIcon} Book Appointment</p>
            <p className="home-header-help dark-brown">{phoneIcon} help ? {downIcon}</p>
        </div>
        <div className="home-message">
            <span className="home-message-icon">{chatIcon}</span>
        </div>
        <div className="home-container2">
            <div className="home-container2-inner1">
                <h1 className="home-container2-in1-h1"><span className="orange">450+ </span>World Class Clinics</h1>
                <p className="home-container2-in1-p1">Manned by 1200+ Super Specialists</p>
            </div>
            <div className="home-container2-inner2">
                <img className="home-container2-inner2-img" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google"/>
                <div className="home-container2-inner2-statistics-container">
                    <p className="home-container2-inner2-stat-p1"><span className="home-container2-inner2-icon gold">{starIcon}</span>4.9/5</p>
                    <p className="home-container2-inner2-stat-p2 orange">1.5 Lakh+</p>
                    <p className="home-container2-inner2-stat-p3">5 Star Ratings</p>
                </div>
            </div>
            <div className="home-container2-inner3">
                <p className="home-container2-in3-p1">Select your City <span className="orange">{downIcon}</span></p>
                <p className="home-container2-in3-p2">Locate nearest Clove clinic</p>
            </div>
        </div>
        <div className="home-container3">
            <div className="home-container3-inner-container">
                <h1 className="home-container3-h1">All dental issues from simple cleaning <br /> to full mouth rehabilitation under one roof</h1>
                <div className="home-container3-inner1">
                    <div className="home-container3-in1-row">
                        <h1 className="home-container3-in1-row-h1">Root Canal <br /> Treatment</h1>
                        <h1 className="home-container3-in1-row-h1">Braces</h1>
                        <h1 className="home-container3-in1-row-h1">Teeth <br /> Whitening</h1>
                        <h1 className="home-container3-in1-row-h1">Invisible <br /> Braces</h1>
                        <h1 className="home-container3-in1-row-h1">Dental <br /> Implants</h1>
                        <h1 className="home-container3-in1-row-h1">Smile <br /> Makeover</h1>
                    </div>
                    <div className="home-container3-in1-row">
                        <h1 className="home-container3-in1-row-h1">Kids Dentistry</h1>
                        <h1 className="home-container3-in1-row-h1">Gum <br /> Treatment</h1>
                        <h1 className="home-container3-in1-row-h1">Wisdom tooth</h1>
                        <h1 className="home-container3-in1-row-h1">Laser/Painless <br /> Dentistry</h1>
                        <h1 className="home-container3-in1-row-h1">Crowns & Bridges</h1>
                        <h1 className="home-container3-in1-row-h1">Dentures</h1>
                    </div>
                </div>
                <div className="home-container3-inner2">
                    <span className="home-container3-in2-icon orange">{searchIcon}</span>
                    <p className="home-container3-in2-p1">Explore Treatments</p>
                    <span className="home-container3-in2-icon orange">{rightArrowIcon}</span>
                </div>
            </div>
        </div>
        <div className="home-container4">
            <div className="home-container4-inner-container">
                <div className="home-container4-left">
                    <h1 className="home-container4-left-h1">Expert Guidance for <br /> Healthy Smiles</h1>
                    <p className="home-container4-left-p1">Contact Now</p>
                    <fieldset className="home-container4-left-f1">
                        <legend className="home-container4-left-l1">Name</legend>
                        Amit Rana
                    </fieldset>
                    <p className="home-container4-left-p2">Mobile Number</p>
                    <p className="home-container4-left-p3">Select Concern <span className="home-container4-left-sp orange">{downIcon}</span></p>
                    <p className="home-container4-left-p4">Book A Free Consultation</p>
                </div>
                <div className="home-container4-right">
                    <div className="home-container4-right-top">
                        <div className="home-container4-right-top-left">
                            <div className="home-container4-right-top-left-top">
                                <h1 className="home-container4-right-top-left-top-h1">10x Safety Protocols</h1>
                                <p className="home-container4-right-top-left-top-p1">Reverse osmosis {`(RO)`} Filteration System to ensure safety water supply.</p>
                            </div>
                            <div className="home-container4-right-top-left-bottom">
                                <p className="home-container4-right-top-left-bottom-p1">Learn More</p>
                                <span>{rightArrowIcon}</span>
                            </div>
                        </div>
                        <img className="home-container4-right-top-right" src="" alt="altimage"/>
                    </div>
                    <div className="home-container4-right-bottom">
                        <div className="home-container4-right-bottom-left">
                            <h1 className="home-container4-right-bottom-h1">450+ Nighbourhood</h1>
                            <p className="home-container4-right-bottom-p1">Clients Pan India</p>
                            <img className="home-container4-right-bottom-img" src="" alt="altimage" />
                            <div className="home-container4-right-bottom-in">
                                <p className="home-container4-right-bottom-in-p1">Locate Clinic near you</p>
                                <span className="home-container4-right-bottom-in-sp orange">{rightArrowIcon}</span>
                            </div>
                        </div>
                        <div className="home-container4-right-bottom-right">
                            <h1 className="home-container4-right-bottom-h1">1200+ Expert Doctors</h1>
                            <p className="home-container4-right-bottom-p1">Covering All Specialities</p>
                            <img className="home-container4-right-bottom-img" src="" alt="altimage" />
                            <div className="home-container4-right-bottom-in">
                                <p className="home-container4-right-bottom-in-p1">Explore Dentists Nearby</p>
                                <span className="home-container4-right-bottom-in-sp orange">{rightArrowIcon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-blog-container">
            <div className="home-blog-con-inner-container">
                <h1 className="home-blog-con-h1">Journey Through Knowledge: Blog Hub</h1>
                <p className="home-blog-con-p"><span className="orange">General Dentistry</span> | Cosmetics Dentistry | Crowns & Bridges | Nutrition | Oral Surgery | Root Canal | Implants & Dentures</p>
                <div className="home-blog-con-inner1">
                    <div className="home-blog-con-in1-con">
                        <img className="home-blog-con-in1-con-left" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="blogImage"/>
                        <div className="home-blog-con-in1-con-right">
                            <h1 className="home-blog-con-in1-con-right-h1">Dry Sockets Demystified: Understanding the connection to tooth extraction</h1>
                            <p className="home-blog-con-in1-con-right-p">12th Feb 2024 | 2 min red</p>
                        </div>
                    </div>
                    <div className="home-blog-con-in1-con">
                        <img className="home-blog-con-in1-con-left" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="blogImage"/>
                        <div className="home-blog-con-in1-con-right">
                            <h1 className="home-blog-con-in1-con-right-h1">Dry Sockets Demystified: Understanding the connection to tooth extraction</h1>
                            <p className="home-blog-con-in1-con-right-p">12th Feb 2024 | 2 min red</p>
                        </div>
                    </div>
                    <div className="home-blog-con-in1-con">
                        <img className="home-blog-con-in1-con-left" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="blogImage"/>
                        <div className="home-blog-con-in1-con-right">
                            <h1 className="home-blog-con-in1-con-right-h1">Dry Sockets Demystified: Understanding the connection to tooth extraction</h1>
                            <p className="home-blog-con-in1-con-right-p">12th Feb 2024 | 2 min red</p>
                        </div>
                    </div>
                    <div className="home-blog-con-in1-con">
                        <img className="home-blog-con-in1-con-left" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="blogImage"/>
                        <div className="home-blog-con-in1-con-right">
                            <h1 className="home-blog-con-in1-con-right-h1">Dry Sockets Demystified: Understanding the connection to tooth extraction</h1>
                            <p className="home-blog-con-in1-con-right-p">12th Feb 2024 | 2 min red</p>
                        </div>
                    </div>
                    <div className="home-blog-con-in1-con">
                        <img className="home-blog-con-in1-con-left" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="blogImage"/>
                        <div className="home-blog-con-in1-con-right">
                            <h1 className="home-blog-con-in1-con-right-h1">Dry Sockets Demystified: Understanding the connection to tooth extraction</h1>
                            <p className="home-blog-con-in1-con-right-p">12th Feb 2024 | 2 min red</p>
                        </div>
                    </div>
                    <div className="home-blog-con-in1-con">
                        <img className="home-blog-con-in1-con-left" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="blogImage"/>
                        <div className="home-blog-con-in1-con-right">
                            <h1 className="home-blog-con-in1-con-right-h1">Dry Sockets Demystified: Understanding the connection to tooth extraction</h1>
                            <p className="home-blog-con-in1-con-right-p">12th Feb 2024 | 2 min red</p>
                        </div>
                    </div>
                </div>
                <div className="home-blog-con-inner2">
                    <span className="home-blog-con-inner2-icon">{leftCircleArrowIcon}</span>
                    <span className="home-blog-con-inner2-icon">{rightCircleArrowIcon}</span>
                </div>
                <div className="home-blog-con-inner3">
                    <span className="orange">{searchIcon}</span>
                    <p className="home-blog-con-inner3-p">Explore More</p>
                    <span className="orange">{rightArrowIcon}</span>
                </div>
            </div>
        </div>
        <div className="home-container5">
            <div className="home-container5-inner-container">
                <h1 className="home-container5-h1">Beyond Dentistry</h1>
                <p className="home-container5-p">Mapping success in every area</p>
                <div className="home-container5-in1">
                    <p className="home-container5-in1-p">Educational Videos</p>
                    <p className="home-container5-in1-p">News & Media</p>
                    <p className="home-container5-in1-p">Rewards</p>
                    <p className="home-container5-in1-p">Careers</p> 
                </div>
            </div>
        </div>
        <div className="home-container6">
            <div className="home-container6-inner-container">
                <h1 className="home-container6-h1">Frequently Asked Questions</h1>
                <div className="home-container6-in">
                    <div className="home-container5-in-container">
                        <p>Can i choose the dentist on my own for<br /> treatment?</p>
                        <p className="orange">+</p>
                    </div>
                    <div className="home-container5-in-container">
                        <p>Can i choose the dentist on my own for<br /> treatment?</p>
                        <p className="orange">+</p>
                    </div>
                    <div className="home-container5-in-container margin-t-b">
                        <p>Will i get the same doctor each time i visit the <br /> same clinic?</p>
                        <p className="orange">+</p>
                    </div>
                    <div className="home-container5-in-container margin-t-b">
                        <p>Will i get the same doctor each time i visit the <br /> same clinic?</p>
                        <p className="orange">+</p>
                    </div>
                    <div className="home-container5-in-container">
                        <p>How you are able to provide less prices than other<br /> dental brands</p>
                        <p className="orange">+</p>
                    </div>
                    <div className="home-container5-in-container">
                        <p>How you are able to provide less prices than other<br /> dental brands</p>
                        <p className="orange">+</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-footer">
            
        </div>
    </div>
  )
  
  export default Home