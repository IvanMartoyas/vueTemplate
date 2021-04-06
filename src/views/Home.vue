<template>
  <div class="home">
    header 
    <Header></Header>
    <span>home</span>
    <input type="text" v-model="page">
    <button @click="send()">Следущая</button>
    pageCure: {{curePage || page}}
    {{router}}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {POSTS} from '@/API/router'


export default {
  name: 'Home',
  components: {
    // HelloWorld
    
  },
  data() {
    return {
      router: POSTS(),
      page: 3,
      app_name: this.$blogName
    }
  },
  mounted() {
    this.page = this.$store.getters.page;

    
    
  },
  beforeCreate: function() {
    
  } ,
  methods: {
    send(){
      this.$store.dispatch('updatePost', {name: "ivan", second: "kola"})
      // this.$store.dispatch('getPosts', ++this.page)
    }
  },
  computed: {
    curePage() {
      return this.$store.getters.page
    }
  },
  watch: {
    curePage(val) {
      this.page = this.curePage
    }
  }
}
</script>
