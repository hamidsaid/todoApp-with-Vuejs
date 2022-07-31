<template>
  <div class="container">
    <Header @toggle-form="toggleForm" title="Task Tracker" v-bind:addTask="showAddTaskForm"></Header>
    <div v-show="showAddTaskForm">
    <AddTask @add-task="addTask"></AddTask>
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"></Tasks>
  </div>
</template>

<script>
//step 1:import component
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


export default {
  name: 'App',
  components: {
    //step 2:register the components you made and you want to use
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTaskForm:false
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task)
  
    },
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id) {
      console.log('id')
    },
    toggleForm(){
      this.showAddTaskForm = !this.showAddTaskForm;
    }
  },
  //created() is a lifecycle method i.e when a component in Vue in loaded some methods are
  //fired off during its lifecycle so you can use them to affect the component
  //at a specific time during its lifecycle
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Make a youtube video',
        day: 'Sunday',
        reminder: true,
      },
      {
        id: 2,
        text: 'Read a Book',
        day: 'Monday',
        reminder: false

      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
