<template>
  <v-hover
    v-slot="{ hover }"
    open-delay="200"
  > 
    <v-card
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      class="mx-auto"
      max-width="270"
    >
      <v-img
        class="white--text align-end"
        height="300px"
        :src="film.image"
        :alt="film.original_title_romanised"
      >
    </v-img>
    <NuxtLink
      :to="film.id">
      <v-card-title class="blue--text">
        {{film.title}}
      </v-card-title>
    </NuxtLink>
    <v-card-subtitle class="pb-0">
      {{film.release_date}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{film.original_title}}</div>
      <div>{{film.original_title_romanised}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Play
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
</template>
<script>
export default {
    props: {
        film: {
            type: Object,
            default: () => {}
        }    
    }
}
</script>