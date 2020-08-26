<template>
  <div class="home">
    <HelloWorld msg="Feed" />
    <div id="postFeed" v-for="(post, index) in allPosts" :key="`${index}-${post.id}`">
      <label>{{ post.title }}</label>
      <p>{{ post.description }}</p>
      <p>
        Price:
        <em>{{post.price}}kr</em> ~ Size:
        <em>{{ post.size }} EU</em>&nbsp; ~ &nbsp;Condition:
        <em>{{ post.condition }}</em>
      </p>
      <p>Contact: {{ post.contactInfo }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data: () => {
    return {
      allPosts: null
    };
  },
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    fetch("/api/posts")
      .then(response => response.json())
      .then(result => {
        this.allPosts = result;
      });
  }
};
</script>

<style scoped>
#postFeed {
  background-color: #b9d8c2;
  width: 80%;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 16px;
}
#postFeed label {
  font-size: 1.5rem;
  margin-bottom: 5px;
}
</style>
