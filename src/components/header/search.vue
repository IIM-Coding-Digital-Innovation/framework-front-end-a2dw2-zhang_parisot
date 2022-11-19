<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>

defineProps()
</script>

<template>
    <div class="flex justify-center items-center">
        <div class="shadow-search flex flex-col xl:flex-row justify-center items-center mx-4 my-16 w-[343px] h-[190px] bg-white rounded-[30px] lg:m-0 xl:mt-2 xl:w-[1122px] xl:h-[105px]">
            <div class="flex flex-row items-center px-6 py-0 gap-2.5 w-[299px] h-[56px] bg-[#F3EDFB] rounded-[30px] xl:w-[842px] xl:mr-8">
                <p class="w-[287px] h-[22px] font-['Poppins'] font-normal text-base leading-[22px] ml-6 flex justify-start items-center text-[#0A0909] xl:hidden xl:mr-96 xl:ml-12 ">Quelle formation recherch..</p>
                <p class="w-[287px] h-[22px] font-['Poppins'] font-normal text-base leading-[22px] flex justify-start items-center text-[#0A0909] max-xl:hidden xl:mr-96 xl:ml-12 ">Quelle formation recherchez-vous ?</p>
                <img src="img/header/header_search.png" alt="search">
            </div>
            <div class="flex flex-row justify-center items-center py-[12px] px-[16px] gap-2.5 w-[299px] h-[56px] mt-4 bg-[#F3EDFB] rounded-[30px] xl:mt-0 xl:w-[187px]">
                <p class="w-[44px] h-[22px] font-['Poppins'] font-normal text-base leading-[22px] flex items-center ml-6 mr-[159px] text-[#0A0909] xl:mr-6 xl:ml-6">Filtrer</p>
                <img src="img/header/arrow_bottom.png" alt="bottom arrow">
            </div>
        </div>
    </div>
</template>

<style scoped>
.shadow-search {
    @apply shadow-shadow-search;
}

</style>
