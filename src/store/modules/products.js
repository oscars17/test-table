import {deleteProducts, getProducts} from '../../../request';
import store from '../index';


const state = {
    productList: [],
    checkedProductList: [],
    loading: false,
    initLoading: true,
    multipleProductSelector: false,
    reversed: false,
};

const mutations = {
    setMultipleProductSelector(state, payload=undefined){
        payload === undefined
            ? state.multipleProductSelector = !state.multipleProductSelector
            : state.multipleProductSelector = payload;
    },
    reverseProductList(state){
        state.reversed = !state.reversed;
        state.productList = state.productList.reverse();
    },
    orderProductList(state, sortVal){
        state.productList = state.productList.sort((a, b)=>{
            if (a[sortVal] > b[sortVal]){
                return 1
            }
            else if (a[sortVal] < b[sortVal]){
                return -1;
            }
            return 0;
        });
        state.reversed = false;
    },
    setMultipleProductChecked(state, payload){
        state.checkedProductList = payload;
    },
    setProductChecked(state, payload){
        if (payload.status && state.checkedProductList.indexOf(payload.index) === -1){
            return state.checkedProductList.push(payload.index);
        }
        else{
            return state.checkedProductList.splice(state.checkedProductList.indexOf(payload.index), 1);
        }
    },
    deleteProducts(state){
        const pageRange = store.state.pagination.pageRange;
        const slicedProducts = state.productList.slice(...pageRange);
        let remainingProducts = [];
        for (let i = 0; i < slicedProducts.length; i++){
            if (state.checkedProductList.indexOf(i) === -1){
                remainingProducts.push(slicedProducts[i]);
            }
        }
        return state.productList.splice(...pageRange, ...remainingProducts);

    },
    deleteSingleProduct(state, index){
        let elIndex = store.state.pagination.pageRange[0] + index;
        state.productList.splice(elIndex, 1);
    }
};

const getters = {
    productListScope(){
        const pageScope = store.state.pagination.pageRange;
        return state.productList.slice(...pageScope);
    },
    checkedProductListCounter(){
        return state.checkedProductList.length;
    }
};

const actions = {
    async getProductList({state, dispatch}){
        try{
            state.productList = await getProducts();
            state.initLoading = false;
        }
        catch(e){
            const actionName = 'getProductList';
            return dispatch('handleProductsErrors', actionName);
        }
    },
    async deleteProductsRequest({dispatch}){
        state.loading = true;
        try{
            await deleteProducts();
            return state.loading = false;
        }
        catch (e) {
            const actionName = 'deleteProductsRequest';
            return dispatch('handleProductsErrors', actionName);
        }
    },
    async deleteProducts({dispatch, commit}){
        await dispatch('deleteProductsRequest');
        commit('deleteProducts');
        commit('setMultipleProductSelector', false);
    },
    async deleteSingleProduct({dispatch, commit}, index){
        await dispatch('deleteProductsRequest');
        commit('deleteSingleProduct', index);
        commit('setMultipleProductSelector', false);
    },
    async handleProductsErrors({dispatch}, actionName){
        return dispatch(actionName);
    },
};


export default {
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
}
