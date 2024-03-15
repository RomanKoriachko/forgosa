import React from 'react';

import './SearchComponent.scss';

type Props = {
	searchInput: string;
	handleChangeSearchInput(e: React.FormEvent<HTMLInputElement>): void;
};

const SearchComponent = ({ searchInput, handleChangeSearchInput }: Props) => {
	return (
		<div className='search-component'>
			<div className='container'>
				<div className='search-container'>
					<input
						className='search'
						type='text'
						placeholder='Write here'
						value={searchInput}
						onChange={handleChangeSearchInput}
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchComponent;
