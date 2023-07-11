<template>
    <div class="py-20">
        <bilingual-item v-for="verse in verses" :key="verse" :verse="verse"></bilingual-item>
    </div>
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