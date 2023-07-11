<template>
    <div class="columns-2 py-1">
        <div class="px-10">
            <p class="text-lg font-semibold">{{ verse.english }}</p>
        </div>
        <div class="px-10">
            <p class="text-lg">{{ verse.indo }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['verse']
}
</script>

<style>
</style>