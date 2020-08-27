<template>
    <div>
        <h1>The number is: {{ views }}</h1>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br>
        <br><br>

        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.post }}</p>
        </div>

        <div>
            <h2 v-if="showItem">show this condition if true</h2>
            <h2 v-else>show this condition if false</h2>
        </div>
        <button @click="changeShowItem">Change ShowItem</button>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            views: 0,
            blogs: [],
            showItem: false
        }
    },
    methods: {
        updateCounter(number){
            this.views += number
        },
        changeShowItem(){
            this.showItem= !this.showItem
        }
    },
    created(){
        // call the server to get the views of this blog post...
        this.views =100
        // get the blog posts
        let posts= [
            {title: 'This is blog title 1', post: 'This is the blog post', id: 1},
            {title: 'This is blog title 2', post: 'This is the blog post', id: 2},
            {title: 'This is blog title 3', post: 'This is the blog post', id: 3},
            {title: 'This is blog title 4', post: 'This is the blog post', id: 4},
        ]
        this.blogs= posts 
    }, 
}
</script>