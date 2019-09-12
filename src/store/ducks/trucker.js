import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action types and Creators
 */
const { Types, Creators } = createActions({
    loadTruckers: ['truckers'],
    addTrucker: ['trucker']
});

export const TruckerTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
    truckers: []
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOAD_TRUCKERS]: (state, { truckers }) => state.merge({ truckers }),
    [Types.ADD_TRUCKER]: (state, { trucker }) => state.merge({ truckers: [...state.truckers, trucker] }),
});
