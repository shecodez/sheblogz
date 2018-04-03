import * as types from './types';

export function loadBlogRequest(isLoading = true) {
  return { type: types.LOAD_BLOG_REQUEST, isLoading }
}

export function loadBlogSuccess(post) {
	return { type: types.LOAD_BLOG_SUCCESS, post };
}
