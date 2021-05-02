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
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700&display=swap')
@import "~bulma/sass/utilities/_all"

/* some customization. i.e */
$carousel-indicator-color: #707070

@import "~bulma"
@import "~buefy/src/scss/buefy"

body
  background: #aaa
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  color: #707070

body, button
  font-family: 'Work Sans', sans-serif
  font-size: 16px
  font-weight: 600

.page
  background: white
  width: 100vw
  max-width: 400px
  height: 100vh

</style>
