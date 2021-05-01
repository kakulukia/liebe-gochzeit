<template lang="pug">
  section.section
    b-carousel
      b-carousel-item(v-for="(carousel, i) in carousels" :key="i")
        section(:class="`hero is-medium is-${carousel.color}`")
          .hero-body.has-text-centered
            h1.title {{carousel.text}}
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary' },
                { text: 'Slide 2', color: 'info' },
                { text: 'Slide 3', color: 'success' },
                { text: 'Slide 4', color: 'warning' },
                { text: 'Slide 5', color: 'danger' }
            ]
        }
    }
}
</script>