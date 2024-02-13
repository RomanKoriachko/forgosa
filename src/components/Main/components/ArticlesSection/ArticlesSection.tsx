import React from 'react';

import './ArticlesSection.scss';

type Props = {};

const ArticlesSection = (props: Props) => {
	const articlesArr = [
		{
			img: 'article-img-1.jpg',
			title: 'Price Volatility and Forecasting',
			text: 'Fuel trading, a cornerstone of global commerce, is a realm where volatility is not just a possibility but an inherent characteristic. The complex interplay of geopolitical events, market sentiment, and...',
		},
		{
			img: 'article-img-2.jpg',
			title: 'Environmental Regulations and Sustainable Practices',
			text: 'As the world sets its sights on a low-carbon future, environmental regulations are becoming increasingly pivotal in shaping the energy market. In this blog, we unpack the intricacies...',
		},
		{
			img: 'article-img-3.jpg',
			title: 'Global Energy Market Trends and Analysis',
			text: 'In an ever-evolving world, the energy sector stands as a dynamic force, influenced by an intricate web of factors ranging from geopolitical shifts to technological advancements ...',
		},
		{
			img: 'article-img-4.jpg',
			title: 'Supply Chain Resilience and Geopolitical Risks',
			text: "Welcome to web site Fogrosa™, where we don't just navigate the energy market; we anticipate and overcome the challenges posed by supply chain disruptions and geopolitical uncertainties...",
		},
	];

	return (
		<section className='articles-section'>
			<div className='container'>
				<p className='articles-subtitle'>
					Interesting information about our field
				</p>
				<p className='articles-title'>What's the Latest?</p>
				<div className='articles-wrapper row'>
					{articlesArr.map((article, i) => (
						<div key={i} className='article-item'>
							<div className='article-image-wrapper'>
								<img
									src={`../../../../../images/${article.img}`}
									alt='article'
								/>
							</div>
							<div className='article-text-wrapper'>
								<p className='article-title'>{article.title}</p>
								<p className='article-text'>{article.text}</p>
								<div className='row article-link'>
									<p>Read More</p>
									<div className='article-link-img'></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArticlesSection;
