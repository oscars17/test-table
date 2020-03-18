<template>
    <div class="confirm-delete-modal">
        <div>
            Are you sure you want to <span :style="{'font-weight': 600}">delete item</span>?
        </div>
        <div class="action-buttons">
            <button @click="hideModal" class="common-button">
                Cancel
            </button>
            <button @click.stop="deleteProduct" class="selected-button">
                Confirm
            </button>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        name: "DeleteProductModal",
        methods:{
            ...mapActions([
                'deleteSingleProduct'
            ]),
            hideModal(){
                this.$emit('remove-can');
                this.$store.commit('hideDeleteModal');
            },
            async deleteProduct(){
                await this.deleteSingleProduct(this.$store.state.modals.deleteProductIndex);
                return this.hideModal();
            }
        }
    }
</script>

<style scoped>
    .confirm-delete-modal{
        position: absolute;
        background-color: white;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        width: 220px;
        z-index: 99999;
        right: -30px;
        bottom: -90px;
        padding: 16px;
    }

    .action-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-buttons > button{
        margin: 5px;
    }

</style>