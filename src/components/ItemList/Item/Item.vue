<template>
    <li class="flexbox-row product" :style="{'background-color': index % 2 ? '#f8f9fa' : 'white'}"
        @mouseenter='deleteButton=true' @mouseleave="deleteButton=false" @click="setCheck">
        <label v-if="noCols === false" class="checkbox-container" @click.prevent.stop="setCheck">
            <input type="checkbox" v-model="checked" />
            <span class="checkmark"></span>
        </label>
        <div :class="$store.state.sorting.sortColumn.name + '-col'">
            {{productData[this.$store.state.sorting.sortColumn.name]}}
        </div>
        <div class="flexbox-row">
            <div v-for="col in $store.getters.selectedColumnsWithoutSort" :key="col.name" :class="col.name + '-col'">
                {{productData[col.name]}}
            </div>
        </div>
        <div class="spacer"></div>
        <div v-if="noCols === false && deleteButton" :style="{'padding-right': '32px'}">
            <delete-button :index="index" />
        </div>
        <delete-product-modal
                @remove-can="deleteButton=false"
                v-if="$store.state.modals.deleteModal && index === $store.state.modals.deleteProductIndex" />
    </li>
</template>

<script>
    import DeleteButton from "../../Buttons/DeleteButton";
    import DeleteProductModal from "../../Modals/DeleteProductModal";

    export default {
        data(){
            return {
                deleteButton: false,
            }
        },
        name: "Item",
        props: ['productData', 'index'],
        components:{
            'delete-button': DeleteButton,
            'delete-product-modal': DeleteProductModal,
        },
        created(){
            const payload = {
                index: this.index,
                status: false,
            };
            this.$store.commit('setProductChecked', payload);
        },
        computed:{
            noCols(){
                return this.$store.getters.selectedColumnsWithoutSort.length === 0;
            },
            checked(){
                return this.$store.state.products.checkedProductList.indexOf(this.index) !== -1;
            }
        },
        methods:{
            setCheck(){
                const payload = {
                    index: this.index,
                    status: !this.checked,
                };
                this.$store.commit('setProductChecked', payload);
                this.$store.commit('setMultipleProductSelector', false);
            }
        }
    }
</script>

<style scoped>
    .product{
        height: 49px;
        position: relative;
        cursor: pointer;
    }

    .product:hover{
        background: rgba(0, 161, 30, 0.07) !important;
    }

</style>
