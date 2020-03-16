<template>
    <div class="flex-row">
        <button @click.stop="setModal" class="text-button flex-row">
            <img src="https://img.icons8.com/ios/50/000000/delete.png" :style='{"height": "20px", "width": "20px"}'>
        </button>
    </div>
</template>

<script>
    export default {
        name: "DeleteButton",
        props: ['index'],
        components:{
        },
        methods:{
            setModal(){
                let payload = {
                    index: this.index,
                    status: true,
                };
                console.log(payload);
                return this.$store.commit('toggleDeleteProductModal', payload);
            }
        }
    }
</script>

<style scoped>

</style>