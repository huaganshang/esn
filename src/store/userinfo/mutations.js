import * as types from './mutations_types'

module.exports = {
	[types.UPDATE_USERINFO](state, user) {
		state.userinfo = user.userinfo || {};
	},

	[types.REMOVE_USERINFO](state) {
		state.userinfo = {};
	},
};
