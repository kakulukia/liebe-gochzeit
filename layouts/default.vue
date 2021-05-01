<template lang="pug">
  div.page
    nuxt
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Inspire', icon: 'lightbulb', to: { name: 'inspire' } }
      ]
    }
  }
}
</script>

<style lang="sass">
body
  background: #aaa
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

.page
  background: white
  width: 100vw
  max-width: 400px
  height: 100vh

</style>
