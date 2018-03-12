import {
  FETCH_BLOGS,
} from './../actionTypes';

export default function messages(state = [], action = {}) {
	switch (action.type) {
		case FETCH_BLOGS:
			return action.blogs;

		default:
			return state;
	}
}
