<template>
<header>
    <h1>{{ title }}</h1>
    <Button @btn-click="$emit('toggle-form')" :btnTitle="addTask?'Close': 'Add Task'" class="btn" :color="addTask?'red':'green'"></Button>
</header>
</template>


<script>
import Button from "./Button"

export default{
    name :'Header',
    //has properties
    props:{
        title: String,
        addTask:Boolean
    },
    //register external components
    components:{
        Button,
    },
    emits:['toggle-form']
}
</script>

<!-- scoped means that this styles will only be for this component -->

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>