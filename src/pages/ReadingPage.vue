<template>
    <!-- <div class="card max-h-full"> -->
    <div class="card reading-page">
        <ScrollPanel style="width: 100%; height: 100%">
            <div class="grid">
                <div class="col-1"></div>
                <div class="col-10">
                    <bilingual-item v-for="verse in verses" :key="verse" :verse="verse"></bilingual-item>
                </div>
                <div class="col-1"></div>
            </div>
        </ScrollPanel>
    </div>
</template>

<script>
import ScrollPanel from 'primevue/scrollpanel'
import BilingualItem from '../components/BilingualItem.vue'

export default {
    components: {
        BilingualItem,
        ScrollPanel
    },
    props: ['verses']
}
</script>

<style>
.reading-page {
    flex: 1 1 auto;
    overflow-y: auto;
    /* height: 100%; */
}
</style>