<template>
    <h1>About</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ex commodi
      perferendis! Fuga laboriosam quos, earum voluptatem asperiores saepe dolor.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ex commodi
      perferendis! Fuga laboriosam quos, earum voluptatem asperiores saepe dolor.
    </p>
    <div>{{data}}</div>
</template>

<script setup>

const {data} = await useFetch('/api/currency/GBP');

</script>

<style></style>
