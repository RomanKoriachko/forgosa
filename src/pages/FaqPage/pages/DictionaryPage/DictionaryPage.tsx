import React, { useEffect, useState } from 'react';

import { PageTitle } from '../../../../common';
import { LinksSlider, SearchComponent } from '../../components';
import Flicking from '@egjs/react-flicking';

import './DictionaryPage.scss';

type Props = {};

const DictionaryPage = (props: Props) => {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

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

	const arr = [
		{
			title: 'Aaaaa1',
			content:
				'Aorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut recusandae atque explicabo, placeat laborum? Laboriosam aliquam asperiores minus atque consectetur. Doloremque maiores quod numquam laudantium consectetur doloribus rerum quae.',
		},
		{
			title: 'Aaaaa2',
			content:
				'Aorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut recusandae atque explicabo, placeat laborum? Laboriosam aliquam asperiores minus atque consectetur. Doloremque maiores quod numquam laudantium consectetur doloribus rerum quae.',
		},
		{
			title: 'Aaaaa3',
			content:
				'Aorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut recusandae atque explicabo, placeat laborum? Laboriosam aliquam asperiores minus atque consectetur. Doloremque maiores quod numquam laudantium consectetur doloribus rerum quae.',
		},
		{
			title: 'Aaaaa4',
			content:
				'Aorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut recusandae atque explicabo, placeat laborum? Laboriosam aliquam asperiores minus atque consectetur. Doloremque maiores quod numquam laudantium consectetur doloribus rerum quae.',
		},
		{
			title: 'Aaaaa5',
			content:
				'Aorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut recusandae atque explicabo, placeat laborum? Laboriosam aliquam asperiores minus atque consectetur. Doloremque maiores quod numquam laudantium consectetur doloribus rerum quae.',
		},
		{
			title: 'Bbbbb1',
			content:
				'Borem, ipsum dolor sit amet consectetur adipisicing elit. Non inventore in architecto. Mollitia rerum doloribus at enim quasi ipsum beatae libero sapiente fuga! Magnam consequatur, ducimus voluptatibus adipisci ab dignissimos?',
		},
		{
			title: 'Bbbbb21',
			content:
				'Borem, ipsum dolor sit amet consectetur adipisicing elit. Non inventore in architecto. Mollitia rerum doloribus at enim quasi ipsum beatae libero sapiente fuga! Magnam consequatur, ducimus voluptatibus adipisci ab dignissimos?',
		},
		{
			title: 'Bbbbb3',
			content:
				'Borem, ipsum dolor sit amet consectetur adipisicing elit. Non inventore in architecto. Mollitia rerum doloribus at enim quasi ipsum beatae libero sapiente fuga! Magnam consequatur, ducimus voluptatibus adipisci ab dignissimos?',
		},
		{
			title: 'Bbbbb4',
			content:
				'Borem, ipsum dolor sit amet consectetur adipisicing elit. Non inventore in architecto. Mollitia rerum doloribus at enim quasi ipsum beatae libero sapiente fuga! Magnam consequatur, ducimus voluptatibus adipisci ab dignissimos?',
		},
		{
			title: 'CAPEX',
			content:
				'Capital expenditures. Carbon capture and storage (CCS)  Process by which carbon dioxide emissions are captured and removed from the atmosphere and then stored, normally via injection into a secure underground geological formation',
		},
		{
			title: 'Carbon dioxide equivalents (CO2e)',
			content:
				'The quantity that describes, for a given mixture and amount of greenhouse gas, the amount of CO2 that would have the same global warming potential (GWP) when measured over a specified timescale (generally 100 years).',
		},
		{
			title: 'Carbon intensity',
			content:
				'The quantity of greenhouse gas emissions associated with producing an intermediate or final product. For the oil and gas industry, carbon intensity is commonly expressed in units of Tonnes CO2e per product volume (e.g. Tonnes CO2e/bbl or Tonnes CO2e/MCF).',
		},
	];

	// Search

	const [searchInput, setSearchInput] = useState<string>('');

	function handleChangeSearchInput(e: React.FormEvent<HTMLInputElement>) {
		setSearchInput(e.currentTarget.value);
	}

	const filtredArr = arr.filter((element) => {
		const title = element.title.toLowerCase();
		const content = element.content.toLowerCase();
		const search = searchInput.toLowerCase();
		const startsWithActiveLetter = title.startsWith(activeLetter.toLowerCase());
		const containsSearchInput =
			title.includes(search) || content.includes(search);
		return startsWithActiveLetter && containsSearchInput;
	});

	return (
		<div className='faq-page dictionary-page'>
			<PageTitle image='faq-bg-img.png' title='FAQ' subtitle='dictionary' />
			<LinksSlider index={4} />
			<div className='tablet-tab-buttons-container'>
				<Flicking bound={true} align='prev'>
					{alphabet.map((letter) => (
						<div
							onClick={() => onSymbolClick(letter)}
							className={`${
								letter === activeLetter ? 'tab-button active' : 'tab-button'
							}`}
							key={letter}
						>
							{letter}
						</div>
					))}
				</Flicking>
			</div>
			<div className='container'>
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
							<div
								onClick={() => onSymbolClick(letter)}
								className={`${
									letter === activeLetter ? 'tab-button active' : 'tab-button'
								}`}
								key={letter}
							>
								{letter}
							</div>
						))}
					</div>
					{filtredArr.length < 1 ? (
						<div className='no-matches-result'>
							<p>no matches</p>
						</div>
					) : (
						<div>
							{filtredArr.map((element, i) => (
								<div className='dictionary-item' key={i}>
									<p className='dictionary-item-title'>{element.title}</p>
									<p className='dictionary-item-text'>{element.content}</p>
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
