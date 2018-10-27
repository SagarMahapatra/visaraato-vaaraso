<template>
<div>
    <h1 >{{title}}</h1>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        
        <p>{{ post.frontmatter.description }}</p>

        <p>
            <router-link :to="post.path">Read more</router-link>
            <span v-if="post.frontmatter.download"> | </span> 
            <a  v-if="post.frontmatter.download" :href="$withBase(post.frontmatter.download)" download> Download Pdf</a>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'path'],
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.path))
                .filter(x => !x.frontmatter.readme)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>