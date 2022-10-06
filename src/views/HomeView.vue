<template>
  <div class="view-wrapper">
    <div class="name-container">

    </div>

    <div class="name-container">
      <AnimatedName />
    </div>

    <div class="description-container">
      <Description />
    </div>

    <div class="see-more-container">
      <a href="https://www.linkedin.com/in/romain-descamps/" target="_blank"> <CustomButton text="Plus à propos de moi" /></a>
    </div>

    <div class="social-icons-container">

    </div>
  </div>
</template>

<script setup>
import AnimatedName from "../components/AnimatedName.vue";
import Description from "../components/Description.vue";
import CustomButton from "../components/CustomButton.vue";
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
.view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .name-container {
    display: flex;
    justify-content: start;
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: -9rem;
    }

    @media screen and (max-width: 375px) {
      width: 90%;
      margin-top: -2rem;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .see-more-container {
    display: flex;
    justify-content: start;
    width: 70%;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: 2rem;
    }

    @media screen and (max-width: 375px) {
      width: 90%;
      margin-top: 1.5rem;
    }
  }

  .social-icons-container {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: -3rem;
    width: 70%;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
      width: 90%;
      bottom: -5rem;
    }
  }
}
</style>
