<template>
    <div class="select-column-modal">
        <ul>
            <li class="flexbox-row check-wrap">
                <div class="check-col">
                    <label class="checkbox-container">
                        <input type="checkbox" v-model="checkAll" />
                        <span class="checkmark check-col"></span>
                        <div :style="{'font-weight': 600 }" class="select-column-text">
                            Select all
                        </div>
                    </label>
                </div>
            </li>
            <li v-for="el in $store.state.sorting.columnList" :key="el.name" class="flexbox-row check-wrap">
                <div class="check-col">
                    <label class="checkbox-container">
                        <input type="checkbox" v-model="el.selected" />
                        <span class="checkmark check-col"></span>
                        <div class="select-column-text">
                            {{formatName(el)}}
                        </div>
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                checkAll: true,
            }
        },
        watch:{
            checkAll(status){
                return this.$store.commit('toggleAllColumns', status);
            }
        },
        name: "ColumnSelectionModal",
        methods:{
            formatName(col){
                return col.name[0].toUpperCase() + col.name.slice(1) + ' ' + col.addition;
            }
        }
    }
</script>

<style scoped>
    .select-column-modal{
        position: absolute;
        background-color: white;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        top: 40px;
        right: 20px;
        width: 240px;
        z-index: 99999;
    }

    .check-col{
        left: 17px;
        top: 5px;
    }

    .select-column-text{
        font-size: 14px;
        margin-left: 8px;
    }

    .check-wrap{
        height: 40px;
        width: 100%;
    }
</style>