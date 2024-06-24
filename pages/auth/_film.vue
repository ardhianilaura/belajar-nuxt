<template>
  <div class="container mx-auto">
    <div class="relative py-16 bg-white overflow-hidden">
        <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg mas-w-prose mx-auto mb-6">
                <p class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                    {{film.title}}
                </p>
                <h1 class="mt-2 nb-8 text-3xl text-center leading-0 font-extrabold tracking-tight text-gray-900 smite">
                    {{film.original_title_romanised}}
                </h1>
            </div>
            <figure>
                <img class="w-auto rounded-lg mx-auto" :src="film.image" :alt="film.title" width="1310" height="873" />
                <figcaption class="text-center">{{film.title}}</figcaption>
            </figure>
            <div class="prose prose-lg text-gray-500 mx-auto">
                <ul>
                    <li><span class="font-bold">Director</span>: {{film.director}}</li>
                    <li><span class="font-bold">Producer</span>:{{film.producer}}</li>
                </ul>
                <p> {{film.description}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ params, $axios }) {
      const film = await $axios.$get(`https://ghibliapi.herokuapp.com/films/${params.film}`)
      return { film }
    }
  }
</script>

<style>
svg {
    width: 20px;
    height: 20px;
    display: inlined-block;
}
</style>