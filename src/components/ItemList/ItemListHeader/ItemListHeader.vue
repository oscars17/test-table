<template>
    <div class="flexbox-row item-list-header">
        <label v-if="$store.getters.selectedColumnsWithoutSort.length !== 0" class="checkbox-container">
            <input type="checkbox" v-model="$store.state.products.multipleProductSelector" />
            <span class="checkmark"></span>
        </label>
        <div v-if="sortColumn.name" @click="reverseProductList" :class="sortColumn.name + '-col'"
        class="sort-column column-name">
            {{formatName(sortColumn)}} <i class="arrow down"
                                          v-if="$store.state.products.reversed === false"></i>
            <i class="arrow up" v-else></i>
        </div>
        <ul class="flexbox-row">
            <li v-for="col in $store.getters.selectedColumnsWithoutSort"
                class="column-name"
                :key="col.name"
                :class="col.name + '-col'">
                {{formatName(col)}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ItemListHeader",
        computed:{
            sortColumn(){
                return this.$store.state.sorting.sortColumn;
            },
            selectedColumns(){
                return this.$store.getters.selectedColumns;
            }
        },
        methods:{
            reverseProductList(){
                this.$store.commit('reverseProductList');
            },
            formatName(col){
                return col.name[0].toUpperCase() + col.name.slice(1) + ' ' + col.addition;
            }
        },
        watch:{
            selectedColumns:{
                handler(data){
                    for (let i in data){
                        if (data[i] === this.sortColumn.name){
                            return;
                        }
                    }
                    return this.$store.commit('setSortColumn', this.sortColumn);
                },
                deep: true
            }
        },
    }
</script>

<style scoped>
    .item-list-header{
        border-bottom: 1px solid #EDEDED;
        height: 52px;
    }
    .sort-column{
        color: #00A11E;
        cursor: pointer;
    }
    .column-name{
        font-weight: 600;
    }
</style>
