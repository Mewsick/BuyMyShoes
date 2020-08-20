<template>
  <div id="app">
    <br />
    <div>
      <img alt="Vue logo" src="../src/assets/logo.png" />
      <h1 id="head">Buy My Shoes</h1>
    </div>
    <div id="nav">
      <router-link to="/">Feed</router-link>&nbsp;|
      <router-link to="/about">Post</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-color: #b9d8c2;
}

.home {
  padding: 10px;
  background-color: #9ac2c9;
}

.post {
  padding: 10px;
  background-color: #9ac2c9;
}

#app {
  font-family: gentle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a5043;
}

#nav {
  background-color: #8aa1b1;
  font-size: 1.5em;
  margin-top: -30px;
}

#nav a {
  text-decoration: none;
  color: #4a5043;
  margin: 1em;
}

#nav a.router-link-exact-active {
  color: #ffcb47;
}
input[type="text"] {
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
  width: 30%;
  height: 30px;
  padding: 5px;
  margin-bottom: 16px;
  background-color: #b9d8c2;
  color: #4a5043;
  border-style: none;
  border-radius: 4px;
  outline: none;
}

input[type="radio"] {
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 2em;
  height: 2em;
  /* background-color only for content */
  background-clip: content-box;
  border: 2px solid #8aa1b1;
  background-color: #b9d8c2;
  border-radius: 50%;
  cursor: pointer;
}

/* appearance for checked radiobutton */
input[type="radio"]:checked {
  background-color: #ffcb47;
}

label {
  padding: 5px;
}
textarea {
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
  width: 30%;
  padding: 5px;
  margin-bottom: 16px;
  background-color: #b9d8c2;
  color: #4a5043;
  border-radius: 4px;
  border-style: none;
  outline: none;
  resize: none;
}

.box select {
  background-color: #b9d8c2;
  color: #4a5043;
  padding: 5px;
  width: 30%;
  border: none;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;
  outline: none;
}

.box select option {
  padding: 30px;
}

button {
  background-color: #b9d8c2;
  color: #4a5043;
  border-radius: 4px;
  outline: none;
}

@font-face {
  font-family: "Brightly";
  src: local("Brightly"),
    url(./fonts/Brightly-Crush-Shine.ttf) format("truetype");
}

@font-face {
  font-family: "gentle";
  src: local("gentle"), url(./fonts/gentle.otf) format("opentype");
}

#head {
  font-family: Brightly;
  background-image: linear-gradient(
    to left,
    #ffe85b,
    #fd003b,
    #2596c2,
    #fe5268,
    #c9e7f9,
    #ffe85b
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4em;
  margin-top: -5px;
}

#post {
  font-family: Brightly;
  font-size: 2.5em;
}

.condition {
  margin-bottom: 16px;
}

.submit {
  background-color: #8aa1b1; /* Green */
  width: 12%;
  border: none;
  color: #8aa1b1;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
  transition-duration: 0.4s;
  cursor: pointer;
  margin-bottom: 16px;
}

.submit {
  font-family: gentle;
  background-color: #8aa1b1;
  color: #4a5043;
  border: 2px solid #8aa1b1;
}

.submit:hover {
  background-color: #ffcb47;
  border: 2px solid #ffcb47;
  color: #4a5043;
}
</style>
