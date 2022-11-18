<script setup>
import Card from "/src/components/body/card/Card.vue";
import feedback from "/src/components/body/feedback.vue";
</script>

<template>
    <section class="mt-[606px]">
        <h2 class="ml-[80px] font-['NeuzeitGro']">LES PLUS POPULAIRES 🔥</h2>
        <div class="flex mr-[80px] mb-6 justify-end gap-5">
            <img src="/img/body/arrow_left.png" alt="">
            <img src="/img/body/arrow_right.png" alt="">
        </div>
        <section class="flex">
            <div class="ml-[80px]">
                <Card abc="/img/body/image_1.png" categorie="Management & Leadership" numemoji="3"/>
            </div>
            <div class="ml-[30px]">
                <Card abc="/img/body/image_2.png" categorie="Vente" />
            </div>
            <div class="ml-[30px]">
                <Card abc="/img/body/image_3.png" categorie="RH, QVT & DIVERSITÉ" numemoji="3"/>
            </div>
            <div class="mr-[80px] ml-[30px]">
                <Card  abc="/img/body/image_4.png" categorie="Thématique 1" />
            </div>
        </section>
    </section>    
    <section>
        <h2 class="ml-[80px] mb-[30px] font-['NeuzeitGro']">TOUTES LES FORMATIONS 🚀</h2>
        <section class="flex">
            <div class="ml-[80px]">
                <Card abc="/img/body/image_5.png" categorie="Thématique 1"/>
            </div>
            <div class="ml-[30px]">
                <Card abc="/img/body/image_6.png" categorie="Thématique 1" />
            </div>
            <div class="ml-[30px]">
                <Card abc="/img/body/image_7.png" categorie="Thématique 1" numemoji="3"/>
            </div>
            <div class="mr-[80px] ml-[30px]">
                <Card abc="/img/body/image_8.png" categorie="Thématique 1" />
            </div>
        </section>
    </section>
    <section class="flex">
        <div class="ml-[80px]">
            <Card abc="/img/body/image_9.png" categorie="Thématique 1"/>
        </div>
        <div class="ml-[30px]">
            <Card abc="/img/body/image_10.png" categorie="Thématique 1" />
        </div>
        <div class="ml-[30px]">
            <Card abc="/img/body/image_11.png" categorie="Thématique 1" numemoji="3"/>
        </div>
        <div class="mr-[80px] ml-[30px]">
            <Card abc="/img/body/image_12.png" categorie="Thématique 1" />
        </div>
    </section>
    <section class="flex">
        <div class="ml-[80px]">
            <Card abc="/img/body/image_13.png" categorie="Thématique 1"/>
        </div>
        <div class="ml-[30px]">
            <Card abc="/img/body/image_14.png" categorie="Thématique 1" />
        </div>
        <div class="ml-[30px]">
            <Card abc="/img/body/image_15.png" categorie="Thématique 1" numemoji="3"/>
        </div>
        <div class="mr-[80px] ml-[30px]">
            <Card abc="/img/body/image_16.png" categorie="Thématique 1" />
        </div>
    </section>
    <div class="flex justify-end mr-[80px] mt-[30px] gap-6 font-semibold font-['Poppins'] leading-[22px]  text-base items-center">
        <div class="border-[#FF6A60] rounded-full border-2 flex w-[36px] h-[36px] justify-center">
            <p class="text-2xl text-[#FF6A60]">1</p>
        </div>
        <div>
            <p>2</p>
        </div>
        <div>
            <p>3</p>
        </div>
        <div>
            <p>4</p>
        </div>
        <div>
            <p>...</p>
        </div>
        <div>
            <p>8</p>
        </div>
    </div>
    <feedback/>
</template>

