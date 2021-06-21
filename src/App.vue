<template>
  <div id="app">
    <sidebar/>
    <div id="main" class="main">
      <navTop/>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import navTop from './views/static/navTop'
import sidebar from './views/static/sidebar'

export default {
  name: 'app',
  components:{
    navTop, sidebar
  },
  data(){
    return{

    }
  },
  
}
</script>

<style scoped>

</style>

