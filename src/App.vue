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
      showAddTaskForm: false
    }
  },
  methods: {
    async addTask(task) {

      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        // body data type must match "Content-Type" header
        body: JSON.stringify(task)
      });

      const data = await res.json()
      this.tasks.push(data)

    },
    async deleteTask(id) {

      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })
      //check if the task was deleted successfully
      if (res.status === 200) {
        if (confirm('Are you sure?')) {
          this.tasks = this.tasks.filter((task) => task.id !== id)
        }
      } else{
        alert('Error deleting task')
      }
    },

    toggleReminder(id) {
      console.log('id')
    },
    
    toggleForm() {
      this.showAddTaskForm = !this.showAddTaskForm;
    },
    //fetch data (tasks) from the fake json-serve
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();

      return data;
    }
  },
  //created() is a lifecycle method i.e when a component in Vue in loaded some methods are
  //fired off during its lifecycle so you can use them to affect the component
  //at a specific time during its lifecycle
  async created() {
    this.tasks = await this.fetchTasks()
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
