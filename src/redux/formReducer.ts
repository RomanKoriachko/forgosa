import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

export const formReducer = createSlice({
	name: 'formReducer',
	initialState,
	reducers: {
		setFormState: (state, action) => {
			return action.payload;
		},
	},
});

export const { setFormState } = formReducer.actions;
export default formReducer.reducer;
