<template>
  <div class="container" >
    <div class="btn-wrapper"> <button @click="minus()">-</button><p>{{ store.oneMonth.name }}</p><button @click="plus()">+</button></div>
    <div class="day-wrapper">
      <div @click="store.formDay = one" :class="{'curent-day': one === whatIsDayToDay , 'day':true}" v-for="one of store.oneMonth.dayCount" >
        {{ one }}
      </div>
    </div>
    <form @submit.prevent="store.addTask()" class="input-wrapper">
      <input v-model="store.formDay" type="number">
      <input v-model="store.formTask" type="text">
      <button type="submit">send</button>
    </form>
    <div class="month-task-wrapper">
      <div v-for="one of store.oneMonth.monthTaskList" ><task :task="one" ></task></div>
    </div>
    <p v-if="store.oneMonth.monthTaskList.length == 0">РАБОТАЙ</p>
    <div class="sorry">{{ sorry }}</div>
  </div>
</template>

<script setup>
import calendare from './stores/calendare';
const store = calendare()
function minus(){
  store.monthNow > 0 ? store.monthNow-- : store.monthNow = 11
}
function plus(){
  store.monthNow < 11 ? store.monthNow++ : store.monthNow = 0
}
watch(()=> store.formDay , (val)=> {
  if(val > store.oneMonth.dayCount) {
    store.formDay = store.oneMonth.dayCount 
  }
})
const sorry = ref('с дизайном тут плохо потому что я торопился')
const whatIsDayToDay = ref(new Date().getDate())
store.monthNow = new Date().getMonth()

</script>

<style>
*,*::after,*::before{
  box-sizing: border-box;
  font-family: sans-serif;
}
html{
  background-color: rgb(196, 196, 121);
}
.container{
  max-width: 1000px;
  padding: 0 50px;
  margin:0 auto ;
}
.day-wrapper{
  display: grid;
  grid-template-columns: repeat(7 , 1fr);
  gap: 10px 40px;
}
.curent-day{
  background-color: rgba(255, 0, 0, 0.384);
}
.day {
cursor: pointer;
transition: background-color 0.2s ease-in;
}
.day:hover {
  background-color: rgba(248, 238, 220, 0.712);
}
.btn-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
}
.input-wrapper{
  margin-bottom: 20px;
}
.day-wrapper{
  margin-bottom: 20px;
}
.sorry{
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: 0.07;
}
</style>