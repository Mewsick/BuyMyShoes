<template>
  <div class="post">
    <h1 id="post">post</h1>
    <label for="title">Title:</label>
    <br />
    <input type="text" id="title" name="title" placeholder="Title for post" />
    <br />
    <label for="price">Price:</label>
    <br />
    <input type="number" id="price" name="price" placeholder="Price for shoes" />
    <br />
    <label for="description">Description:</label>
    <br />
    <textarea
      name="description"
      id="text-area"
      v-model="message"
      cols="10"
      rows="10"
      placeholder="Write a description about the shoe"
    ></textarea>
    <br />
    <!-- <input type="textarea" id="description" name="description"><br> !-->
    <label for="size">Shoe size:</label>
    <br />
    <div class="box">
      <select id="size" name="size">
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
      <input type="radio" class="radio" checked="checked" name="condition" value="new" />
      <label for="new">New</label>
      <input type="radio" class="radio" name="condition" value="used" />
      <label for="used">Used</label>
      <input type="radio" class="radio" name="condition" value="rare" />
      <label for="rare">Rare</label>
      <input type="radio" class="radio" name="condition" value="dswt" />
      <label for="dswt">Dswt</label>
      <input type="radio" class="radio" name="condition" value="deadstock" />
      <label for="deadstock">Deadstock</label>
    </div>

    <label for="contact">Contact Info:</label>
    <br />
    <input type="text" id="contact" placeholder="Phone number & name" name="contact" />
    <br />
    <button class="submit">Post</button>
    <br />
  </div>
</template>

