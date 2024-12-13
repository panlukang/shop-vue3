//购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])

    const addCart = (goods) => {
        // 已有商品 count + 1
        // 没有商品直接添加
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++
        } else {
            cartList.value.push(goods)
        }
    }

    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }

    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    const allChected = computed(() => cartList.value.every((item) => item.selected))
    const checkCount = computed(() => cartList.value.reduce((a, c) => a + (c.selected ? c.count : 0), 0))
    const checkPrice = computed(() => cartList.value.reduce((a, c) => a + (c.selected ? c.count * c.price : 0), 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        allChected,
        allCheck,
        checkCount,
        checkPrice
    }
})