import {deleteProducts, getProducts} from '../../../request';
import store from '../index';


const state = {
    productList: [],
    checkedProductList: [],
    loading: false,
    initLoading: true,
    reversed: false,
    multipleProductSelector: false,
};

const mutations = {
    setMultipleProductSelector(state, payload){
        return state.multipleProductSelector = payload;
    },
    reverseProductList(state){
        state.multipleProductSelector = false;
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
    setProductChecked(state, payload){
        if (payload.status){
            return state.checkedProductList.push(payload.counter);
        }
        else{
            return state.checkedProductList.splice(state.checkedProductList.indexOf(payload.counter), 1);
        }
    },
    deleteProducts(state, payload){
        const pageEls = store.state.pagination.pageRange[0];
        while (payload.length !== 0){
            const index = payload.pop() + pageEls;
            state.productList.splice(index, 1);
        }
        state.multipleProductSelector = false;
    },
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
            return dispatch('getProductList');
        }
    },
    async deleteProducts({dispatch, commit}, payload){
        state.loading = true;
        try{
            await deleteProducts();
            commit('deleteProducts', payload);
            return state.loading = false;
        }
        catch (e) {
            return dispatch('deleteProducts', payload);
        }
    }
};


export default {
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
}
