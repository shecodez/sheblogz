import initialState from './../initialState';
import * as types from './types';

export default function blogReducer(state = initialState.blog, action) {
	switch (action.type) {
    case types.LOAD_BLOG_REQUEST:
      return {
        ...state,
        loading: action.isLoading
      }
		case types.LOAD_BLOG_SUCCESS:
			return {
				...state,
				posts: action.posts,
        loading: false
			};
		default:
			return state;
	}
}
