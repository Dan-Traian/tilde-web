
<script setup>
import PageContainer from '../PageContainer.vue';
import Button from '../../core/Button.vue';

</script>

<template>
  <PageContainer class="heroSection">
    <PageContainer class="demoSection flex flex-col gap-3">
      <div class="heroPage w-full flex gap-3 items-center ">
        <p class="text-display-md font-bold text-primary">Meet Tilde, the trusted psychologist in Copenhagen</p>
        <div class="w-1/2 flex flex-col gap-2">
          <p class="text-md regular text-secondary ">Experience professional therapy with a minimalistic design</p>
          <div class="flex gap-1"> <Button></Button>
            <Button></Button>
          </div>
        </div>

      </div>
      <img
        src="https://library.relume.io/__assets/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg"
        alt="" class="w-full">

    </PageContainer>

  </PageContainer>
</template>
<style scoped>
.heroPage {
  min-height: 300px;
}
.heroSection {
  min-height: 500px;
}
</style>