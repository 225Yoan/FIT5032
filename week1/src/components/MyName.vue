<template>
  <div class="my-name">
    <h2>Hello, I'm <span class="highlight">Yuhan Ying</span> </h2>
    <p>This is my custom Vue component!</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.my-name {
  padding: 1.5rem;
  background-color: #ffffff;
  color: #222;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  margin: 2rem auto;
  max-width: 600px;
  text-align: center;
}

.my-name h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.my-name p {
  font-size: 1.1rem;
  color: #555;
}

.highlight {
  color: #42b883;
  font-weight: bold;
}
</style>
