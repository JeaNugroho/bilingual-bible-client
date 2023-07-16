<template>
    <!-- <div class="card relative z-2 pb-2 border-bottom-1"> -->
    <div class="card navbar">
        <!-- <Menubar :model="items" /> -->
        <Menubar>
            <template #start>
                <!-- <div> -->
                    <i class="pi pi-book ml-2 pr-1"></i>
                    <p>{{ 'Bilingual Bible' }}</p>
                <!-- </div> -->
            </template>
            <template #end>
                <prime-vue-button icon="pi pi-search" />
            </template>
        </Menubar>
    </div>
</template>

<script>
import Menubar from 'primevue/menubar';
// import Button from 'primevue/button';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Yo Bible =)',
                    icon: 'pi pi-fw pi-book'
                }
            ]
        };
    },
    components: {
        Menubar
    }
}
</script>

<style scoped>
.navbar {
    flex: 0 0 auto;
    position: relative;
    z-index: 2;
    /* padding-bottom: 0.5rem; */
}

i, p {
    display: inline;
}
</style>