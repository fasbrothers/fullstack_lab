import { Card } from '../card';
import camera from '../../assets/img/product_images/camera.png';
import g_generator from '../../assets/img/product_images/g_generator.png';
import invoice_creator from '../../assets/img/product_images/invoice_creator.png';
import rubicon from '../../assets/img/product_images/rubicon.png';

const data = [
	{
		id: 1,
		title: 'RubIcon',
		price: 100,
		image: rubicon,
	},
	{
		id: 2,
		title: 'Camera',
		price: 200,
		image: camera,
	},
	{
		id: 3,
		title: 'G Generator',
		price: 1000,
		image: g_generator,
	},
	{
		id: 4,
		title: 'Invoice Creator',
		price: 100,
		image: invoice_creator,
	},
];

export const Main = () => {
	return (
		<main className='grow px-6 2xl:px-0'>
			<h3 className='mt-5 mb-[25px] text-2xl  min-[600px]:text-[30px] text-[#1C1E23]'>
				Popular wordpress plugins
			</h3>
			<div className='flex flex-wrap gap-y-[18px]'>
				{data.map(card => (
					<Card
						key={card.id}
						title={card.title}
						price={card.price}
						image={card.image}
					/>
				))}
			</div>
		</main>
	);
};
