import './App.css';
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";

function App() {
  return (
    <>
    <div className='footer'>
         <div className='Top'>

             <div className='Logo'>
                  <img src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/WhatsApp%20Image%202021-02-01%20at%2010.34.45%20AM.jpeg' alt='' width='10%' height='55%'/>
             </div>
             
             <div className='Socials'>
                 <AiFillInstagram className='Insta'/>
                 <AiFillLinkedin className='Linkedin'/>
                 <FaDiscord className='Discord'/>
                 <AiFillFacebook className='Facebook'/>
                 <AiFillGithub className='Github'/>
                 <AiFillTwitterCircle className='Twitter'/>               
             </div>

         </div>

         <div className='C1'>
         
             <div className='Nitr'>
                <img src='https://techsociety.nitrkl.ac.in/img/features/img1.png' alt='' width='60px' height='60px'/>
             </div>

             <div className='AboutNitr'>
                <h2>About NIT Rourkela</h2>
                 <p>With a total strength of around 7000 students, NIT Rourkela is one of the most coveted institutes for higher studies by future technocrats. With its lush green and humongous area, it indeed makes a pleasant campus impression.</p>
             </div>
   
         </div>
         <div className='C2'>

             <div className='DJ'>
                <img src='https://website.nitrkl.ac.in/images/diamond.jpeg' alt='' width='60px' height='60px'/>
             </div>

             <div className='Aboutdj'>
                <h2>About Diamond Jubilee</h2>
                 <p>Established in the year 1961, NIT Rourkela celebrates its 60th anniversary this year. Through the years of the tireless striving of its administration, students, and all stakeholders, it has become a beacon of knowledge.</p>
             </div>

         </div>

        <div className='C3'>
              <ul>
                <ul>MLH Code of Conduct  </ul>
                <ul>-</ul>
                <ul>Terms and Conditions  </ul>
                <ul>-</ul>
                <ul>Privacy Policy  </ul>
                <ul>-</ul>
                <ul>Sponsor Us  </ul>
                <ul>-</ul>
                <ul>Join Us  </ul>
              </ul>
        </div>

        <div className='Love'>
              <h4>Architected with ❤️ by HackNITR Team</h4>
        </div>

        <div className='Bottomlogo'>
                <img src='https://repository-images.githubusercontent.com/202254077/9eca0080-c6f0-11e9-8b96-fc37b233c0d1'  alt='' width='50px' height='30px'/>
                <img src='https://opencodenitr.herokuapp.com/images/logo_plus_wordmark_white.png'  alt='' width='50px' height='30px'/>
                <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200908144657/How-to-Become-GitHub-Campus-Expert.jpg'  alt='' width='50px' height='30px'/>
                <img src='https://assets.hackclub.com/flag-standalone.png'  alt='' width='50px' height='30px'/>
        </div>
    </div>
    </>
  );
}

export default App;
