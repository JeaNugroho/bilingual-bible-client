<template>
    <div v-if="verses.length === 0" class="flex justify-content-center align-content-center h-full" style="padding-top: 35vh;">
        <p v-if="!isLoading" class="text-3xl">
            <i class="pi pi-map" style="font-size: 2rem;" />{{ ' to LB3 =)' }}
        </p>
        <ProgressSpinner v-else />
    </div>
    <ScrollPanel v-else class="reading-page">
        <div class="grid">
            <div class="col-1"></div>
            <div class="col-10">
                <bilingual-item v-for="verse in verses" :key="verse" :verse="verse"></bilingual-item>
            </div>
            <div class="col-1"></div>
        </div>
    </ScrollPanel>
</template>

<script>
import ScrollPanel from 'primevue/scrollpanel'
import BilingualItem from '../components/BilingualItem.vue'
import ProgressSpinner from 'primevue/progressspinner';

export default {
    components: {
        BilingualItem,
        ScrollPanel,
        ProgressSpinner
    },
    props: ['isLoading', 'verses']
}
</script>

<style>
.reading-page {
    flex: 1 1 auto;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    /* height: 100%; */
}
</style>