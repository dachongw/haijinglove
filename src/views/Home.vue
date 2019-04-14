<template>
  <div class="home">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss">
  .home {
    width: 1200px;
    margin: 0 auto;
    background-color: pink;
  }
</style>
