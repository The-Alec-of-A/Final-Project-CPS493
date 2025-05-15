<script setup lang="ts">
import { getPostByUser, type Post } from '@/models/userPosts'
import { ref, watch } from 'vue'
import SocialPost  from './SocialPosts.vue'
import { currentUser } from '@/models/session'

const posts = ref<Post[]>([])
const loaded = ref(false)

watch(() => posts.value, (newposts) => {
    if(newposts.length > 0){
        loaded.value = true
    }
})

getPosts().then((feedPosts) => posts.value = feedPosts)
</script>

<script lang="ts">
async function getPosts(): Promise<Post[]>{
    let friendsPosts: Post[] = []
    if(currentUser.value){
        for(let id of currentUser.value.friendsIds){
            const idPosts = await getPostByUser(id)

            idPosts.forEach((post) => {
                friendsPosts.push(post)
            })
        }

        const userId = currentUser.value.id
        const posts = await getPostByUser(userId as number)

        posts.forEach((post) => {
            friendsPosts.push(post)
        })
    }
    friendsPosts.sort((a,b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        return dateB.getTime() - dateA.getTime()
    })

    return friendsPosts
}
</script>

<template>
    <main>
        <div v-if="loaded">
            <div class="container py-3" v-for="post in posts">.
                <SocialPost :post="post" />
            </div>
        </div>
        <div v-else>
            <h2 class="title"> No post to show try making some posts or adding friends</h2>
        </div>
    </main>
</template>
