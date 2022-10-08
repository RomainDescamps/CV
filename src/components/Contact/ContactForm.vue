<template>
  <div class="form-container">
    <form ref="form" autocomplete="off" @submit.prevent="sendMail">
      <input class="input" type="text" name="name" placeholder="Votre nom" required />
      <input class="input" type="email" name="email" placeholder="Votre adresse email" required />
      <textarea class="input" name="message" cols="30" rows="5" placeholder="Votre message" required />

      <div v-show="error != false" class="error-container">{{ error }}</div>
      <CustomButton text="Envoyer" />
    </form>
  </div>

  <LoadingSpinner v-show="isPending" />
  <Notification v-show="notificationState" :message="notificationMessage" />
</template>

<script setup>
import CustomButton from '../CustomButton.vue'
import LoadingSpinner from "../LoadingSpinner.vue";
import Notification from "../Notification.vue";
import emailjs from "@emailjs/browser";
import { ref } from "@vue/reactivity";

const form = ref(null);
const error = ref(false);
const isPending = ref(false);
const notificationState = ref(false);
const notificationMessage = "Message envoyé !";

const showNotification = () => {
  notificationState.value = true;
  setTimeout(() => {
    notificationState.value = false;
  }, 3000);
};

const sendMail = async () => {
  isPending.value = true;
  try {
    emailjs
      .sendForm("service_oxsuoiu", "template_v2js1p6", form.value, "3N53PkOmwjXu1VQYn")
      .then(() => {
        //reset form values
        form.value.reset();
        isPending.value = false;
        //show and hide notification after 2 seconds
        showNotification();
      });
  } catch (error) {
    (error.value = "Une erreur est survenue, veuillez réessayer"), error;
    isPending.value = false;
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  display: flex;
  justify-content: start;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;

    .input {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 0.5rem;
      margin-bottom: 1.5rem;

      &:focus {
        outline: none;
      }
    }

    .error-container {
      color: red;
      font-size: 0.8rem;
      margin-bottom: 1.5rem;
      text-align: center;
      font-style: italic;
    }
  }
}
</style>