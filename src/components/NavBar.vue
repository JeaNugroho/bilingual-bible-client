<template>
        <!-- <Menubar :model="items" /> -->
        <Menubar class="navbar">
            <template #start>
                <i class="pi pi-book ml-2 pr-1"></i>
                <p>{{ navbarTitle }}</p>
            </template>
            <template #end>
                <prime-vue-button icon="pi pi-search" @click="isSearchModalVisible = true" />
                <Dialog v-model:visible="isSearchModalVisible" modal header="Search directory" :style="{ width: '50vw' }">
                    <!-- Search form begins here -->
                    <Dropdown v-model="selectedBook" :options="books" filter optionLabel="name" placeholder="Select a Book" class="w-full md:w-14rem mr-3 mt-2">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex align-items-center">
                                <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" style="width: 18px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex align-items-center">
                                <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" style="width: 18px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Dropdown>

                    <Dropdown v-model="selectedChapter" :options="chapters" :disabled="!selectedBook" filter optionLabel="name" placeholder="Select a Chapter" class="w-full md:w-14rem mr-3 mt-2">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex align-items-center">
                                <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" style="width: 18px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex align-items-center">
                                <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" style="width: 18px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Dropdown>
                    <!-- Search form ends here -->
                    <template #footer>
                        <prime-vue-button label="Cancel" icon="pi pi-times" @click="isSearchModalVisible = false" text />
                        <prime-vue-button label="Search" icon="pi pi-search" @click="onSearchClick" autofocus />
                    </template>
                </Dialog>
            </template>
        </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import { ESV_BOOKS, TB_BOOKS, MAX_CHAPTERS } from '../constants'

export default {
    data() {
        return {
            isSearchModalVisible: false,
            items: [
                {
                    label: 'Yo Bible =)',
                    icon: 'pi pi-fw pi-book'
                }
            ],
            selectedBook: null,
            books: [],
            selectedChapter: null,
            chapters: [],
        }
    },
    components: {
        Menubar,
        Dialog,
        Dropdown
    },
    created() {
        this.prepareBooksOption()
    },
    methods: {
        onSearchClick() {
            this.isSearchModalVisible = false
            this.$emit('searchEvent', { selectedEsvBook: ESV_BOOKS[this.selectedBook.id], selectedTbBook: TB_BOOKS[this.selectedBook.id], selectedChapter: parseInt(this.selectedChapter.name) })
        },
        prepareBooksOption() {
            const bilingualBooks = []
            for (let i in ESV_BOOKS) {
                const bilingualBook = {
                    id: i,
                    name: `${ESV_BOOKS[i]} / ${TB_BOOKS[i]}`
                }
                bilingualBooks.push(bilingualBook)
            }
            this.books = bilingualBooks
        }
    },
    props: ['navbarTitle'],
    watch: {
        selectedBook({ id: selectedBookId }) {
            this.selectedChapter = null

            const chapters = []
            for (let i = 0; i < MAX_CHAPTERS[selectedBookId]; i++) {
                chapters.push({ name: (i + 1).toString() })
            }

            this.chapters = chapters
        },
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