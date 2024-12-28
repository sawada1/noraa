<template>
    <div class=" products-profile-container custom-shadow-container">
        <div class="items d-flex flex-column ">
            <div v-for="i in 5" class="item d-flex align-items-center justify-content-between">
                <div class="text-container d-flex align-items-center gap-4">
                    <img src="/images/bookprofile.png" alt="">
                    <div class="d-flex flex-column gap-2">
                        <h3> هنا يكتب اسم المنتح هنا يكتب اسم المنتح </h3>
                        <p> هنا يكتب وصف المنتج هنا يكتب وصف المنتج </p>
                        <span class="fC-green fw-bold"> 99 ر.س </span>
                    </div>
                </div>
                <button class="d-flex align-items-center gap-2">
                    <span class="fC-green"> تفاصيل المنتج </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.19161 3.30778C9.30865 3.42497 9.37439 3.58382 9.37439 3.74945C9.37439 3.91508 9.30865 4.07393 9.19161 4.19112L4.00827 9.37445H17.4999C17.6657 9.37445 17.8247 9.4403 17.9419 9.55751C18.0591 9.67472 18.1249 9.83369 18.1249 9.99945C18.1249 10.1652 18.0591 10.3242 17.9419 10.4414C17.8247 10.5586 17.6657 10.6244 17.4999 10.6244H4.00827L9.19161 15.8078C9.25301 15.865 9.30226 15.934 9.33642 16.0107C9.37058 16.0873 9.38895 16.1701 9.39043 16.254C9.39191 16.3379 9.37648 16.4213 9.34504 16.4991C9.31361 16.5769 9.26682 16.6476 9.20747 16.707C9.14812 16.7663 9.07743 16.8131 8.9996 16.8446C8.92178 16.876 8.83842 16.8914 8.7545 16.8899C8.67058 16.8885 8.58782 16.8701 8.51116 16.8359C8.43449 16.8018 8.36549 16.7525 8.30827 16.6911L2.05827 10.4411C1.94123 10.3239 1.87549 10.1651 1.87549 9.99945C1.87549 9.83382 1.94123 9.67497 2.05827 9.55778L8.30827 3.30778C8.42546 3.19074 8.58431 3.125 8.74994 3.125C8.91556 3.125 9.07442 3.19074 9.19161 3.30778Z"
                            fill="#43806C" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.products-profile-container {
    .items {
        gap: 35px;
        .item {
            border-bottom: 1px solid #DEE2E6;
            padding-bottom: 15px;

            h3 {
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
            }

            p {
                color: #6C757D;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
            }

            img {
                width: 100px;
                height: 100px;
                border-radius: 16px;
                object-fit: cover;
            }
        }
    }
}
</style>