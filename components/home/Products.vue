<template>
    <div>
        <div class="homeProductsSec">
            <div class="container">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-md-11">
                        <div class="row">
                            <div v-for="i, index in store.HomeData?.books" class="col-md-4 col-12" data-aos="fade-up"
                                :data-aos-duration="(index + 1) * 200">
                                <div class="card bg-offwhite">
                                    <!-- <span><img src="/images/product1.png" alt="product1"/></span> -->
                                    <span><img :src="i?.image" alt="product1" /></span>
                                    <h2> {{ i?.title }} </h2>
                                    <p> {{ i?.description }} </p>
                                </div>
                                <NuxtLink  class="w-100"
                                    :to="{ path: '/book-details', query: { id: i?.id || 1 } }">
                                    <button class="btn btn-primary btn-pr bg-green">اشتري الآن</button>
                                </NuxtLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useGeneralStore } from '@/stores/general';
const store = useGeneralStore();
</script>
<style lang="scss">
.homeProductsSec {
    .card {
        p {}
    }
}

@media(max-width:770px) {
    .homeProductsSec {
        .card {
            img {
                height: 300px;
                object-fit: contain;
            }
        }

        button {
            margin-top: 10px !important;
            margin-bottom: 30px;
        }
    }

    .homeAboutSecImg {
        img {
            height: 450px;
            object-fit: contain;
            margin-bottom: 20px;
        }
    }

}
</style>