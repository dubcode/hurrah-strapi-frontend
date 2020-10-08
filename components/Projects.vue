<template>
  <div id="projects" class="block float-left w-full pt-8">
    <div class="grid grid-cols-1 w-10/12 mx-auto my-0 md:grid-cols-2 lg:grid-cols-4">

      <div class="cell block h-64 bg-center bg-cover" v-for="portfolio in portfolios" :key="portfolio.id">
          <div class="h-full w-full relative">
            <div class="bg-block block h-full w-full opacity-75 absolute z-0 duration-300" />
            <div class="flex items-center justify-center text-center text-white h-full w-full absolute z-10">
              <div class="block w-full">
                  <img class="block float-left h-auto w-full" :src="api_url + portfolio.thumb.url" :alt="portfolio.thumb_title" />
              </div>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import portfoliosQuery from '~/apollo/queries/portfolio/portfolio'
export default {
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      portfolios: [],
      query: ''
    }
  },
  apollo: {
    portfolios: {
      prefetch: true,
      query: portfoliosQuery
    }
  }
}
</script>

<style scoped>
.grid a:nth-child(1) .bg-block,
.grid a:nth-child(8) .bg-block {
  background-color: theme('colors.pink');
}
.grid a:nth-child(2) .bg-block,
.grid a:nth-child(7) .bg-block {
  background-color: theme('colors.orange');
}
.grid a:nth-child(3) .bg-block,
.grid a:nth-child(6) .bg-block {
  background-color: theme('colors.grey');
}
.grid a:nth-child(4) .bg-block,
.grid a:nth-child(5) .bg-block  {
  background-color: theme('colors.black');
}
.cell:hover .bg-block{
    opacity: 1;
}
</style>
