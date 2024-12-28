<template>
    <div class="custom-shadow-container books-container">
        <div class="row">
            <div v-for="i in 6" class="col-12 col-xl-4 col-lg-4 mb-4">
                <CardBook1 :profile="true"></CardBook1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .books-container{
        .bookCard{
            figure{
                height: 270px;
            }
        }
    }
</style>