<template>
  <div id="about" class="bg-grey block float-left w-full">
    <div class="block w-11/12 mx-auto my-0 py-16 text-center text-white md:w-6/12">
      <h2 class="text-5xl font-bold">
        We are <LogoWhite />
      </h2>
      <p class="text-lg">
        {{home.intro_text}}
      </p>
    </div>
  </div>
</template>

<script>
import homeQuery from '~/apollo/queries/home/home'
import LogoWhite from '~/components/LogoWhite.vue'
export default {
  components: {
    LogoWhite
  },
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
