import React from 'react';
import './footer.css';

const Footer = () =>{
    return(<div className='bottomnavbar'>
		<div className='navbarcontainer'>
			<div className='navbarrow1'>
				<div className='navrow1left'><img className='navbarlogo' src='https://eldaas.com/wp-content/uploads/2021/07/eldaas_logo.png' /></div>
				<div className='navrow1right'>
					<div className='navcontacts'>
						<div><img className='navbarcalllogo' src='https://vicpd.ca/wp-content/uploads/2019/12/call-for-service.png' /></div>
						<div className=''>
							<div className='navcompotxt1'>Call us</div>
							<div className=''>+19842039494 (USA)</div>
							<div className=''>+919739696999 (INDIA)</div>
						</div>
					</div>
					<div className='navcontacts'>
						<div><img className='navbarcalllogo' src='https://img.favpng.com/8/11/23/email-computer-icons-internet-stock-photography-illustration-png-favpng-G3Ux0r6TQb61cKYtCzZ6dDJQF.jpg' /></div>
						<div className=''>
							<div className='navcompotxt1'>Send us an e-mail</div>
							<div className=''>sales@eldaas.com</div>
						</div>
					</div>
					<div className='navcontacts'>
						<div><img className='navbarcalllogo' src='https://img.myloview.com/murals/time-icon-vector-from-basic-ui-concept-thin-line-illustration-of-time-editable-stroke-time-linear-sign-for-use-on-web-and-mobile-apps-logo-print-media-700-217721531.jpg' /></div>
						<div className=''>
							<div className='navcompotxt1'>Office Timings</div>
							<div className=''>Mon - Fri: 9am - 6pm</div>
						</div>
					</div>
				</div>
			</div>
			<div className='navrow1bottomborder'></div>
			<div className='navbarrow2'>
				<div className='navbarrow2title'>ELDAAS
					<div className='navbarrow2text1'>About Us</div>
					<div className='navbarrow2text'>News</div>
					<div className='navbarrow2text'>Blogs</div>
					<div className='navbarrow2text'>elAlt</div>
					<div className='navbarrow2text'>elCONNECT</div>
					<div className='navbarrow2text'>Join Us</div>
				</div>
				<div className='navbarrow2title'>PRODUCTS
					<div className='navbarrow2text1'>elSoMs</div>
					<div className='navbarrow2text'>el-RADARS</div>
					<div className='navbarrow2text'>RF & uWave</div>
					<div className='navbarrow2text'>D-FENCE</div>
					<div className='navbarrow2text'>Di-COM</div>
					<div className='navbarrow2text'>IR Temp Sensor</div>
				</div>
				<div className='navbarrow2title'>SERVICES
					<div className='navbarrow2text1'>Embedded Design</div>
					<div className='navbarrow2text'>Firmware Design</div>
					<div className='navbarrow2text'>RF & uWave Design</div>
					<div className='navbarrow2text'>Semiconductor</div>
					<div className='navbarrow2text'>Cloud Solutions</div>
				</div>
				<div className='navbarrow2title'>el-SoMs
					<div className='navbarrow2text1'>elSoM - i500</div>
					<div className='navbarrow2text'>elSoM - SDR</div>
					<div className='navbarrow2text'>elSoM - 5CG</div>
					<div className='navbarrow2text'>elSoM - 5EG</div>
				</div>
				<div className='navbarrow2title'>SUPPORT
					<div className='navbarrow2text1'>Customer Support</div>
					<div className='navbarrow2text'>Purchase Now</div>
					<div className='navbarrow2text'>Design Services Support</div>
					<div className='navbarrow2text'>Technical Support</div>
				</div>
				<div className='footerlastcolumn'>
					<div className='subscribe'>Subscribe To Our Newsletter</div>
					<div className='footerinput'>
						<input 
						className='nameinput'
						placeholder='Full Name'/>

						<input 
						className='emailinput'
						placeholder='Email'/>
					</div>
					<button>Subscribe</button>
					<div className='follow'>Follow Us On Social Media</div>
					<div>
						<img className='navbarsocial' src='https://static.wixstatic.com/media/aa039b_de4fa389d6ae4ec0806ba0b3c5a6f611~mv2.png/v1/fill/w_65,h_66,al_c,q_95/aa039b_de4fa389d6ae4ec0806ba0b3c5a6f611~mv2.webp' />
						<img className='navbarsocial' src='https://static.wixstatic.com/media/aa039b_c620c88ed6a044f3917bb94c54b63456~mv2.png/v1/fill/w_61,h_65,al_c,q_95/aa039b_c620c88ed6a044f3917bb94c54b63456~mv2.webp' />
						<img className='navbarsocial' src='https://static.wixstatic.com/media/aa039b_bfd35180a88540f594b3f43237096646~mv2.png/v1/fill/w_75,h_69,al_c,q_95/aa039b_bfd35180a88540f594b3f43237096646~mv2.webp' />
						<img className='navbarsocial' src='https://static.wixstatic.com/media/aa039b_f65e75f8aacd4c9689c02d18e0d728ea~mv2.png/v1/fill/w_79,h_68,al_c,q_95/aa039b_f65e75f8aacd4c9689c02d18e0d728ea~mv2.webp' />
						<img className='navbarsocial' src='https://static.wixstatic.com/media/aa039b_2a7c3ff4d4244867834d21376157420b~mv2.png/v1/fill/w_80,h_73,al_c,q_95/aa039b_2a7c3ff4d4244867834d21376157420b~mv2.webp' />
					</div>
				</div>
			</div>
			<div className='navbarrow3'>
				<div className='navbarrow3left'>
					<div className=''>Copyright @ ELDAAS - 2021-22</div>
					<div className=''>All rights reserved</div>
				</div>
				<div className='navbarrow3right'>
					<div className=''>Terms</div>
					<div className=''>Policy</div>
					<div className=''>Support</div>
					<div className=''>Legal</div>
					<div className=''>Sitemap</div>
				</div>
			</div>
		</div>
        </div>);
}
export default Footer;
