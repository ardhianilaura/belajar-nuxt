<template>
<div class="list_film mt-5">
    <GhibliApi 
      v-for="film in films"
      :key="film.title"
      :film="film"
      />   
  </div>
</template>
<script>
import { useStore } from '@nuxtjs/composition-api'

export default {
    setup() {
        const store = useStore();
        store.commit("SET_PAGE_TITLE", "Ghibli List");
    },
    data() {
        return {
            films: []
        };
    },
    async fetch() {
        this.films = await fetch("https://ghibliapi.herokuapp.com/films").then(res => res.json());
    },
}
</script>
<style>
.list_film {
    --s: 150px; /* control the size */
    --g: 10px;  /* control the gap */
    
    display: grid;
    gap: var(--g);
    width: calc(3*var(--s) + 2*var(--g));
    grid-template-columns: repeat(4,auto);
}
</style>