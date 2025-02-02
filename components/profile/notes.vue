<template>
    <div class="custom-shadow-container">
        <div class="notes-container row">
            <div v-for="i in 2" class="col-12 col-xl-4 col-lg-4">
                <div class="note d-flex flex-column gap-3">
                    <div class="head d-flex align-items-center gap-3">
                        <div class="circle"></div>
                        <span> 23 يونيو 2024 </span>
                    </div>
                    <h3> هنا يكتب عنوان الملاحظة هنا يكتب عنوان الملاحظة هنا كتب عيسيس </h3>
                    <p>
                        هنا يكتب وصف الملاحظة هنا يكتب وصف الملاحظة هنا يكتب وصف الملاحظة هنا يكتب وصف الملاحظة هنا يكتب
                        وصف الملاحظة هنا يكتب وصف الملاحظة هنا يكتب وصف الملاحظةهنا يكتب وصف يسيسيسي يشيسشيشس
                    </p>
                    <button  class="d-flex align-items-center justify-content-center py-2 gap-3 w-100">
                        تعديل الملاحظة
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M14.5517 3.73937L15.9575 2.33271C16.2506 2.03964 16.648 1.875 17.0625 1.875C17.477 1.875 17.8744 2.03964 18.1675 2.33271C18.4606 2.62577 18.6252 3.02325 18.6252 3.43771C18.6252 3.85216 18.4606 4.24964 18.1675 4.54271L9.31833 13.3919C8.87777 13.8322 8.33447 14.1558 7.7375 14.3335L5.5 15.0002L6.16667 12.7627C6.3444 12.1657 6.66803 11.6224 7.10833 11.1819L14.5517 3.73937ZM14.5517 3.73937L16.75 5.93771M15.5 11.6669V15.6252C15.5 16.1225 15.3025 16.5994 14.9508 16.951C14.5992 17.3027 14.1223 17.5002 13.625 17.5002H4.875C4.37772 17.5002 3.90081 17.3027 3.54917 16.951C3.19754 16.5994 3 16.1225 3 15.6252V6.87521C3 6.37793 3.19754 5.90101 3.54917 5.54938C3.90081 5.19775 4.37772 5.00021 4.875 5.00021H8.83333"
                                stroke="#43806C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class=" col-12 col-xl-4 col-lg-4">
                <div class="note d-flex flex-column active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <path
                            d="M36 27V45M45 36H27M63 36C63 39.5457 62.3016 43.0567 60.9447 46.3325C59.5879 49.6082 57.5991 52.5847 55.0919 55.0919C52.5847 57.5991 49.6082 59.5879 46.3325 60.9447C43.0567 62.3016 39.5457 63 36 63C32.4543 63 28.9433 62.3016 25.6675 60.9447C22.3918 59.5879 19.4153 57.5991 16.9081 55.0919C14.4009 52.5847 12.4121 49.6082 11.0553 46.3325C9.69838 43.0567 9 39.5457 9 36C9 28.8392 11.8446 21.9716 16.9081 16.9081C21.9716 11.8446 28.8392 9 36 9C43.1608 9 50.0284 11.8446 55.0919 16.9081C60.1554 21.9716 63 28.8392 63 36Z"
                            stroke="#6C757D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h3> اضف ملاحظة جديدة </h3>
                    <p> اضف ملاحظتك الجديد الان </p>
                    <button data-bs-toggle="modal" data-bs-target="#editModal2" class="d-flex active align-items-center justify-content-center py-2 gap-3 w-100">
                        اضف ملاحظة
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M10.4543 7.5V12.5M12.9543 10H7.95435M17.9543 10C17.9543 10.9849 17.7604 11.9602 17.3834 12.8701C17.0065 13.7801 16.4541 14.6069 15.7576 15.3033C15.0612 15.9997 14.2344 16.5522 13.3245 16.9291C12.4145 17.306 11.4393 17.5 10.4543 17.5C9.46943 17.5 8.49416 17.306 7.58422 16.9291C6.67428 16.5522 5.84748 15.9997 5.15104 15.3033C4.45461 14.6069 3.90216 13.7801 3.52525 12.8701C3.14834 11.9602 2.95435 10.9849 2.95435 10C2.95435 8.01088 3.74452 6.10322 5.15104 4.6967C6.55757 3.29018 8.46522 2.5 10.4543 2.5C12.4435 2.5 14.3511 3.29018 15.7576 4.6967C17.1642 6.10322 17.9543 8.01088 17.9543 10Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>
    <div class="modal fade modal-dialog-cente" id="editModal2" tabindex="-1" aria-labelledby="editModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content px-3">
            <div class="modal-heade pt-3">
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                <h1 class="modal-title fC-green fs-5" id="editModalLabel"> اضافة ملحوظة </h1>
            </div>
            <div class="modal-body  w-100">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="input">
                            <label class="form-label "> عنوان الملحوظة </label>
                            <input type="text" class="form-control form-control-l" placeholder=""
                                value=" محمد احمد  ">
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="input">
                            <label class="form-label "> تفاصيل الملحوظة </label>
                            <textarea class="form-control form-control-l" name="" rows="5" id=""></textarea>
                        </div>
                    </div>
                 
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success   bg-green px-4" style="border-radius: 20px;"> حفظ
                    البيانات </button>
                <button type="button" class="btn  solid px-4 " style="border-radius: 20px;" data-bs-dismiss="modal">
                    رجوع </button>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>


</script>
<style lang="scss">
.notes-container {
    // display: flex;
    // align-items: center;
    // flex-wrap: wrap;
    // gap: 20px;

    .note {
        border-radius: 16px;
        border: 1px solid #DEE2E6;
        background: #FFF;
        padding: 16px;
        height: 100%;
        &.active{
         justify-content: center;
         align-items: center;
         text-align: center;
         gap: 10px;
        }

        .head {
            span {
                color: #6C757D;
                font-size: 14px;
            }

            .circle {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #35D9BE;
            }
        }

        button {
            background-color: #fff;
            border-radius: 24px;
            border: 1px solid #43806C;
            color: #43806C;
            &.active{
                background-color: #43806C;
                color: #fff;
                margin-top: 70px;
            }
        }

        h3 {
            color: #212529;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #6C757D;
            font-size: 14px;
        }
    }
}
</style>