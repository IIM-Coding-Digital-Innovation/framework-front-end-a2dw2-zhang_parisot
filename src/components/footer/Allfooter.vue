<script setup>
import footerBot from "/src/components/footer/footerBot.vue";
import footerTop from "/src/components/footer/footerTop.vue";
defineProps()
</script>

<template>
    <section class="bg-[#0A0909] w-[1440px] h-[477px] mt-[400px] text-[#FFFFFF]">
        <img class=" flex pl-[80px] pt-[102px] pb-[42px]"  src="img/header/header_logo.png" alt="logo Skillday">
        <footerTop/>
        <footerBot/>
    </section>
</template>

<style scoped>

</style>
