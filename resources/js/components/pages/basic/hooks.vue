<template>
    <div>
        <h1 ref="myref">hooks Tutorial</h1>
        <h2>my name is: {{ name }}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Rex',
        }
    },
    beforeCreate(){
        // mainly to redirect
        console.log(this.name)
    },
    created(){
        // call mostly initial data from it...
        // it is used mostly to call our API, that is data from our server
        console.log(this.name)
    },
    mounted(){
    // this renders html
    console.log(this.$refs.myref)
    },
}
</script>