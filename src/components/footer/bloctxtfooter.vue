<script setup>
defineProps(['title', 'txt1' ,'txt2', 'txt3'])
</script>

<template>
<div class="ml-9 w-[292px]  text-sm font-semibold leading-[22px] font-['Poppins']">
    <h2 class="mb-4 opacity-40">{{title}}</h2>
    <p class="mb-2">{{txt1}}</p>
    <p class="mb-2">{{txt2}}</p>
    <p class="mb-2">{{txt3}}</p>
</div>
</template>
