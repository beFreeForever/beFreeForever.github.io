<template>
  <div>
    <section>
      <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                img-height="300px"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <b-carousel-slide 
        v-for="(item, i) in slides" :key="i"
        :caption="item.title"
        :text="item.text"
        :img-src="item.image"/>
    </b-carousel>
    </section>
    <section>
      <br>
      <br>
      <b-container>
            <b-row>
              <b-col sm="1">
                <b-button @click="slide2 > 1 ? slide2-- : null ">
                  left
                </b-button>
              </b-col>
              <b-col sm="10">
                <b-row v-for="j in 4" :key="j" v-if="slide2 === j">
                  <b-col sm="12" md="6" xl="4"
                    v-for="(item, i) in 3" :key="i">
                    <b-card 
                      :title="`Мстители ${i + j}`"
                      img-src="https://cs9.pikabu.ru/post_img/big/2018/02/27/11/151975827212991952.jpg"
                      img-alt="Мстители"
                      img-top
                      tag="article"
                      class="mb-2">
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <b-button variant="second" @click="$router.push('/movie')">Подробнее...</b-button>
                    </b-card>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="1">
                <b-button @click="slide2 < 4 ? slide2++ : null ">
                  right
                </b-button>
              </b-col>
            </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      slide2: 1,
      sliding2: null,

      slides: [
        {
          title: "title",
          text: "asdasdasd",
          image:
            "https://images.unsplash.com/photo-1525280008627-921852d87169?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=547e14d1a4046a1749ccb58fd888c7b7&auto=format&fit=crop&w=2134&q=80&h=500"
        },
        {
          title: "title",
          text: "asdasdasd",
          image:
            "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd180d123f5a072662e6f1cfb64bbde3&auto=format&fit=crop&w=2134&q=80&h=500"
        },
        {
          title: "title",
          text: "asdasdasd",
          image:
            "https://images.unsplash.com/photo-1525377411535-0cacd7ffe6fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fad61054be723285bf879a0fbf1c6350&auto=format&fit=crop&w=2134&q=80&h=500"
        },
        {
          title: "title",
          text: "asdasdasd",
          image:
            "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd180d123f5a072662e6f1cfb64bbde3&auto=format&fit=crop&w=2134&q=80&h=500"
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    onSlideStart2(slide) {
      this.sliding2 = true;
    },
    onSlideEnd2(slide) {
      this.sliding2 = false;
    }
  }
};
</script>

<style>
</style>
