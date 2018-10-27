<template>
<div>
    <img :src="$withBase('/images/icon/'+icon)"  width="50px" alt="chef">
    <h2 style="align-text: center">  {{title}}</h2>
    <div v-for="post in posts">
        <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
    </div>
    

</div>
</template>

<script>
export default {
    props: ['title', 'path', 'icon'],
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

<style>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}
</style>