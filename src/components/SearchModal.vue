<template>
    <teleport to="body">
    <div class="card flex justify-content-center">
        <!-- <Button label="Show" icon="pi pi-external-link" @click="visible = true" /> -->
        <Dialog :visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <!-- <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template> -->
        </Dialog>
    </div>
    </teleport>
</template>

<script>
import { Dialog } from 'primevue/dialog'

export default {
    components: {
        Dialog
    },
    props: ['visible']
    // data() {
    //     return {
    //         visible: false
    //     };
    // }
};
</script>

<style></style>