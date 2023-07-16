<template>
    <!-- <div class="card relative z-2 pb-2 border-bottom-1"> -->
    <div class="card navbar">
        <!-- <Menubar :model="items" /> -->
        <Menubar>
            <template #start>
                <i class="pi pi-book ml-2 pr-1"></i>
                <p>{{ 'Bilingual Bible' }}</p>
            </template>
            <template #end>
                <prime-vue-button icon="pi pi-search" @click="isSearchModalVisible = true" />
                <Dialog v-model:visible="isSearchModalVisible" modal header="Search directory" :style="{ width: '50vw' }">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <template #footer>
                        <prime-vue-button label="Cancel" icon="pi pi-times" @click="isSearchModalVisible = false" text />
                        <prime-vue-button label="Search" icon="pi pi-search" @click="isSearchModalVisible = false" autofocus />
                    </template>
                </Dialog>
                <prime-vue-button class="ml-2" icon="pi pi-envelope" />
            </template>
        </Menubar>
        
    </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import Dialog from 'primevue/dialog';

export default {
    data() {
        return {
            isSearchModalVisible: false,
            items: [
                {
                    label: 'Yo Bible =)',
                    icon: 'pi pi-fw pi-book'
                }
            ]
        }
    },
    components: {
        Menubar,
        Dialog
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