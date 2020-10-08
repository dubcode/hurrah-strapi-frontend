<template>
  <div id="blog" class="block float-left w-full pt-8">
    <div class="block float-left w-full py-16 text-black text-center">
      <h6 class="text-5xl font-bold">Go on, let us give your business a reason to smile</h6>
      <p class="text-lg">Read our latest articles</p>
    </div>
    <div class="grid grid-cols-1 gap-4 w-10/12 mx-auto mt-0 mb-16 md:grid-cols-2 lg:grid-cols-4">
      <router-link :to="{ path: '/blog/'+ post.id +'/' + post.permalink}"  class="cell block h-64 bg-center bg-cover" :style="{ backgroundImage: `url( ${api_url + post.thumb.url})`}" v-for="post in displayedPosts" :key="post.id">
          <div class="h-full w-full relative">
            <div class="bg-block block h-full w-full opacity-75 absolute z-0 duration-300" />
            <div class="flex items-center justify-center text-center text-white h-full w-full absolute z-10">
              <div class="block w-full p-8">
                <h4 class="text-xl font-bold" v-html="post.title" />
                <p class="text-sm" v-html="post.date" />
              </div>
            </div>
          </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
export default {
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      posts: [],
      query: '',
      page: 1,
      perPage: 8,
      pages: []
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery
    }
  },
  // initial state methods
  methods: {
    // set pages
    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    // paginate
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return posts.slice(from, to)
    }
  },
  // watch
  watch: {
    posts () {
      this.setPages()
    }
  },
  // computed
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
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
