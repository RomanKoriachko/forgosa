import React, { useEffect, useState } from 'react';

import { PageTitle } from '../../../../common';
import { LinksSlider, SearchComponent } from '../../components';
import { alphabet, dictionaryArr } from './dictionaryArr';
import Flicking from '@egjs/react-flicking';
import { Element, Link as NavPageLink } from 'react-scroll';

import './DictionaryPage.scss';

type Props = {};

const DictionaryPage = (props: Props) => {
	const [activeLetter, setActiveLetter] = useState<string>('A');

	function onSymbolClick(symbol: string) {
		setActiveLetter(symbol);
	}

	useEffect(() => {
		const buttons = document.querySelectorAll('.tab-button');
		buttons.forEach((button) => {
			button.classList.remove('active');
			if (button.textContent === activeLetter) {
				button.classList.add('active');
			}
		});
	}, [activeLetter]);

	// Search

	const [searchInput, setSearchInput] = useState<string>('');

	function handleChangeSearchInput(e: React.FormEvent<HTMLInputElement>) {
		setSearchInput(e.currentTarget.value);
	}

	const filtredArr = dictionaryArr.filter((element) => {
		const title = element.title.toLowerCase();
		const content = element.content.map((item) => item.toLowerCase());
		const search = searchInput.toLowerCase();
		const startsWithActiveLetter = title.startsWith(activeLetter.toLowerCase());
		const containsTitleSearchInput = title.includes(search);
		const containsContentSearchInput = content.some((item) =>
			item.includes(search)
		);
		return (
			startsWithActiveLetter &&
			(containsTitleSearchInput || containsContentSearchInput)
		);
	});

	return (
		<div className='faq-page dictionary-page'>
			<PageTitle
				image='faq-bg-img.jpg'
				title='knowledge base'
				subtitle='dictionary'
			/>
			<Element
				className='dictionary-page-scroll-anker'
				name='page-top'
			></Element>
			<LinksSlider index={4} />
			<div className='tablet-tab-buttons-container'>
				<Flicking bound={true} align='prev'>
					{alphabet.map((letter) => (
						<div key={letter}>
							<NavPageLink to='page-top' smooth={true} duration={700}>
								<div
									onClick={() => onSymbolClick(letter)}
									className={`${
										letter === activeLetter ? 'tab-button active' : 'tab-button'
									}`}
								>
									{letter}
								</div>
							</NavPageLink>
						</div>
					))}
				</Flicking>
				<div className='underline'></div>
			</div>
			<SearchComponent
				searchInput={searchInput}
				handleChangeSearchInput={handleChangeSearchInput}
			/>
			<div className='dictionary-page-container'>
				<div className='dictionary-container'>
					<div className='tab-buttons-container'>
						{alphabet.map((letter) => (
							<NavPageLink
								to='page-top'
								smooth={true}
								duration={700}
								key={letter}
							>
								<div
									onClick={() => onSymbolClick(letter)}
									className={`${
										letter === activeLetter ? 'tab-button active' : 'tab-button'
									}`}
								>
									{letter}
								</div>
							</NavPageLink>
						))}
					</div>
					{filtredArr.length < 1 ? (
						<div className='no-matches-result'>
							<p>no matches</p>
						</div>
					) : (
						<div>
							{filtredArr.map((element, i) => (
								<div
									className='dictionary-item'
									key={element.title[0] + element.content[0][0] + i}
								>
									<p className='dictionary-item-title'>{element.title}</p>
									{element.content.map((paragraph, i) => (
										<p className='dictionary-item-text' key={i}>
											{paragraph}
										</p>
									))}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DictionaryPage;
