<template>

    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex">
            <nuxt-link to="/" class="font-bold">Nuxt Dojo</nuxt-link>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
    </footer>

</template>

<script></script>

<style>
.router-link-exact-active {
    color: #12b488;
    font-weight: 600;
}
</style>
