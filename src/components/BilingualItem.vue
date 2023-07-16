<template>
    <div class="grid">
        <div class="col py-0 line-height-3">
            <p>{{ verse.english }}</p>
        </div>
        <div class="col py-0 line-height-3">
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