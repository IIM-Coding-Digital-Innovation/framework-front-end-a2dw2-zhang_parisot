<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
import Emoji_3 from "/src/components/card/Emoji_3.vue";
import Thematique from "/src/components/card/Thematique.vue";
defineProps(['categorie'], ['abc'], ['numemoji'])
</script>

<template>
<div class="w-[298px] h-[355px] flex rounded-[20px] shadow-[#252120;]">
  <a href="#">
    <div class="w-[306] h-[222] flex bg-image1"> 
      <img alt="">
    </div>
    <h2 class="uppercase text-[10px] font-normal font-['Poppins']">{{ categorie }}</h2>
    <Thematique class="font-semibold font-['Poppins'] text-base not-italic leading-[22px]" />
    <Emoji_3 class="mb-0" />
  </a>
</div>
  
</template>
