<template>
    <div class="item-list-wrap">
        <item-list-header />
        <ul>
            <item v-for="(product, j) in $store.getters.productListScope"
                  :productData="product"
                  :index="j"
                  :key="product.id">
            </item>
        </ul>
    </div>
</template>

<script>
    import Item from "./Item/Item";
    import ItemListHeader from "./ItemListHeader/ItemListHeader";

    export default {
        name: "ItemList",
        components:{
            'item': Item,
            'item-list-header': ItemListHeader,
        },
    }
</script>

<style>
    .product-col{
        width: 220px;
    }
    .calories-col, .fat-col, .carbs-col, .protein-col, .iron-col{
        width: 100px;
    }
    .item-list-wrap{
        background-color: white;
        border-radius: 2px;
    }
</style>