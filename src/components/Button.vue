<template>
<button @click="onClick()" v-bind:style="{background: color}">{{ btnTitle }}</button>
</template>

<script>
export default{
    name: 'Button',
    props: {
        btnTitle: String,
        color:String
    },
    methods:{
        onClick(){
            this.$emit('btn-click')
        }
    }
}
</script>