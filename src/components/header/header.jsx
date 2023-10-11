import logo from '../../assets/img/logo.png';

export const Header = () => {
	return (
		<header className='flex justify-center py-5 border-b border-[#F0F0F0]'>
			<img src={logo} alt='' />
		</header>
	);
};
