<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import ContactUs from './components/ContactUs.vue'
import Header from './components/Header.vue';
import Title from './components/Title.vue';
import Analytics from './components/Analytics.vue';
import Banner from './components/Banner.vue';
import PictureIntro from './components/PictureIntro.vue';
import MainInfo from './components/MainInfo.vue';
import ServiceIcon from './components/ServiceIcon.vue';
import ServiceInfo from './components/ServiceInfo.vue';
import Wechat from './components/Wechat.vue';
import HomeBanner from './components/HomeBanner.vue';
import Outline from './components/Outline.vue';
import History from './components/History.vue';
import RealEstateIcon from './components/RealEstateIcon.vue';
import News from './components/News.vue';
import Inquiry from './components/Inquiry.vue';
</script>

<template>
  <div class="body">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <RouterView />
    </div>
    <div class="homeBanner">
      <HomeBanner />
    </div>
    <div class="banner">
      <Banner />
    </div>
    <div class="mainInfo">
      <MainInfo />
    </div>
    <div class="pictureIntro">
      <PictureIntro />
    </div>
    <div class="serviceInfo">
      <ServiceInfo />
    </div>
    <div class="outline">
      <Outline />
    </div>
    <div class="history">
      <History />
    </div>
    <div class="title">
      <Title />
    </div>
    <div class="analytics">
      <Analytics />
    </div>
    <div class="serviceIcon">
      <ServiceIcon />
    </div>
    <div class="wechat">
      <Wechat />
    </div>
    <div class="news">
      <News />
    </div>
    <div class="inquiry">
      <Inquiry />
    </div>
    <div class="contactUs">
      <ContactUs />
    </div>
    <div class="realEstateIcon">
      <RealEstateIcon />
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

.homeBanner {
  width: 100vw;
  height: 150vh;
}

.banner {
  width: 100vw;
  height: 60vh;
}

.mainInfo {
  width: 100vw;
  height: 70vh;
}

.pictureIntro {
  width: 100vw;
  height: 80vh;
}

.serviceInfo {
  width: 100vw;
  height: 30vh;
}

.outline {
  width: 100vw;
  height: 70vh;
}

.history {
  width: 100vw;
  height: 60vh;
}

.title {
  width: 12.66vw;
  height: 5.8vh;
}

.data {
  width: 15.52vw;
  height: 12.96vh;
}

.serviceIcon {
  width: 100vw;
  height: 60vh;
}

.wechat {
  width: 100vw;
  height: 60vh;
}

.news{
  width: 100vw;
  height: 50vh ;
}

.inquiry{
  width: 100vw;
  height: 100vh ;
}

.contactUs {
  width: 100vw;
  height: 40vh;
}

.realEstateIcon {
  width: 100vw;
  height: 40vh;
}

.footer {
  width: 100vw;
  height: 80vh;
}
</style>
