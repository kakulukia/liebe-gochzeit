<template lang="pug">
  div
    main.section(v-touch:swipe="swipe")

      img.geschenk(src="~/assets/liebendgern-hochzeit-geschenk.png")
      img.headline(src="~/assets/liebendgern-hochzeitsgeschenk-typo.png")

      .header Die liebendgern
        br
        | Flitterwochen-Paarbox
      b-carousel.slides(:autoplay="false" v-model="carousel" :arrow="false" @click="swipe")
        b-carousel-item.slide(v-for="(slide, i) in slides" :key="i")
          img(:src="require(`~/assets/${slide.image}`)")
          .texte(:class="{'has-text-centered': slide.price}" v-touch:swipe="swipe" @click="swipe")
            img.swiper(src="~/assets/liebendgern-paarbox-swipe.png" @click="swipe")
            .price(v-if="slide.price") {{slide.price}}
            .text1 {{slide.text1}}
            .text2 {{slide.text2}}

      form(action="https://www.liebendgern.de/cart/add" method="post" enctype="multipart/form-data")
        input(type="hidden" name="id" value="1837669")
        input(type="hidden" id="quantity" name="quantity" value="1")
        button.order(
          type="submit" name="add") IN DEN WARENKORB

    .logo-container
      a(href="https://www.liebendgern.de")
        img.logo(src="~/assets/liebendgern-logo.png")
</template>

<style lang="sass">

$carousel-indicator-color: #3F8694
$petrol: #008896
$orange: #FF6B39

main.section
  padding: 1em 7% 3rem
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  min-height: calc(100vh - 62px)
  padding-top: 0.5em

.geschenk
  margin: 0 auto
  width: 40px

.headline, .geschenk, .slides
  margin-bottom: 0.5em

.header
  background: $petrol
  color: white
  text-transform: uppercase
  text-align: center
  width: 100%
  padding: 0.5em
  line-height: 18px
  font-weight: 400

.swiper
  float: right
  width: 30px

.slides
  width: 100%
  min-height: 390px
  height: 60vh
  max-height: 430px
.slide
  background: white

.text1, .text2
  hyphens: auto
  line-height: 18px
  white-space: pre-line
  font-weight: 500

.text1
  color: #606060

.text2
  font-weight: 300
  margin-top: 1em

.price
  line-height: normal
  font-size: 30px
  font-weight: 700

.texte
  padding-top: 16px
  &.has-text-centered
    position: relative
    .swiper
      position: absolute
      right:0
      top: 16px
      float: none
    .text1
      font-weight: 500
    .text2
      font-weight: 500

button.order
  border: 2px solid $orange
  background: white
  color: $orange
  padding: 0.5em
  display: block
  width: 100%
  font-weight: 500
  line-height: 36px
  cursor: pointer
  &:hover
    background: $orange
    color: white

form
  width: 100%

.logo-container
  background: #f5f5f5
  display: flex
  justify-content: center
  padding: 20px 0 10px
  a
    text-align: center
.logo
  width: 100px


</style>

<script>
export default {
  methods: {
    swipe (direction) {
      if (this.swiping) {return}
      if (typeof direction === 'object') {direction = undefined}
      if (direction && direction === 'right') {this.carousel -= 1}
      else if (!direction || (direction && direction === 'left')) {this.carousel += 1}
      this.swiping = true
      setTimeout(()=>{this.swiping = false}, 100)
    },
    next () {
      console.log(this.carousel)
      this.carousel += 1
    }
  },
  data(){
    return {
      carousel: 0,
      swiping: false,
      slides: [
        {
          image: 'liebendgern-hochzeit-philipp.png',
          text1: 'Du suchst nach einem außergewöhnlich tollen Hochzeitsgeschenk?',
          text2: 'Mit der liebendgern PAARBOX landest du mit Sicherheit einen Volltreffer!'
        },
        {
          image: 'liebendgern-paarbox-hochzeit-ringe.png',
          text1: 'Verschenke schöne Momente, die dem Hochzeitspaar noch mehr Nähe bringen.',
          text2: 'Die liebendgern PAARBOX beinhaltet 18 einzigartig und liebevoll gestaltete Inspirationskarten.',
        },
        {
          image: 'liebendgern-paarbox-kartenset.png',
          text1: 'Der Clou? Das Hochzeitspaar weiß nicht, welches gemeinsame Abenteuer auf sie wartet.',
          text2: 'Jede Karte ist zunächst verschlossen. Gemeinsam wird eine Karte ausgesucht, geöffnet und gespielt.',
        },
        {
          image: 'liebendgern-anna-holfeld-paartherapeutin.png',
          text1: 'Entwickelt von der Paartherapeutin Anna Holfeld.',
          text2: 'Seit über 15 Jahren begleitet und coacht Anna Paare und Einzelpersonen. Sorgfältig hat sie hier Fragen ausgewählt - für ein abwechslungsreiches, gemeinsames Erlebnis.',
        },
        {
          image: 'liebendgern-paarbox-karte-geoeffnet.png',
          text1: 'Ein guter Preis für ein hochwertiges Produkt.',
          text2: '42 Euro, weil 42 die Antwort auf alles ist. ;-)\n Damit kostet eine Karte weniger als ein Cappuccino und das ganze Set ungefähr soviel wie ein „kompletter“ Kinobesuch für Zwei.',
        },
        {
          image: 'liebendgern-paarbox-geoeffnet.png',
          price: '42 €',
          text1: 'inkl. MwSt.\nversandkostenfrei innerhalb\n Deutschlands',
          text2: 'Lieferzeit ca. 4-5 Werktage',
        }
      ]
    }
  }
}
</script>