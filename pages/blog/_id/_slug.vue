<template>
  <div class="block float-left w-full pt-32">
    <div class="block text-black mx-auto my-0 w-10/12">
        <h4 class="text-4xl font-bold text-center mx-auto my-0 w-8/12 md:w-6/12" v-html="this.title" />
<p class="text-sm text-center pb-16" v-html="this.date" />
        <div class="content block float-left w-full" v-html="this.content" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  // meta
  head () {
    return {
      title: this.meta_title,
      bodyAttrs: { class: 'single' },
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description },
        { hid: 'og:title', name: 'og:title', content: this.meta_title },
        { hid: 'og:description', name: 'og:description', content: this.meta_description }
      ]
    }
  },

  // post data
  data () {
    return {
      rid: this.$route.params.id,
      posts: [],
      post: '',
      title: '',
      isActive: 'isActive'
    }
  },
  // post methods
  methods: {
  // get single post
    getSingle () {
      this.id = this.$route.params.id
      axios.get('http://localhost:1337/posts/' + this.id, {
      })
        .then((response) => {
          this.title = response.data.title
          this.content = response.data.content
          this.date = response.data.date
          console.log(response.data)
        })
        .catch((response) => {
          console.log(response.data)
        })
    }
  },
  mounted () {
    this.getSingle()
  }
}
</script>
