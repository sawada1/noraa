<template>
    <div class=" journalCard">
        <div class="card-header">
            <figure>
                <img :src="blog.image" alt="journals image">
            </figure>
        </div>
        <div class="card-body">
            <!-- <ul>
                <li><a href="#"><img src="/images/linkedin_social media Icon.png"
                            alt="linkedin_social media Icon" /></a></li>
                <li><a href="#"><img src="/images/facebook_social media_icon.png"
                            alt="facebook_social media_icon" /></a></li>
                <li><a href="#"><img src="/images/twitter_social media_icon.png" alt="twitter_social media_icon" /></a>
                </li>
            </ul> -->
            <p> {{ blog.created_at }} </p>
            <h4> {{ blog.title }} </h4>
            <p class="journalDetails"> {{ blog.short_description }} </p>
            <nuxt-link :to="localePath({path:'/blog' , query:{id: blog.id}})">
                <button class=" bg-green btnGreen1"> اقراء المزيد </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
let props = defineProps({
    blog: {
        required: true,
        default: {
            id: 1,
            title: 'titlee',
            short_description: 'dsdsds',
            fully_description: 'dsdsds',
            created_at: 'fdfd',
            image: '/images/journal1.png',
        }
    }
})
</script>