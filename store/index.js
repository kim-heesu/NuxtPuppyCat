
export default {
	state: {
		modalState: {
			modalWrap: false,
		},
		showHeaderView: true,
	},
	mutations: {
		openModal (state, modalName) {
			state.modalState[modalName] = true
		},
		closeModal (state, modalName) {
			state.modalState[modalName] = false
		},
		checkHeader (state, boolean) {
			state.showHeaderView = boolean
		},
	},
	actions: {
		openModal ({ commit }, payload) {
			commit('openModal', payload)
		},
		closeModal ({ commit }, payload) {
			commit('closeModal', payload)
		},
		checkHeader ({ commit }, payload) {
			commit('checkHeader', payload)
		}
	}
}
