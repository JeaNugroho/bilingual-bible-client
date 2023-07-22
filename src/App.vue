<template>
  <div v-scroll-lock class="app">
    <nav-bar @searchEvent="onSearch" :navbarTitle="navbarTitle"></nav-bar>
    <div class="main-area">
      <reading-page :isLoading="isLoading" :verses="verses"></reading-page>
    </div>
    
    <!-- <footer-panel></footer-panel> -->
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue'
import ReadingPage from './pages/ReadingPage.vue'

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
        english: [],
        indo: []
      },
      isLoading: false,
      navbarTitle: 'Bilingual Bible'
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
  },
  methods: {
    async onSearch({ selectedEsvBook, selectedTbBook, selectedChapter }) {
      this.isLoading = true

      const baseUrl = 'http://localhost:5000'
      const completeUrl = `${baseUrl}/book/${selectedEsvBook}/chapter/${selectedChapter}`
      console.log(completeUrl)
      try {
        const response = await axios.get(completeUrl)

        this.retrievedVerses.english = response.data.data.esv
        this.retrievedVerses.indo = response.data.data.tb
        this.navbarTitle = `${selectedEsvBook} ${selectedChapter} / ${selectedTbBook} ${selectedChapter}`
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        this.isLoading = false
      }
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
