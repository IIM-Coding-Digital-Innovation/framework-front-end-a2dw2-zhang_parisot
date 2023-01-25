<script setup>
defineProps()
</script>

<template>
    <div class="flex items-center justify-between pt-14 lg:pt-16 ">
        <div class="w-full h-5 bg-[url(img/header/header_logo.png)] bg-no-repeat ml-8 lg:ml-8 xl:ml-10 2xl:ml-24"></div>
        <div class="max-[1350px]:hidden ml-5 w-12 h-[22px] font-['Poppins'] font-normal text-base leading-[22px] text-[#FFFFFF]">Offres</div>
        <div class="max-[1350px]:hidden ml-5 w-[95px] h-[22px] font-['Poppins'] font-bold text-base leading-[22px] text-[#FFFFFF]">Formations</div>
        <div class="max-[1350px]:hidden ml-5 w-[91px] h-[22px] font-['Poppins'] font-normal text-base leading-[22px] text-[#FFFFFF]">Ressources</div>
        <div class="max-[1350px]:hidden ml-5 mr-96 w-[500px] h-[22px] font-['Poppins'] font-normal text-base leading-[22px] text-[#FFFFFF]">À propos</div>
        <div class="max-[1350px]:hidden flex flex-row justify-center items-center p-0 gap-6 w-[461px] h-[59px] ml-0 lg-0 2xl:ml-36 2xl:mr-24">
            <div class="flex flex-row justify-center items-center py-[19px] px-[24px] gap-2.5 w-[159px] h-[60px] bg-white/30 rounded-[100px]">
                <p class="w-[111px] h-[22px] font-['Poppins'] font-semibold text-base leading-[22px] flex justify-center items-center text-[#FFFFFF]">06 74 49 03 21</p>
            </div>
            <div class="flex flex-row justify-center items-center py-[12px] px-[16px] gap-2.5 w-[197px] h-[56px]  bg-white rounded-[30px]">
                <p class="w-[148px] h-[22px] font-['Poppins'] font-semibold text-base leading-[22px] flex justify-center items-center text-[#8D4ED8] ">Je prends contact</p>
            </div>
        </div>
        <div class="mr-4  2xl:hidden"><img src="./img/header/burger.png" alt=""></div>
    </div>
</template>