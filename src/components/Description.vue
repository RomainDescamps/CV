<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="description-wrapper">
    <div class="description-container">
      <p> Salut ! Je m'appelle Romain Descamps et je suis Ingénieur en étude et développement logiciel.
        Je suis passionné par l'informatique et le développement depuis ma jeunesse.
      </p>
    </div>

    <div class="sub-description-container">
      <p>
        Ayant acquis plusieurs 
        <router-link class="link" to="/resume">Compétences</router-link> au cours de mes différents <router-link class="link" to="/projets">Projets professionnels</router-link>. 
        Il ne faut pas hésiter a me 

        <router-link class="link" to="/contact">Contacter</router-link> ou à m'envoyer moi un email à :
        <a href="mailto:r.descamps.pro@gmail.com" class="link">r.descamps.pro@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script setup></script>


<style lang="scss" scoped>
/*Colors*/
$color-white: #fafafa;
$color-black: #000;
$color-light: #f4f1ee;

.description-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  p {
    font-size: 1.2rem;
    height: auto;
    width: 100%;
    margin: 1rem 0;

    @media screen and (max-width: 1200px) {
      font-size: 1rem;
      line-height: 35px;
    }

    @media screen and (max-width: 375px) {
      font-size: 1rem;
      line-height: 30px;
    }
  }

  .link {
    background-color: $color-light;
    padding: 0.2rem 0.7rem;
    border-radius: 5px;
    transition: background-color 0.2s linear;
    border: none;
    margin: 0.4rem 0;
    text-decoration: none;
    color: $color-black;

    &:hover {
      background-color: $color-black;
      cursor: pointer;
      color: $color-white;
    }
  }
}
</style>
