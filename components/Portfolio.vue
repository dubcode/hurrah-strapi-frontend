<template>
  <div id="portfolio" class="block float-left w-full">
    <div class="block w-11/12 mx-auto my-0 pt-16 text-center text-black md:w-6/12">
      <h2 class="text-5xl font-bold">
        {{home.portfolio_title}}
      </h2>
      <p class="text-lg">
        {{home.portfolio_excerpt}}
      </p>
    </div>
  </div>
</template>

<script>
import homeQuery from '~/apollo/queries/home/home'
export default {
  data () {
    return {
      home: '',
      query: ''
    }
  },
  apollo: {
    home: {
      prefetch: true,
      query: homeQuery
    }
  }
}
</script>
