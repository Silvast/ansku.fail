<template>
  <section class="container">
    <h1 class="title">
      Lue blogi!
    </h1>
    <div>
    <div v-html="blogitem"></div>
    </div>
    </div>
    <nuxt-link class="button" to="/blog">
      Blogin etusivu
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'blogid',
  asyncData ({ params, error }) {
    return axios.get('/api/blogs/' + params.blogid)
    .then((res) => {
      return { blogitem: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Blog not found' })
    })
  },
  head () {
    return {
      title: `Blog: ${this.blogitem.title}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
