<template>
  <div class="container">
    <form class="form" @submit.prevent="search()">
      <input class="form-input" type="text" v-model="city" />
      <button class="form-btn" @click="search">Search</button>
    </form>
    <div class="list-wrapper">
      <Weather class="list-item" v-for="(one , i) of weathers" :day="dayList[i]" :weather="one"></Weather>
    </div>
    <div class="error-template">что пошло не так , перезагрузите страницу</div>
  </div>
</template>

<script setup>
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=moscow&appid=496eab7d5e444a0379912854e4b7a0a2`
)
  .then(res => res = res.json())
  .then(res => {weekWeather.value = res.list; fetchCode.value = res.cod});
const fetchCode = ref('')
const weekWeather = ref("");
const dayList = ref(["сегодня", "заватра", "послезавтра", "послепослезавтра"]);
let weathers = computed(() => [
  weekWeather.value[0],
  weekWeather.value[8],
  weekWeather.value[16],
  weekWeather.value[24]
]);
watch(fetchCode , ()=> {
  if(fetchCode.value === '404'){
    document.querySelector('.error-template').classList.toggle('error-template-out')
    setTimeout(()=>document.querySelector('.error-template').classList.toggle('error-template-out') , 5000)
  }
})
const city = ref("Москва");
async function search() {
  try {
    const raw = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=496eab7d5e444a0379912854e4b7a0a2&lang=ru`
    );
    const cooked = await raw.json();
    weekWeather.value = cooked.list;
    fetchCode.value = cooked.cod
  } catch (e) {

  }
}
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  background: linear-gradient( rgb(197 195 57), rgb(115 138 32), rgb(40 157 131) );
  height: 100vh;
  width: 100vw;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: rgb(255, 255, 255);
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 50px;
}
.city-name {
  font-weight: 800;
  margin-bottom: 20px;
}
.form {
  margin-bottom: 20px;
}
.form-input {
  background: transparent;
  border: 1px solid white;
  padding: 2px 5px;
  border-radius: 14px;
  color: wheat;
  margin-right: 12px;
}
.form-btn {
  background: transparent;
  border: 1px solid white;
  padding: 2px 5px;
  border-radius: 14px;
  color: wheat;
}
.list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.list-item {
  border: 1px solid rgb(180 180 180 / 33%);
  padding: 5px;
  border-radius: 5px;
  backdrop-filter: blur(4px);
}
.error-template {
  background-color: rgba(255, 6, 6, 0.432);
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 15px;
  transform: translateY(-100px);
  transition: transform 0.3s ease-in-out;

}
.error-template-out{
  transform: translateY(00px);

}
</style>
