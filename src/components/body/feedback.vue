<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>

defineProps()
</script>

<template>
<div class="flex justify-center items-center">
    <div class="flex flex-col justify-center items-center mx-4 my-16 w-[343px] h-[300px] bg-[#F3EDFB] rounded-[20px] lg:w-[844px] lg:h-[256px] lg:mb-12">
        <div class="flex flex-col justify-center items-center text-center h-[280px] mx-4 lg:mx-0">
            <h1 class="gradient-text mt-8 w-[266px] font-['NeuzeitGro'] font-bold text-2xl leading-7 text-center tracking-[-.005em] lg:text-[#0A0909] lg:w-[407px] lg:h-[28px] lg:text-[30px] lg:leading-8 lg:mt-10">C’est votre dernier mot ?</h1>
            <p class="mx-4 mt-4 w-[342px] font-['Poppins'] font-normal text-base leading-[22px] text-center text-[#0A0909] lg:w-[407px] lg:h-[47px]">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center m-6 lg:mb-12">
            <div class="flex flex-row justify-center items-center py-[12px] px-[16px] gap-2.5 w-[180px] h-[56px] bg-[#8D4ED8] rounded-[30px] mb-4 lg:mr-6 lg:mb-0">
                <p class="w-[148px] h-[22px] font-['Poppins'] font-semibold text-base leading-[22px] flex justify-center items-center text-white">Je prends contact</p>
            </div>
            <div class="gradient-border flex flex-row justify-center items-center py-[12px] px-[16px] gap-2.5 w-[245px] h-[56px] rounded-[30px]">
                <p class="w-[217px] h-[22px] font-['Poppins'] font-semibold text-base leading-[22px] flex justify-center items-center text-[#0A0909]">Je télécharger le catalogue</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.shadow-feedback {
    @apply drop-shadow-shadow-feedback;
}
.gradient-border{
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(128, 212, 248, 1), rgba(141, 78, 216, 1), rgba(255, 106, 96, 1), rgba(252, 22, 22, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #F3EDFB inset;
}

@media (max-width: 1024px) { 
    .gradient-text{
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(128, 212, 248, 1), rgba(141, 78, 216, 1), rgba(255, 106, 96, 1), rgba(252, 22, 22, 1));
        background-clip: text;
        -webkit-text-fill-color: transparent; 
    }
}
</style>
