<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
import Emoji_3 from "/src/components/card/Emoji_3.vue";
import Thematique from "/src/components/card/Thematique.vue";
defineProps()
</script>

<template>
<div class="w-[298px] h-[355px] flex rounded-[20px] cardshadow">
  <a href="#">
    <div class="w-[306] h-[222]"> 

    </div>
    <p></p>
    <Thematique/>
    <Emoji_3/>
  </a>
</div>
  
</template>
