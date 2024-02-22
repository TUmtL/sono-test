<template>
  <div>
    <div v-if="edit === false">
      <p>{{ task.day }}</p>
      <p>{{ task.task }}</p>
    </div>
    <div v-if="edit == true">
      <input v-model="editDay" type="number" />
      <input v-model="editTask" type="text" />
    </div>
    <button v-if="edit == true" @click="cancel()">отмена</button>
    <button @click="redit()">изменить</button>
    <button @click="remove()">удалить задачу</button>
  </div>
</template>

<script setup>
const store = calendare();
const editDay = ref("");
const editTask = ref("");
const edit = ref(false);
const props = defineProps(["task"]);
watch(
  () => props.task.day,
  val => {
    console.log(val);
  }
);
function cancel() {
  edit.value = !edit.value;
  editDay.value = 0;
  editTask.val = "";
}
function redit() {
  edit.value = !edit.value;
  if (!editDay.value && !editTask.value) {
    editDay.value = props.task.day;
    editTask.value = props.task.task;
  }
  if (editDay.value != false && editDay.value != false) {
    props.task.day = editDay.value;
    props.task.task = editTask.value;
  }
}
function remove() {
  store.oneMonth.monthTaskList = store.oneMonth.monthTaskList.filter(
    one => one.task != props.task.task
  );
}
watch(
  () => editDay.value,
  () => {
    editDay.value > store.oneMonth.dayCount
      ? (editDay.value = store.oneMonth.dayCount)
      : null;
  }
);
</script>

<style>
</style>