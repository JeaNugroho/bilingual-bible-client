<template>
    <div class="columns-2 py-1">
        <div class="px-12 content-start">
            <p>{{ verse.english }}</p>
        </div>
        <div class="px-12 content-start">
            <p>{{ verse.indo }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['verse']
}
</script>

<style scoped>
p {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.1em;
  }
</style>