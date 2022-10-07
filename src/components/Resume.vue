<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrapper" ref="document">
    <!-- Linkedin icon and download btn container -->
    <div class="navbar">
      <!-- Linkedin icon -->
      <a href="https://www.linkedin.com/in/romain-descamps/" target="_blank" class="linkedin-link"><i class="fa-brands fa-linkedin fa-xl"></i></a>

      <!-- Download btn -->
      <a href="https://www.linkedin.com/in/romain-descamps/" target="_blank"><CustomButton text="Télécharger" /></a>
    </div>
    <!-- Resume container -->
    <div class="resume-container">
      <!-- Side container -->
      <aside class="side-container">
        <div class="side-info-container">
          <router-link class="portfolio-link-container" to="/">
            <p class="portfolio-link">Site Web</p>
            <span class="portfolio-link-underline"></span>
          </router-link>

          <p class="location">Dunkerque, France</p>
          <p class="phone-number">07 70 38 84 69</p>

          <router-link class="mail-link-container" to="/contact">
            <p class="mail-link">r.descamps.pro@gmail.com</p>
            <span class="mail-link-underline"></span>
          </router-link>
        </div>

        <div class="core-tech-container">
          <h2 class="core-tech-title">Technologies :</h2>
          <ul class="core-skills-list" v-for="technologies in coreTechnologies" :key="technologies.name">
            <li>{{ technologies.name }}</li>
          </ul>
        </div>
        <div class="other-tech-container">
          <h2 class="other-tech-title">Autres compétences :</h2>
          <ul class="other-tech-list" v-for="technologies in otherTechnologies" :key="technologies.name">
            <li>{{ technologies.name }}</li>
          </ul>
        </div>

        <div class="languages-container">
          <h2 class="langauges-title">Langues :</h2>
          <ul class="langauges-list" v-for="language in languages" :key="language.name">
            <li>{{ language.name }}</li>
          </ul>
        </div>
      </aside>
      <div class="main-container">
        <div class="name-container">
          <h2 class="first-name">Romain</h2>
          <h2 class="last-name">Descamps</h2>
        </div>
        <div class="role-title-container">
          <p>{{ role }}</p>
        </div>

        <div class="description-container">
          <div class="about-me-container" v-for="about in aboutMe" :key="about">
            <p class="headline">{{ about.headline1 }}</p>
            <p class="headline">{{ about.headline2 }}</p>
            <p class="headline">{{ about.headline3 }}</p>
          </div>
        </div>

        <div class="divider"></div>
        <div class="work-experience-container">
          <div class="experience-title-container">
            <h2 class="experience-title">Expérience</h2>
            <span class="experience-title-underline"></span>
            <p class="experience-title-description">{{ experienceDescription }}</p>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">TGI Maritime Software</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">Ingénieur développement logiciels</h2>
              </div>
              <p class="work-experience-date">Depuis Avril 2022</p>
            </div>
            <div class="experience-title-container">
                Rendez-vous – Responsable d’application<br><br>
            </div>
            <div class="work-experience-description">
                le but de cette aplication est de prendre des rendez-vous pour des entrées et sorties de conteneur sur le terminal.
Cependant l’application ne se limite pas a cette fonctionalité, nous avons aussi une gestion des gates (porte d’entré/sortie de conteneur), des voies de circulation, des lieux et du planning pour le terminal en question.<br>
Technologies utilisées :
                <ul class="work-experience-tasks-list">
                    <li>VueJS</li>
                    <li>Java 8</li>
                    <li>Javascript</li>
                    <li>Spring</li>
                    <li>Hibernate</li>
                    <li>IBM DB2 iseries AS400</li>
                    <li>Git</li>
                    <li>Jenkins</li>
                    <li>Jira</li>
                </ul>
            </div>
            <div class="experience-title-container">
                <br>Yard Management – Responsable d’application<br><br>
            </div>
            <div class="work-experience-description">
Le Yard est une application de visualisation du parc d'un terminal qui regroupe plusieurs fonctionnalités, comme la gestion des secteurs sur le parc, 
la gestion des réservations d’un endroit sur le parc pour un type de conteneur ou un type d’escale, cette solution permet également
la gestion de nos engins (RTG, Cavalier, Stacker) sur parc, de suivre leurs cadence, la gestion des missions, créer des missions unitaire (changement d’allotissement d’un conteneur). 
<br>Technologies utilisées :
                <ul class="work-experience-tasks-list">
                    <li>Java 8</li>
                    <li>Javascript</li>
                    <li>Spring</li>
                    <li>Hibernate</li>
                    <li>IBM DB2 iseries AS400</li>
                </ul>
            </div>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Acssi</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">Ingénieur d'études et développement</h2>
              </div>
              <p class="work-experience-date">Juillet 2020 - Mars 2022</p>
            </div>
            <div class="work-experience-description">Misson chez Boulanger : Analyse, développement et conception d'une application servant à gérer l'activité du groupe 
                B'DOM et SOLVAREA. L'activité se présente sous forme de la gestion des clients, des intervenants, des prestations, des commandes, de la facturation 
                et de la planification des rendez-vous à travers un outil externe : Opti-Time. L'application repose sur une architecture en micro-services avec les 
                technologies suivantes :
                <ul class="work-experience-tasks-list">
                    <li>Angular</li>
                    <li>Java 8</li>
                    <li>Maven</li>
                    <li>Spring</li>
                    <li>Mybatis</li>
                    <li>PostgreSql</li>
                    <li>Sonar</li>
                    <li>TU Mockito/PowerMockito</li>
                    <li>Gitlab</li>
                    <li>Projet en méthode Agile</li>
                </ul>
                </div>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Unis</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">Alternance, Développement Java Junior</h2>
              </div>
              <p class="work-experience-date">Juin 2019 - Juillet 2020</p>
            </div>
            <div class="work-experience-description">
              Évolutions sur l’application de gestion des ressources internes de la société
                <ul class="work-experience-tasks-list">
                    <li>Travail en équipe de 8 alternants</li>
                    <li>Contacts réguliers avec les utilisateurs</li>
                    <li>Participation aux phases d’analyse</li>
                    <li>Développement de nouvelles fonctionnalités</li>
                    <li>Couverture de code (tests unitaires et d’intégration)</li>
                    <li>Participation à la phase de recette.</li>
                    <li>Participation à la phase de recette.</li>
                    <li>TU Mockito/PowerMockito</li>
                    <li>Gitlab</li>
                    <li>Projet en méthode Agile</li>
                </ul>
                Déploiements d’un service d’impression Jasper
                <ul class="work-experience-tasks-list">
                    <li>Création du projet</li>
                    <li>Intégration et déploiement continus via Docker et Jenkins</li>
                    <li>Mise en place d’un Repository privé Nexus</li>
                </ul>
            </div>
          </div>
        </div>
        <div class="projects-link-container">
          <div class="projects-link-title-container">
            <h2>Projets</h2>
            <span class="projects-link-title-underline"></span>
          </div>
          <div class="projects-link-description-container">
            <p class="projects-link-description">Une description de certains de mes travaux peuvent être consultés sur mon site :</p>
            <router-link class="projects-link-container" to="/projets">
              <p class="projects-link">Projets</p>
              <span class="projects-link-underline"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "../components/CustomButton.vue";

const coreTechnologies = [
  { name: "Java" },
  { name: "Vue.js" },
];
const otherTechnologies = [{ name: "Git" }];
const languages = [{ name: "Francais" }, { name: "English" }];

const role = "Ingénieur d'étude et développement";
const aboutMe = [
  {
    headline1: "Ligne 1",
    headline2: "Ligne 2",
    headline3: "Ligne 3",
  },
];
const experienceDescription = "Voici mon expérience professionel et les compétences que j'ai acquises pendant mon parcours.";
</script>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);

/* Colors */
$orange: #f97316;
$black: #000;
$white: #fff;
$light-grey: #808288;
$dark-grey: #474747;
$slate: #cbd5e134;
$light-blue: #0077b5;

/* Download btn transition */
@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65, 0, 0.076, 1)) {
  transition: $property $duration $ease;
}

/* Underline mixin */
@mixin underline($color: $orange) {
  height: 28px;
  position: absolute;
  border-bottom: 7px solid $color;
  margin-top: -4px;
  opacity: 0.4;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    margin-top: 4px;
    cursor: pointer;
  }
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $slate;
  overflow: auto;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 4rem;

    /*icon styling */
    i {
      font-size: 2rem;
      transition: all 0.3s ease;
      color: $black;

      &:hover {
        color: $orange;
      }
    }

    @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 1rem;
      padding-top: 2rem;
    }
  }

  .resume-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 3rem;

    @media screen and (max-width: 768px) {
      padding: 0;
      flex-direction: column;
    }
    .side-container {
      padding: 2rem;
      height: 100vh;
      width: 390px;
      position: relative;

    @media screen and (max-width: 768px) {
        
      }

      .side-info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .location,
        .phone-number {
          font-size: 1.1rem;
          color: $black;
          margin-bottom: 0.3rem;
          margin-top: 0.3rem;
          font-style: italic;
        }

        .portfolio-link-container,
        .mail-link-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-decoration: none;

          .portfolio-link,
          .mail-link {
            color: $black;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
          }

          .portfolio-link-underline {
            width: 80px;
            @include underline;
          }

          .mail-link-underline {
            width: 255px;
            @include underline;
          }
        }
      }
    }

    .core-tech-container,
    .other-tech-container,
    .languages-container {
      margin-top: 2rem;
      height: auto;
    }
  }

  .main-container {
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;

    .name-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      margin-top: 1rem;
      color: $black;

      .last-name {
        margin-left: 1rem;
      }

      h2 {
        font-size: 3rem;
        font-weight: bold;
        color: $black;

        @media screen and (max-width: 768px) {
          font-size: 2rem;
        }
      }
    }

    .role-title-container {
      margin-top: -2rem;
      width: 100%;

      p {
        font-size: 2rem;
        font-weight: 500;
        color: $dark-grey;
      }
    }

    .description-container {
      margin-top: 1rem;
      width: 100%;

      .about-me-container {
        .headline {
          font-size: 1.2rem;
          font-weight: 400;
          color: $light-grey;
          margin-bottom: 1rem;
        }
      }
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: $light-grey;
      margin-top: 2rem;
      margin-bottom: 2rem;
      opacity: 0.4;
    }

    .work-experience-container {
      width: 100%;
      padding-bottom: 1rem;

      .experience-title-container {
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }

        .experience-title-underline {
          width: 173px;
          height: 28px;
          position: absolute;
          border-bottom: 10px solid $orange;
          margin-top: 10px;
          opacity: 0.4;
          z-index: 2;
        }

        .experience-title-description {
          font-size: 1.2rem;
          color: $light-grey;
        }
      }

      .work-experience-block {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;

        .work-experience-header-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          margin-top: 1rem;
          color: $black;

          @media screen and (max-width: 768px) {
            flex-direction: column;
          }

          .work-experience-title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            margin-top: 1rem;
            color: $black;
            text-align: center;

            @media screen and (max-width: 768px) {
              flex-direction: column;
            }

            .work-experience-divider {
              width: 20px;
              height: 4px;
              background-color: $light-grey;
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
              border-radius: 5px;
              opacity: 0.4;
            }

            .work-experience-subtitle {
              color: $dark-grey;
              font-weight: 400;
            }
          }

          .work-experience-date {
            color: $dark-grey;
            font-weight: 400;

            @media screen and (max-width: 768px) {
              margin-bottom: 1rem;
            }
          }
        }

        .experience-title-container {
          font-size: 1.4rem;
          color: black;
          margin-top: -1rem;
        }

        .work-experience-description {
          font-size: 1.2rem;
          color: $light-grey;
          margin-top: -1rem;

          .work-experience-tasks-list {
            margin-top: 1rem;
            font-size: 1.1rem;
          }
        }
      }
    }

    .projects-link-container {
      padding-bottom: 2rem;

      .projects-link-title-container {
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }

        .projects-link-title-underline {
          width: 110px;
          height: 28px;
          position: absolute;
          border-bottom: 10px solid $orange;
          margin-top: 10px;
          opacity: 0.4;
          z-index: 2;
        }
      }

      .projects-link-description-container {
        font-size: 1.2rem;
        color: $light-grey;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        .projects-link-container {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 0.5rem;

          @media screen and (max-width: 768px) {
            margin-left: 0;
          }

          .projects-link {
            color: $black;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
          }

          .projects-link-underline {
            width: 70px;
            @include underline;
          }
        }
      }
    }
  }

  ul {
    list-style-type: square;
  }
}
</style>
