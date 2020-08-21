<template>
  <div class="post">
    <h1 id="post">post</h1>

    <label for="title">Title:</label>
    <br />
    <input type="text" id="title" name="title" v-model="title" placeholder="Title for post" />
    <br />

    <label for="price">Price:</label>
    <br />
    <input type="number" id="price" name="price" placeholder="Price for shoes" v-model="price" />
    <br />

    <label for="description">Description:</label>
    <br />
    <textarea
      name="description"
      id="text-area"
      cols="10"
      rows="10"
      placeholder="Write a description about the shoe"
      v-model="description"
    ></textarea>
    <br />

    <label for="size">Shoe size:</label>
    <br />
    <div class="box">
      <select id="size" name="size" v-model="size">
        <option value="36">36</option>
        <option value="36.5">36 ½</option>
        <option value="37">37</option>
        <option value="37.5">37 ½</option>
        <option value="38">38</option>
        <option value="38.5">38 ½</option>
        <option value="39">39</option>
        <option value="39.5">39 ½</option>
        <option value="40">40</option>
        <option value="40.5">40 ½</option>
        <option value="41">41</option>
        <option value="41.5">41 ½</option>
        <option value="42">42</option>
        <option value="42.5">42 ½</option>
        <option value="43">43</option>
        <option value="43.5">43 ½</option>
        <option value="44">44</option>
        <option value="44.5">44 ½</option>
        <option value="45">45</option>
        <option value="45.5">45 ½</option>
      </select>
    </div>
    <br />

    <label>Condition:</label>
    <br />
    <div class="condition">
      <input
        type="radio"
        class="radio"
        checked="checked"
        name="condition"
        value="New"
        v-model="condition"
      />
      <label for="new">New</label>
      <input type="radio" class="radio" name="condition" value="Used" v-model="condition" />
      <label for="used">Used</label>
      <input type="radio" class="radio" name="condition" value="Rare" v-model="condition" />
      <label for="rare">Rare</label>
      <input type="radio" class="radio" name="condition" value="DSWT" v-model="condition" />
      <label for="dswt">Dswt</label>
      <input type="radio" class="radio" name="condition" value="Deadstock" v-model="condition" />
      <label for="deadstock">Deadstock</label>
    </div>
    <br />

    <label for="contact">Contact Info:</label>
    <br />
    <input
      type="text"
      id="contact"
      placeholder="Phone number & name"
      name="contact"
      v-model="contactInfo"
    />
    <br />

    <button @click="onClick" class="submit">Post</button>
    <br />
  </div>
</template>

<script>
export default {
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(title) {
        this.$store.commit("setTitle", title);
      }
    },
    price: {
      get() {
        return this.$store.state.price;
      },
      set(price) {
        this.$store.commit("setPrice", price);
      }
    },
    description: {
      get() {
        return this.$store.state.description;
      },
      set(description) {
        this.$store.commit("setDescription", description);
      }
    },
    size: {
      get() {
        return this.$store.state.size;
      },
      set(size) {
        this.$store.commit("setSize", size);
      }
    },
    condition: {
      get() {
        return this.$store.state.condition;
      },
      set(condition) {
        this.$store.commit("setCondition", condition);
      }
    },
    contactInfo: {
      get() {
        return this.$store.state.contactInfo;
      },
      set(contactInfo) {
        this.$store.commit("setContactInfo", contactInfo);
      }
    }
  },

  methods: {
    onClick() {
      fetch("/api/createpost", {
        body: JSON.stringify({
          title: this.title,
          price: this.price,
          description: this.description,
          size: this.size,
          condition: this.condition,
          contactInfo: this.contactInfo
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
      }).then(() => {
        this.$router.push("/");

        this.title = "";
        this.price = "";
        this.description = "";
        this.size = "";
        this.condition = "";
        this.contactInfo = "";
      });
    }
  }
};
</script>
