import { INCREAMENT, INCREAMENT_BY, DECREAMENT, RESET } from '../Actions/types';

const initialState = {
	count: 0
};
export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREAMENT:
			return {
				...state,
				count: state.count + 1
			};
		case INCREAMENT_BY:
			return {
				...state,
				count: state.count + action.payload
			};
		case DECREAMENT:
			return {
				...state,
				count: state.count - 1
			};
		case RESET:
			return {
				...state,
				count: 0
			};
		default:
			return state;
	}
};
