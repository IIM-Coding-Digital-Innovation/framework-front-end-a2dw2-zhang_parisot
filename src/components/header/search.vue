<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>

defineProps()
</script>

<template>
<div class="shadow-search absolute w-[1122px] h-[105px] left-[159px] top-[409px]  bg-white rounded-[30px]"></div>


<div class="absolute w-[1059px] h-[56px] left-[191px] top-[433px]">
    <div class="absolute w-[842px] h-[56px] ">
        <div class="absolute w-[40px] h-[42.11px] left-[790px] top-[7px] "><img src="img/header/header_search.png" alt="search"></div>
        <div class="flex flex-row items-center px-6 py-0 gap-2.5 w-[842px] h-[56px] bg-[#F3EDFB] rounded-[30px]">
            <div class="flex flex-row items-start py-3 pl-4 pr-0 gap-2.5 w-[383px] h-[46px] rounded-[8px] ">
                <p class="w-[287px] h-[22px] righ-[550px] font-['Poppins'] font-normal text-base leading-[22px] text-[#0A0909]">Quelle formation recherchez-vous ?</p>
            </div>
        </div>
    </div>
    <div class="absolute w-[187px] h-[56px] left-[872px]">
        <div class="box-border flex flex-row justify-center items-center p-0 gap-4 w-[187px] h-[56px] bg-[#F3EDFB] rounded-[30px]">
            <div class="flex flex-row items-start py-3 pl-6 pr-4 gap-2.5 w-[84px] h-[46px] rounded-[8px]">
                <p class="w-[44px] h-[22px] font-['Poppins'] font-normal text-base leading-[22px] text-[#0A0909]">Filtrer</p>
            </div>
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