export const Card = ({ title, image, price }) => {
	return (
		<div className='px-2 pt-8 pb-4 w-full min-[600px]:w-1/2 lg:w-1/4 h-full'>
			<img
				src={image}
				alt={title}
				className='w-full h-full rounded-lg object-cover'
			/>
			<h4 className='mt-2.5 text-xl text-[#333]'>{title}</h4>
			<p className='mb-4 text-[#489DFF] font-medium'>${price}</p>
			<button className='py-4 px-[50px] text-[15px] font-bold text-white bg-[#489DFF] rounded-lg font-["Montserrat"]'>
				Buy
			</button>
		</div>
	);
};
