<script setup>
import footerBot from "/src/components/footer/footerBot.vue";
import footerTop from "/src/components/footer/footerTop.vue";
defineProps()
</script>

<template>
    <section class="bg-[#0A0909] h-[578px] lg:h-[477px] text-[#FFFFFF]">
        <div class="2xl:ml-[200px]">
        <img class=" flex ml-4 pt-9 lg:pl-[80px] lg:pt-[102px] lg:pb-[42px]"  src="./img/header/header_logo.png" alt="logo Skillday">
        <footerTop/>
        <footerBot/>
    </div>
    </section>
</template>

<style scoped>

</style>
