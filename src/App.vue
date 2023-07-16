<template>
  <div v-scroll-lock class="app">
    <nav-bar></nav-bar>
    <div class="main-area">
      <reading-page :verses="verses"></reading-page>
    </div>
    
    <!-- <footer-panel></footer-panel> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ReadingPage from './pages/ReadingPage.vue'
// import FooterPanel from './components/FooterPanel.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ReadingPage
    // FooterPanel
  },
  data() {
    return {
      retrievedVerses: {
        english: ['It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          , 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'],
        indo: ['Itu bertahan tidak hanya lima abad, tetapi juga lompatan ke pengaturan huruf elektronik, yang pada dasarnya tidak berubah.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Itu dipopulerkan pada 1960-an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker termasuk versi Lorem Ipsum.'
          , 'Sudah menjadi fakta lama bahwa pembaca akan terganggu oleh konten halaman yang dapat dibaca saat melihat tata letaknya.']
      }
    }
  },
  computed: {
    verses() {
      const englishVerses = this.retrievedVerses.english
      const indoVerses = this.retrievedVerses.indo
      if (englishVerses.length 
        !== indoVerses.length) 
      {
        throw new Error('Arrays must have the same length');
      }
      
      const result = [];

      for (let i = 0; i < englishVerses.length; i++) {
        const obj = {
          english: englishVerses[i],
          indo: indoVerses[i]
        };

        result.push(obj);
      }

      return result;
    }
  }
}
</script>

<style>
  .app {
    /* min-height: 100vh; */
    height: 100vh;
    color: #514d47;
    display: flex;
    flex-direction: column;
  }

  .main-area {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  p {
    margin-top: 0.7em;
    margin-bottom: 0.7em;
  }

  /* .max-w-screen {
    max-width: calc(100vw * (16 / 9));
  } */
</style>
