<template>
  <section class="latest">
    <h1>Latest Posts</h1>
    <div class="posts" v-if="posts.length >= 1">
      <div class="post">
        <div
          class="image"
          :style="{backgroundImage:`url(${require('../assets/post-1-image@2x.png')})`}"
        ></div>
        <h4 :title="posts[0].title">{{posts[0].title}}</h4>
      </div>
      <div class="post col-2 row-2">
        <div
          class="image"
          :style="{backgroundImage:`url(${require('../assets/post-2-image@2x.png')})`}"
        ></div>
        <h4 :title="posts[1].title">{{posts[1].title}}</h4>
      </div>
      <div class="post row-2">
        <div
          class="image"
          :style="{backgroundImage:`url(${require('../assets/post-3-image@2x.png')})`}"
        ></div>
        <h4>Everything wrong with AI</h4>
      </div>
      <div class="post row-2">
        <div
          class="image"
          :style="{backgroundImage:`url(${require('../assets/post-4-image@2x.png')})`}"
        ></div>
        <h4>#100DaysOfCode</h4>
      </div>
      <div class="post">
        <div
          class="image"
          :style="{backgroundImage:`url(${require('../assets/post-5-image@2x.png')})`}"
        ></div>
        <h4>Node Package Manager</h4>
      </div>
      <div class="post col-2">
        <div
          class="image"
          :style="{backgroundImage:`url(${require('../assets/post-6-image@2x.png')})`}"
        ></div>
        <h4>Learn to take a break</h4>
      </div>
    </div>
    <div class="posts" else>
      <p>Not enough posts to display</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "latest",
  props: ["posts"]
};
</script>

<style lang="scss" scoped>
.latest {
  display: block;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  font-size: 12px;

  .posts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 196px);
    grid-gap: 30px;

    margin: 15px;

    .post {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);

      .image {
        flex: 1;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      h4 {
        box-sizing: border-box;
        padding: 3px 15px 0px 15px;
        height: 50px;
        line-height: 50px;
        margin: 0px;
        overflow: hidden;
        color: #171717;

        font-size: 20px;
        font-weight: 400;

        text-overflow: ellipsis;
      }
      &.col-2 {
        grid-column: span 2;
      }

      &.row-2 {
        grid-row: span 2;
      }
    }
  }
}
</style>
