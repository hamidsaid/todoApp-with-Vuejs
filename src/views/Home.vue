<template>

    <AddTask v-show="toggleAddForm" @add-task="addTask"></AddTask>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"></Tasks>
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
    name: 'Home',
    props: {
        toggleAddForm: Boolean,
    },
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: [],
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
            } else {
                alert('Error deleting task')
            }
        },

        toggleReminder(id) {
            console.log('id')
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