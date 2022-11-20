<script setup>
defineProps(['title', 'txt1' ,'txt2', 'txt3'])
</script>

<template>
<div class="lg:ml-9 w-[292px]  text-sm font-semibold leading-[22px] font-['Poppins']">
    <h2 class="mb-4 pl-4 lg:pl-0 opacity-100 bg-opacity-20 lg:opacity-40 bg-[#F3EDFB] lg:bg-transparent w-[100vw]">{{title}}</h2>
    <img class="absolute ml-[90vw] mt-[-32px] lg:hidden" src="img/footer/arrow-bot.png" />
    <p class="mb-2 hidden lg:block">{{txt1}}</p> 
    <p class="mb-2 hidden lg:block">{{txt2}}</p>
    <p class="mb-2 hidden lg:block">{{txt3}}</p>
</div>
</template>
