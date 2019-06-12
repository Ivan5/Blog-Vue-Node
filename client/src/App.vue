<template>
  <div id="app">
    <Header/>
    <Latest :posts="posts"/>
    <Posts :posts="posts" :count="postCount" @showMore="this.showMore"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Latest from "./components/Latest.vue";
import Posts from "./components/Posts.vue";

export default {
  name: "app",
  data() {
    return {
      api_url: "http://localhost:3000/api/",
      posts: [],
      postCount: 6
    };
  },
  components: { Header, Latest, Posts },
  methods: {
    getPosts() {
      fetch(this.api_url + "posts/all")
        .then(data => {
          return data.json();
        })
        .then(json => {
          this.posts = json.result;
          this.posts = this.posts.sort((a, b) => {
            if (a.timestamp < b.timestamp) {
              return 1;
            }
            if (a.timestamp > b.timestamp) {
              return -1;
            }
            return 0;
          });
        });
    },
    showMore() {
      this.postCount += 2;
    }
  },
  beforeMount() {
    this.getPosts();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Rock+Salt&display=swap");
body {
  background-color: #f3f3f3;
  font-family: "Rock Salt", serif;

  h3 {
    color: #171717;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
