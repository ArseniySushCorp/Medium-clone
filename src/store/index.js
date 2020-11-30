import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/Auth'
import feed from '@/store/modules/Feed'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		auth,
		feed
	}
})
