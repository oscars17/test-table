<template>
    <button @click="deleteMultipleProducts" class="delete-button"
            :class="[checkedCounter ? 'selected-button' : 'common-button disabled']">
        Delete {{this.checkedCounter}}
    </button>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "MultipleDeleteButton",
        methods:{
            ...mapActions([
                'deleteProducts',
            ]),
            deleteMultipleProducts(){
                this.deleteProducts();
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
