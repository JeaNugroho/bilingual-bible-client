<template>
    <bilingual-item v-for="verse in verses" :key="verse" :verse="verse"></bilingual-item>
</template>

<script>
import BilingualItem from '../components/BilingualItem.vue'

export default {
    components: {
        BilingualItem
    },
    props: ['verses']
}
</script>

<style>
</style>