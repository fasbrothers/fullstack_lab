import dribble from '../../assets/img/social_networks/dribble.svg';
import facebook from '../../assets/img/social_networks/facebook.svg';
import instagram from '../../assets/img/social_networks/instagram.svg';
import twitter from '../../assets/img/social_networks/twitter.svg';
import linkedin from '../../assets/img/social_networks/linkedin.svg';

const icons = [facebook, dribble, linkedin, instagram, twitter];

export const Footer = () => {
	return (
		<footer className='py-6 text-[#525F7F] text-center text-xs md:text-base border-t border-[#F0F0F0]'>
			<p>© DUGIMAIL. All rights reserved.</p>
			<p className='mb-4 mt-[19px]'>
				If you have any questions please contact us
				<span className='text-[#489DFF]'>sabrihakuli@outlook.com</span>
			</p>
			<div className='flex justify-center gap-x-2.5'>
				{icons.map((icon, index) => (
					<img key={index} src={icon} />
				))}
			</div>
		</footer>
	);
};
