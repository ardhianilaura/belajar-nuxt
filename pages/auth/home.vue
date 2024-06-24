<template>
<div>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>

  <div class="mt-5">
    <h2>
      <a class="black--text" href="https://animeow.me/updated_anime">Recent Episodes</a>
    </h2>
    <div class="mt-3 trans-filter-btn">
      <a class="btn btn-danger btn-round btn-tag white--text" href="#sub-anime">
        Sub
      </a>
      <a class="btn btn-light btn-round btn-tag black--text" href="#dub-anime">
        Dub
      </a>
      <a class="btn btn-light btn-round btn-tag black--text" href="#chinese-anime">
        Chinese
      </a>
    </div>
    <div>
      <v-hover
        v-slot="{ hover }"
        open-delay="200"> 
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="270">
          <img
            class="white--text align-end"
            height="300px" width="270px"
            src="/wan-yu-zhi-wang.png">
            <v-card-title class="blue--text">
              Wan Yu Zhi Wang
            </v-card-title>
              <v-card-subtitle class="pb-0">
                SUB
              </v-card-subtitle>
                <v-card-text class="text--primary">
                  Ep 19 <br>
                  Genres : Action, Fantasy
                </v-card-text>
              <v-card-actions>
                <v-btn
                  color="orange"
                  text>
                    Play
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
    </div>
  </div>
</div>
</template>
<script>
  
import { useStore } from '@nuxtjs/composition-api'

export default {
  
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Meownime')
  },

  data () {
      return {
        items: [
          {
            src: '/hunterxhunter.jpg',
          },
          {
            src: '/attack-on-titan.jpg',
          },
          {
            src: '/jujutsu-kaisen.jpg',
          },
        ],
      }
    },
} 
</script>