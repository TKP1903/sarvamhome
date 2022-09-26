import './home.css';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { TbShoppingCart } from "react-icons/tb";
import { ImUser } from "react-icons/im";
import logo from "./images/Sarvam_logo.png"
import youtube from "./images/youtube.png"
import building from "./images/building.png"
import brand from "./images/brand.png"
import image1 from "./images/firstimage.jpg"
import award from "./images/award.png"
import award2 from "./images/award2.png"
import award3 from "./images/award3.png"
import award4 from "./images/award4.png"
import insta from "./images/insta.png"
import facebook from "./images/facebook.png"
import youtube1 from "./images/youtube1.png"
import linked from "./images/linked.png"
import whatsapp from "./images/whatsapp.png"
import twitter from "./images/twitter.png"
import safety from "./images/safety.png"
import safety1 from "./images/safety1.jpg"
function Home(){
    return(
        <div>
        <div className="fulldiv">
            <div className="child1">
                <div className="menu-icon"><AiOutlineMenu/></div>
                  <div className="logo1">
                    <img src={logo} alt="" srcset="" />
                  </div>
                    <div className="search">
                        <div className='search1'></div>
                        <div className='search2'><AiOutlineSearch/></div>
                    </div>
            </div>
            <div className="child2">
               <div className="aboutus">ABOUT US</div>
                  <div className="contactus">CONTACT US</div>
                    <div className="careers">CAREERS</div>
            </div>
            <div className="child3">
                  <div className="brand">
                     <img src={brand} alt="" srcset="" />
                  </div>
                  <div className="cart"><TbShoppingCart/></div>
                    <div className="sign" >
                        <div className="sign1"><ImUser/></div>
                        <div className="sign2">SIGN IN</div>
                    </div>
            </div>
        </div>
        <div className='full-page'>
            <div className='first-image'>
                 <img src={image1} alt="" srcset="" />
            </div>
            <p className='para1'>The word 'SARVAM' a Sanskrit word that stands for "Everything" or "Complete", represents to the totality of our strengths as a company - Infrastructure, Man power, Rich Experience, Extensive Product Range, Quality and undying passion to remain ahead of the times. All backed by our capable and experienced sales, Marketing, Back end Supporting, Service and Logistics team.</p>
         <p className='para1'>SARVAM SAFETY Equipment (P) ltd is a Channel partner for reputed National and International Life Saving Equipment Manufacturers, catering the safety needs of various Industrial segments such as Automobiles, Chemical, Engineering, Pharmaceuticals, Refineries, Construction, power sectors , Fire service, Government sectors, IT , Hotels and various Institutions.</p>
        <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className='one-step'   style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p className='one-stop'>ONE-STOP SOLUTION</p>
            </div>

        </div>
        <div className='vision'   style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className='sub-vision'>
                <div  className='yt-image'>
                    <img src={youtube} alt="" srcset="" />
                </div>
                <div className='text'>
                    <div className='text1'>VISION AND MISSION</div>
                     <div className='vision-text'>VISION:</div>
                <div className='vision-text1'>SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by 
                    catering to various segments and
                </div>
                 <div className='vision-text2'>MISION:</div>
                 <div className='vision-text3'>SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by 
                    catering to various segments and
                </div>
                </div>
               
            </div>
        </div>
        <div className='wall'>
            <div className='wall1'>WALL OF FAME</div>
            <div className='wall2'>ALL ROADS THAT LEAD TO SUCCESS HAVE TO PASS THROUGH
            HARDWORK BOULEVARD,AT SOME POINT OF TIME</div>
            <div className='frame'>
                <div className='frame1'>
                    <img src={award2} alt="" srcset="" />
                </div>
                <div className='frame2'>
                    <img src={award3} alt="" srcset="" />
                </div>
                <div className='frame3'>
                    <img src={award} alt="" srcset="" />
                </div>
                <div className='frame4'>
                    <img src={award4} alt="" srcset="" />
                </div>
                
            </div>
             <div className='frame'>
                <div className='frame1'>
                    <img src={award2} alt="" srcset="" />
                </div>
                <div className='frame2'>
                    <img src={award3} alt="" srcset="" />
                </div>
                <div className='frame3'>
                    <img src={award} alt="" srcset="" />
                </div>
                <div className='frame4'>
                    <img src={award4} alt="" srcset="" />
                </div>
                
            </div>


        </div>
        <div className='bg-img'>
             <div className='backgroundimg' style={{ backgroundImage:`url(${building})` }}>

                <p className='vision-text1'>SUCCESS IS NOT FINAL;FAILURE IS NOT A FATAL: IT IS THE COURAGE TO CONTINUE THAT COUNTS.</p>
                <div className='client'>
                    <div className='amount1'>
                        <div className='sub-amount'>60000+</div>
                        <div className='b2b'>B2B</div>
                    </div>
                    <div className='amount2'>
                          <div className='sub-amount'>25000+</div>
                        <div className='b2b'>B2C</div>
                    </div>
                    <div className='amount3'>
                          <div className='sub-amount'>15000+</div>
                        <div className='b2b'>SUPPLIER</div>
                    </div>
                    <div className='amount4'>
                          <div className='sub-amount'>4000+</div>
                        <div className='b2b'>DISTRIBUTER</div>
                    </div>
                </div>
             </div>
        </div>
        <div className='people_behind'>
            <div className='people_text1'>PEOPLE BEHIND THE SCENE</div>
            <div className='people_text2'>Good teams incorporate teamwork into their 
            culture,creating the building blocks for success</div>
        </div>
        <div className='half-pg' >
            <div className='halg-pg1'>
                <div className='sub-half1'>
                      <img src={safety} alt="" srcset="" />
                       <div className='salesteam'>SALES TEAM</div>
                </div>
               
                <div className='sub-half2'>
                     <img src={safety} alt="" srcset="" />
                      <div className='salesteam'>ADMIN TEAM</div>
                </div>
            </div>
             <div className='halg-pg1'>
                <div className='sub-half1'>
                     <img src={safety1} alt="" srcset="" />
                      <div className='salesteam'>SERVICE TEAM</div>
                </div>
                <div className='sub-half2'>
                     <img src={safety1} alt="" srcset="" />
                      <div className='salesteam'>ADMIN TEAM</div>
                </div>
            </div>
        </div>
       <div className='parent-sarvam'>
                    <div className='sarvam'>
                        <div className='sub-sarvam1'>SARVAM SAFETY
                        <div className='sarvam2'>
                        <div className='sarvam2'>Abouts</div>
                         <div className='sarvam2'>Careers</div>
                          <div className='sarvam2'>Contact us</div>
                           <div className='sarvam2'>Testimonials</div>
                            <div className='sarvam2'>Blog</div>
                            </div>
                        </div>
                         <div className='sub-sarvam1'>HELP
                        <div className='sarvam2'>
                        <div className='sarvam2'>Track my order</div>
                         <div className='sarvam2'>Buying guide</div>
                          <div className='sarvam2'>FAQS>>></div>
                            </div>
                        </div>
                         <div className='sub-sarvam1'>SARVAM OWN
                        <div className='sarvam2'>
                        <div className='sarvam2'>Popular Searches</div>
                         <div className='sarvam2'>Best Deals</div>
                          <div className='sarvam2'>Online Assist</div>
                           <div className='sarvam2'>Industry Store</div>
                            </div>
                        </div>
                        <div className='sub-sarvam1'>MISC
                        <div className='sarvam2'>
                        <div className='sarvam2'>Bulk Enquiry</div>
                         <div className='sarvam2'>Sarvam Safety Business</div>
                          <div className='sarvam2'>Supplier Central</div>
                            </div>
                        </div>
                         <div className='stay-connected'>STAY CONNECTED
                        <div className='icon'>
                         <div className='icon1'>
                             <img src={insta} alt="" srcset="" />
                         </div>
                          <div className='icon1'>
                             <img src={facebook} alt="" srcset="" />
                          </div>
                           <div className='icon1'>
                             <img src={youtube1} alt="" srcset="" />
                           </div>
                           <div className='icon1'>
                             <img src={linked} alt="" srcset="" />
                           </div>
                             <div className='icon1'>
                                 <img src={whatsapp} alt="" srcset="" />
                             </div>
                              <div className='icon1'>
                                 <img src={twitter} alt="" srcset="" />
                              </div>
                              </div>
                         </div>

                         </div>
                    
                </div>
                <div className='hr'></div>
                <p className='terms'>TERMS OFUSE COPYRIGHT PRICACY POLICT COMPLIANCE</p>
                <div className='hr1'></div>
        </div>
       
        </div>
        
    )
}
export default Home