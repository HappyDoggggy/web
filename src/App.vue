<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import ContactUs from './components/ContactUs.vue'
import Header from './components/Header.vue';
import Title from './components/Title.vue';
import Data from './components/Data.vue';
</script>

<template>
  <div class="body">
    <div class="header">
      <Header />
    </div>
    <div class="title">
      <Title />
    </div>
    <div class="data">
      <Data />
    </div>
    <!-- <div class="content">
      <RouterView />
    </div> -->
    <div class="contactUs">
      <ContactUs />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>

</template>

<style scoped lang="scss">
.body {
  margin: 0 auto;
}

.header {
  width: 100vw;
  height: 7.87vh;
}
.title{
  width: 12.66vw;
  height: 5.8vh;
}
.data{
  width: 15.52vw;
  height: 12.96vh;
}
.footer {
  width: 100vw;
  height: 80vh;
}

.contactUs {
  height: 40vh;
  width: 100vw;
}
</style>
