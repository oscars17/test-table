<template>
    <div class="table-ui-wrap">
        <div class="flexbox-row table-ui-header">
            <h1>Table UI</h1>
            <div class="spacer"></div>
            <loading />
        </div>
        <div class="table-ui-body" v-if="$store.state.products.initLoading === false"
        :class="[$store.state.products.loading ? 'disabled' : '']"
        >
            <div class="flexbox-row" :style="{'height': '60px'}">
                <sorting />
                <div class="spacer"></div>
                <multiple-delete-button />
                <pagination :style="{'margin-left': '12px'}" />
                <column-selection />
            </div>
            <div>
                <item-list>

                </item-list>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemList from "./ItemList/ItemList";
    import Pagination from "./Pagination/Pagination";
    import Sorting from "./Sorting/Sorting";
    import ColumnSelectionButton from "./Buttons/ColumnSelectionButton";
    import MultipleDeleteButton from "./Buttons/MultipleDeleteButton";
    import Loading from "./Animations/Loading";

    export default {
        components:{
            MultipleDeleteButton,
            'item-list': ItemList,
            'pagination': Pagination,
            'sorting': Sorting,
            'column-selection': ColumnSelectionButton,
            'loading': Loading,
        },
        async created(){
            await this.fetchInitialData();
        },
        methods:{
            async fetchInitialData(){
                return this.$store.dispatch('getProductList');
            }
        },
    }
</script>

<style>
    .table-ui-header{
        border-bottom: 2px solid #EDEDED;
    }
    .table-ui-wrap{
        width: 1200px;
        margin: auto;
    }
    .disabled{
        opacity: 60%;
        pointer-events: none;
    }
    button:focus {outline:0;}

</style>