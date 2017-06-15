<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      BLOG
    </h1>
    <ul class="blog">
      <li v-for="(blogitem, index) in blogs" class="blog">
            {{ index }} ) {{ blogitem.description}}
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  async asyncData () {
    return {
      blogs: [
        { title: 'Eka otsikko', description: 'Hihhuli' },
        { title: 'Toka otsikko', description: 'Hahhuli' }
      ],
      blogs2: [
          { title: 'Eka otsikko', description: 'Hihhuli' }
      ]

    }
  },
  head () {
    return {
      title: 'Blogs'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
