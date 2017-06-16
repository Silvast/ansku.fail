<template>
<section class="container">

<div class="blogs">
        <ul class="bloglist">
          <li v-for="(blogitem, index) in blogs" class="bloglistitem">
            <nuxt-link :to="{ name: 'blogslug' , params: { blogid: index,  blogtitle: blogitem.title, blogslug: blogitem.slug } }">
              <h1>{{ blogitem.title }}</h1>
            </nuxt-link>
        </li>
        </ul>
    </div>
</div>
</section>
</template>

<script>

import axios from '~plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/blogs')
    return {
      blogs: data
    }
  }
}
</script>

<style scoped>
.bloglistitem {
    max-width: 50%;
    margin:0 auto;
    text-align:center;

},
.bloglist {
    list-style-type: none;
}
</style>
