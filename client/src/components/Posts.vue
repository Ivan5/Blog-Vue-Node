<template>
  <div class="post">
    <div class="post" v-for="post in posts.slice(6,count)" :key="post._id">
      <h3>{{ post.title }}</h3>
    </div>
    <button class="load" @click="$emit('showMore')" v-if="count > posts.length">See More</button>
  </div>
</template>

<script>
export default {
  name: "posts",
  props: ["posts", "count"]
};
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  max-width: 1280px;
  margin: 50px auto;

  .post {
    display: block;
    padding: 15px;
    background: #fff;
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
  }
  .load {
    display: block;
    width: 100%;
    max-width: 250px;
    height: 50px;

    margin: 0 auto;

    outline: none;
    border: none;
    border-radius: 15px;
    appearance: none;

    background-color: #ffce00;
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);

    color: #171717;

    font-family: "Rock Salt", serif;
    font-size: 15px;

    padding-top: 7px;
    box-sizing: border-box;
  }
}
</style>
