<template>
<section class="container">

<div class="blogs">
        <ul class="blogs">
          <li v-for="(blogitem, index) in blogs" class="blogs">
            <nuxt-link :to="{ name: 'blogid', params: { blogid: index }}">
              {{ blogitem.title }}
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
