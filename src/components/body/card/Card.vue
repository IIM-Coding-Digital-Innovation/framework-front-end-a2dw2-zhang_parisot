<script setup>
import Emoji_3 from "/src/components/body/card/Emoji_3.vue";
import Thematique from "/src/components/body/card/Thematique.vue";
defineProps(['categorie', 'abc', 'numemoji'])
</script>

<template>
<div class="shadow-card w-[298px] h-[355px] flex rounded-[20px] ">
  <a href="#">
    <div class="w-[306] h-[222] flex bg-image1"> 
      <img :src="abc" />
    </div>
    <h2 class="uppercase text-[10px] font-normal font-['Poppins']">{{ categorie }}</h2>
    <Thematique class="font-semibold font-['Poppins'] text-base not-italic leading-[22px]" />
    <Emoji_3/>
  </a>
</div>
  
</template>

<style scoped>
.shadow-card {
  @apply shadow-shadow-card;
}

</style>
