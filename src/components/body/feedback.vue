<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>

defineProps()
</script>

<template>
<div class="absolute w-[844px] h-[256px] left-[298px] top-[2261px]  bg-[#F3EDFB] rounded-[20px]"></div>


<div class="shadow-feedback absolute w-[407px] h-[90px] left-[517px] top-[2290px]">
        <p class="absolute w-[407px] h-[28px] font-['NeuzeitGro'] font-bold text-[30px] leading-[34px] text-center tracking-[-.005em] text-[#0A0909]">C’est votre dernier mot ?</p>
        <p class="absolute w-[407px] h-[47px] top-[43px] font-['Poppins'] font-normal text-base leading-[22px] text-center text-[#0A0909]">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
</div>
<div class="absolute w-[448.5px] h-[56px] left-[496px] top-[2406px] ">
    <div class="flex flex-row justify-center items-center py-[12px] px-[16px] gap-2.5 absolute w-[180px] h-[56px] left-[calc(50% - 180px/2 - 134px)] bg-[#8D4ED8] rounded-[30px]">
        <p class="w-[148px] h-[22px] font-['Poppins'] font-semibold text-base leading-[22px] flex justify-center items-center text-white">Je prends contact</p>
    </div>
    <div class="test box-border flex flex-row justify-center items-center py-[12px] px-[16px] gap-2.5 absolute w-[245px] h-[56px] left-[200px]  rounded-[30px]">
        <p class="w-[170px] h-[22px] font-['Poppins'] font-semibold text-base leading-[22px] flex justify-center items-center text-[#0A0909]}">Télécharger le catalogue</p>
    </div>
</div>

</template>

<style scoped>
.shadow-feedback {
    @apply drop-shadow-shadow-feedback;
}
.test{
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(128, 212, 248, 1), rgba(141, 78, 216, 1), rgba(255, 106, 96, 1), rgba(252, 22, 22, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #F3EDFB inset;
}

</style>
