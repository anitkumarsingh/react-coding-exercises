import { INCREAMENT, INCREAMENT_BY, DECREAMENT, RESET } from './types';

export const increament = () => ({ type: INCREAMENT });
export const decreament = () => ({ type: DECREAMENT });
export const increamentBy = (amt) => ({ type: INCREAMENT_BY, payload: amt });
export const reset = () => ({ type: RESET });
