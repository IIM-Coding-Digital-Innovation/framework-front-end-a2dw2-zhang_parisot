<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/card/Card.vue";
</script>

<template>
  <h2 class="ml-[80px] mb-[30px] font-['NeuzeitGro']">LES PLUS POPULAIRES 🔥</h2>
  <section class="flex">
    <div class="ml-[80px]">
      <Card categorie="Management & Leadership"/>
    </div>
    <div class="ml-[30px]">
      <Card categorie="Vente" />
    </div>
    <div class="ml-[30px]">
      <Card categorie="RH, QVT & DIVERSITÉ" numemoji="3"/>
    </div>
    <div class="mr-[80px] ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
  </section>
  <h2 class="ml-[80px] mb-[30px] font-['NeuzeitGro']">TOUTES LES FORMATIONS 🚀</h2>
  <section class="flex">
    <div class="ml-[80px]">
      <Card categorie="Thématique 1"/>
    </div>
    <div class="ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
    <div class="ml-[30px]">
      <Card categorie="Thématique 1" numemoji="3"/>
    </div>
    <div class="mr-[80px] ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
  </section>
  <section class="flex">
    <div class="ml-[80px]">
      <Card categorie="Thématique 1"/>
    </div>
    <div class="ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
    <div class="ml-[30px]">
      <Card categorie="Thématique 1" numemoji="3"/>
    </div>
    <div class="mr-[80px] ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
  </section>
  <section class="flex">
    <div class="ml-[80px]">
      <Card categorie="Thématique 1"/>
    </div>
    <div class="ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
    <div class="ml-[30px]">
      <Card categorie="Thématique 1" numemoji="3"/>
    </div>
    <div class="mr-[80px] ml-[30px]">
      <Card categorie="Thématique 1" />
    </div>
  </section>
  
</template>
