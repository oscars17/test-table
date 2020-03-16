const state = {
    deleteProductIndex: null,
    deleteModal: false,
    columnsModal: false,

};

const mutations = {
    toggleColumnModal(state){
        state.columnsModal = !state.columnsModal;
    },
    toggleDeleteProductModal(state, payload){
        state.deleteModal && payload.status && payload.index === state.deleteProductIndex
            ? state.deleteModal = false : state.deleteModal = payload.status; state.deleteProductIndex = payload.index;
    },
    hideDeleteModal(state){
        state.deleteModal = false;
    }
};


export default {
    state: state,
    mutations: mutations,
}