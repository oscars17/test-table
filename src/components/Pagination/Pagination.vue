<template>
    <div class="pagination flexbox-row">
        <select v-model="selected" label="items per page" class="common-button">
            <option v-for="option in options" :key="option">
                {{option}} per page
            </option>
        </select>
        <div class="flexbox-row page-selection">
            <button @click="previousPage" class="flat-button common-button">
                <i class="arrow left"></i>
            </button>
            <div class="page-range">
                {{this.pageRange[0] + 1 + '-' + this.pageRange[1] + ' of ' + this.totalProducts}}
            </div>
            <button @click="nextPage" class="flat-button common-button">
                <i class="arrow right"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            page(){
                return this.$store.state.pagination.page;
            },
            options(){
                return this.$store.state.pagination.elementsPerPage.list;
            },
            pageRange(){
                return this.$store.state.pagination.pageRange;
            },
            totalProducts(){
                return this.$store.state.products.productList.length;
            },
            sortColumn(){
                return this.$store.state.sorting.sortColumn;
            },
            reversed(){
                return this.$store.state.products.reversed;
            },
            selected:{
                get(){
                    return this.$store.state.pagination.elementsPerPage.selectedValue + ' per page';
                },
                set(data){
                    const payload = parseInt(data.slice(0, 2));
                    this.$store.commit('setElementsPerPageIndex', payload);
                    return this.$store.commit('setPageRange');
                }
            },
        },
        methods:{
            previousPage(){
                return this.$store.commit('getPreviousPage');
            },
            nextPage(){
                return this.$store.commit('getNextPage');
            }
        },
        watch:{
            sortColumn(){
                return this.$store.commit('resetPage');
            },
            page(){
                this.$store.commit('setMultipleProductSelector', false);
                return this.$store.commit('setPageRange');
            },
            reversed(){
                return this.$store.commit('resetPage');
            }
        },
        name: "Pagination"
    }
</script>

<style scoped>
    .page-selection{
        margin-left: 16px;
    }
    .page-range{
        padding: 0 6px 0 6px;
        width: 94px;
        text-align: center;
    }

</style>