import store from '../index';


const state = {
    page: 0,
    elementsPerPage:{
        selectedValue: 10,
        list: [10, 15, 20]
    },
    pageRange: [0, 10],
};

const getters = {
    lastPage: () => {
        return Math.ceil(store.state.products.productList.length / state.elementsPerPage.selectedValue)
    }
};

const mutations = {
    setElementsPerPageIndex(state, payload){
        state.page = 0;
        state.elementsPerPage = Object.assign({}, state.elementsPerPage, {selectedValue: payload});
    },
    getNextPage(state){
        if (state.pageRange[1] < store.state.products.productList.length){
            state.page += 1;
        }
    },
    getPreviousPage(state){
        if (state.page > 0){
            state.page -=1;
        }
    },
    setPageRange(state){
        const elementsPerPage = state.elementsPerPage.selectedValue;
        const backward = elementsPerPage * state.page;
        const onward = backward + elementsPerPage;
        return state.pageRange = [backward, onward];

    },
    resetPage(state){
        state.page = 0;
    },
};

export default {
    getters: getters,
    state: state,
    mutations: mutations,
}