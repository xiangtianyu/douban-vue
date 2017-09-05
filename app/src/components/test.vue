<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">
  import api from './../api/index'
  export default {
    data () {
      return {
        data: '',
        author: 'xty'
      }
    },
    mounted: function () {
      api.getCityList(48).then(function (data) {
        data;
      })
    }
  }
</script>

<style>
</style>
