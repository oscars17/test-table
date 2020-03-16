<template>
    <button @click="deleteMultipleProducts" class="delete-button"
            :class="[checkedCounter ? 'selected-button' : 'common-button disabled']">
        Delete {{this.checkedCounter}}
    </button>
</template>

<script>
    export default {
        name: "MultipleDeleteButton",
        methods:{
            deleteMultipleProducts(){
                const payload = this.$store.state.products.checkedProductList;
                this.$store.dispatch('deleteProducts', payload);
            }
        },
        computed:{
            checkedCounter(){
                return this.$store.getters.checkedProductListCounter || ''
            }
        }
    }
</script>

<style scoped>
    .delete-button{
        width: 70px;
    }
</style>
