<template>
    <div id="testimonials" class="block float-left w-full pt-10">
      <div class="w-full items-center justify-center pt-10">
        <div class="my-0 mx-auto w-11/12 md:w-6/12">
          <h3 class="w-full text-center text-5xl font-bold text-white">
            Don’t just take our word for it!
          </h3>
          <div class="flex w-full items-center justify-center pt-10">
            <IconTwo />
          </div>
        </div>
      </div>
    <div id="slide_two" class="block float-left h-full w-full">
      <hooper
        :hover-pause="false"
        :wheel-control="false"
        :auto-play="true"
        :play-speed="8000"
        :transition="600"
        :center-mode="true"
        :itemsToShow="1"
      >
        <slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="row">
            <div class="col">
              <p class="italic text-xl">
                {{testimonial.reference}}
              </p>
            </div>
          </div>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide
} from 'hooper'
import 'hooper/dist/hooper.css'
import testimonialsQuery from '~/apollo/queries/testimonial/testimonial'
import IconTwo from '~/components/IconTwo.vue'

export default {
  name: 'App',
  components: {
    IconTwo,
    Hooper,
    Slide
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      testimonials: [],
      query: ''
    }
  },
  apollo: {
    testimonials: {
      prefetch: true,
      query: testimonialsQuery
    }
  }
}
</script>

<style scoped>
#testimonials {
  background: url('/bg2.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  display: block;
  float: left;
  width: 100%;
}
#slide_two .hooper{
  height: 300px;
}
#slide_two .hooper-list,
#slide_two .hooper-track,
#slide_two .hooper-slide{
  height: 100%;
  width: 100%;
}

#slide_two .hooper li {
  color: #fff;
  display: block;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#slide_two .row {
  display: block;
  width: 100%;
}
#slide_two .col {
  display: block;
  margin: 0 auto;
  text-align: center;
  color: theme('colors.white');
  width: 91.666667%;
}
#slide_two p:before {
    content: "\201C";
}

#slide_two p:after {
    content: "\201D";
}

@media only screen and (min-width: 1024px) {
#slide_two .col {
  width: 50%;
  }
}
</style>
