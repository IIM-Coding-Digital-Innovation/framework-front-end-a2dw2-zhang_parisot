<script setup>
import bloctxtfooter from "/src/components/footer/bloctxtfooter.vue";
defineProps()
</script>

<template>
<div class="flex flex-col lg:flex-row  lg:ml-[84px]">
    <div class="lg:w-[208px] h-[90px] mr-6">
        <p class="text-xs ml-4 mt-6 font-normal leading-[18px] font-['Poppins']">Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</p>
    </div>
    <div class="flex flex-col lg:flex-row">
        <bloctxtfooter title="Solutions" txt1="Développer les soft skills" txt2="Digitaliser les formations" txt3="Accompagner les déploiments" />
        <bloctxtfooter title="Formations" txt1="Toutes les formations" txt2="Télécharger le catalogue" txt3="" />
        <bloctxtfooter title="Informations" txt1="Nous rejoindre" txt2="Nous contacter" txt3="FAQ" />
    </div>
    
</div>
</template>
