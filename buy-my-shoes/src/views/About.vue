<template>
  <div class="post">
    <h1>This is a post page</h1>
        <label for="fname">Title:</label><br>
        <input type="text" id="title" name="title"><br>
        <label for="lname">Description:</label><br>
        <textarea name="description" id="text-area" v-model="message" cols="10" rows="10"></textarea><br>
        <!-- <input type="textarea" id="description" name="description"><br> !-->
          <label for="size">Shoe size:</label> <br>
          <select id="size" name="size">
          <option value="37">37</option>
          <option value="37.5">37.5</option>
          <option value="38">38</option>
          <option value="38.5">38.5</option>
          </select> <br>
        <label for="lname">Price:</label><br>
        <input type="textarea" id="price" name="price"><br>
        <label for="lname">Contact Info:</label><br>
        <input type="textarea" id="price" placeholder="Phone number & name" name="price"><br>
  </div>
</template>
