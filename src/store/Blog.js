import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
	space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
	accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN
});

export function loadBlog() {
	return dispatch => {
		dispatch(actions.loadBlogRequest());
		return client.getEntries()
			.then(({ items }) => {
				dispatch(actions.loadBlogSuccess(items));
			})
			.catch(error => {
				console.log(error);
				// dispatch(actions.loadBlogFailure(err));
				dispatch(actions.loadBlogRequest(false));
			});
	};
}
