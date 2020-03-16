const columnList = [
    {
        name: 'product',
        addition: '(100g serving)',
        selected: true,
        colWidth: '20%'
    },
    {
        name : 'calories',
        addition: '',
        selected: true,
        colWidth: '10%'
    },
    {
        name: 'fat',
        addition: '(g)',
        selected: true,
        colWidth: '10%',
    },
    {
        name: 'carbs',
        addition: '(g)',
        selected: true,
        colWidth: '10%',
    },
    {
        name: 'protein',
        addition: '(g)',
        selected: true,
        colWidth: '10%',
    },
    {
        name: 'iron',
        addition: '(%)',
        selected: true,
        colWidth: '10%',
    }

];


const state = {
    columnList,
    sortColumn: {},
};

const mutations = {
    setSortColumn(state, col) {
        return state.sortColumn.name === col.name ? state.sortColumn = {} : state.sortColumn = col;
    },
    toggleAllColumns(state, status){
        state.columnList.forEach((col, i)=>{
            const updatedCol = Object.assign({}, col, {selected: status});
            state.columnList.splice(i, 1, updatedCol);
        })
    }
};

const actions = {};

const getters = {
    selectedColumns: state =>{
        return state.columnList.filter(x=>x.selected);
    },
    selectedColumnsWithoutSort: state =>{
        return state.columnList.filter(x=>x.selected && x.name !== state.sortColumn.name);
    },
};

export default {
    getters: getters,
    state: state,
    mutations: mutations,
    actions: actions,
}