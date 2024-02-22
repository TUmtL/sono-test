import { defineStore } from "pinia";
export default defineStore('calendare', {
  state() {
    return {
      months: [
        {
          name: "январь",
          dayCount:31,
          monthTaskList:[]
        },
        {
          name: "февраль",
          dayCount:28,
          monthTaskList:[]
        },
        {
          name: "март",
          dayCount:31,
          monthTaskList:[]
        },
        {
          name: "апрель",
          dayCount:30,
          monthTaskList:[]
        },
        {
          name: "май",
          dayCount:31,
          monthTaskList:[] 
        },
        {
          name: "июнь",
          dayCount:30,
          monthTaskList:[]
        },
        {
          name: "июль",
          dayCount:31,
          monthTaskList:[]
        },
        {
          name: "август",
          dayCount:31,
          monthTaskList:[]
        },
        {
          name: "сентябрь",
          dayCount:30,
          monthTaskList:[]
        },
        {
          name: "октябрь",
          dayCount:31,
          monthTaskList:[]
        },
        {
          name: "ноябрь",
          dayCount:30,
          monthTaskList:[]
        },
        {
          name: "декабрь",
          dayCount:31,
          monthTaskList:[]
        },
      ],
      monthNow:0,
      formTask:'',
      formDay:'',
    }
  },
  actions: {
    addTask(){
      this.oneMonth.monthTaskList.push({day:this.formDay , task:this.formTask})
      this.oneMonth.monthTaskList.sort((a , b) => a.day - b.day)
      this.formTask = ''
      this.formDay = ''
    }
  },
  getters: {
    oneMonth(){
      return this.months[this.monthNow]
    }
  }
})