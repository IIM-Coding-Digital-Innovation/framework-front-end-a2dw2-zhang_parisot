<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
import navbar from "/src/components/header/navbar.vue";
import description from "/src/components/header/description.vue";
import search from "/src/components/header/search.vue";
defineProps()
</script>

<template>
    <div class="absolute w-[1440px] h-[464px] left-0 top-0"> <img src="src/img/header/header_bg.png" alt="header background">
        <navbar/>
        <description/>
        <search/>
    </div>
</template>
