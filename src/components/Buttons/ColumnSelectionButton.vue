<template>
    <div class="column-selection-wrap">
        <button @click="toggleColumnModal" class="common-button">
            {{$store.getters.selectedColumns.length}} columns selected <i class="arrow down"></i>
        </button>
        <modal v-if="$store.state.modals.columnsModal" />
    </div>
</template>

<script>
    import ColumnSelectionModal from "../Modals/ColumnSelectionModal";

    export default {
        name: "ColumnSelectionButton",
        components:{
            'modal': ColumnSelectionModal,
        },
        methods:{
            toggleColumnModal(){
                return this.$store.commit('toggleColumnModal');
            }
        }
    }
</script>

<style scoped>
    .column-selection-wrap{
        position: relative;
        margin-left: 16px;

    }
</style>