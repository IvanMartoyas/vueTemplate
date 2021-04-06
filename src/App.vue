<template>
  <div id="app">
    <Header></Header>
    <component :is="layout">
      <router-view/>
    </component>

  </div>
</template>
<script>
 import MainLayout from        '@/layouts/Main-layout'
 import Header from '@/components/Header/Header-1/Header'
export default {
  name: 'app',
  components: {
    MainLayout,
    Header
  },
  data() {
    return {

    }  
  },
  computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      },
  }
}
</script>
<style lang="scss">

</style>
