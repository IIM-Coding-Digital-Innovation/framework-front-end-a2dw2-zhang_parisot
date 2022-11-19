<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
import navbar from "/src/components/header/navbar.vue";
import description from "/src/components/header/description.vue";
import search from "/src/components/header/search.vue";
defineProps()
</script>

<template>
    <div class="h-[517px] w-full left-0 top-0 bg-[url(img/header/header_bg.png)]  bg-center bg-cover lg:h-[464px]">
        <navbar/>
        <description/>
        <search/>
    </div>
</template>
