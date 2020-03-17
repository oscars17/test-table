<template>
    <div class="flexbox-row">
        <span class="sorting-pretext">
            Sorting by:
        </span>
        <ul class="flexbox-row" v-if="$store.getters.selectedColumnsWithoutSort.length !== 0">
            <li class="sorting-list-item" v-for="col in $store.getters.selectedColumns"
                @click="setSortColumn(col)"
                :key="col.name">
                <button :class="[col.name === $store.state.sorting.sortColumn.name ?
                'selected-button' : 'text-button']">
                    {{formatName(col)}}
                </button>
            </li>
        </ul>
        <span v-else class="no-cols-msg">
            Не выбрано ни одной колонки
        </span>
    </div>
</template>

<script>
    export default {
        name: "Sorting",
        computed:{
            sortColumn(){
                return this.$store.state.sorting.sortColumn;
            }
        },
        watch:{
            sortColumn(data){
                if (data.name === undefined){
                    return this.$store.commit('orderProductList', 'id');
                }
            }
        },
        methods:{
            setSortColumn(col){
                const payload = {
                    name: col.name,
                    addition: col.addition,
                };
                this.$store.commit('orderProductList', payload.name);
                return this.$store.commit('setSortColumn', payload);
            },
            formatName(col){
                return col.name[0].toUpperCase() + col.name.slice(1) + ' ' + col.addition;
            },
        },
    }
</script>

<style scoped>
    .sorting-pretext{
        font-weight: 600;
        text-align: right;
    }
    .sorting-list{
        display: flex;
        flex-direction: row;
        vertical-align: center;
    }

    .sorting-list-item {
        margin-left: 16px;
        cursor: pointer;
    }

    .no-cols-msg{
        margin-left: 16px;
        font-weight: 600;
    }
</style>