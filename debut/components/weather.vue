<template>
  <div>
    <p>{{ day }}</p>
    <img :src="`/${weather?.weather[0].icon}@2x.png`" alt="">
    <p>{{ temp  }} °</p>
    <p>влажность {{ weather?.main.humidity }}%</p>
    <p>скорость ветра:{{Math.round(weather?.wind?.speed) }} м/с</p>
  </div>
</template>

<script setup>
const props = defineProps([
  'weather' , 'day'
])
const temp = computed(()=>{
  const one = props?.weather?.main?.temp - 273.15
  return Math.round(one) 
})
</script>

<style>

</style>