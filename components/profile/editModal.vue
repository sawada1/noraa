<template>
    <div class="modal fade modal-dialog-cente" id="editModal" tabindex="-1" aria-labelledby="editModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content px-3">
                <div class="modal-heade pt-3">
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    <h1 class="modal-title fC-green fs-5" id="editModalLabel"> تعديل البيانات </h1>
                </div>
                <div class="modal-body  w-100">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <div class="input">
                                <label class="form-label "> الاسم كامل </label>
                                <input type="text" class="form-control form-control-l" placeholder=""
                                    value=" محمد احمد  ">
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <div class="input">
                                <label class="form-label "> البريد الإلكتروني </label>
                                <input type="email" class="form-control form-control-l" placeholder="mohamed@gmail.com">
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <div class="input">
                                <label class="form-label "> رقم الجوال </label>
                                <input type="text" class="form-control form-control-l" placeholder=""
                                    value="8347374623">
                                <div class="num">
                                    <div class="divide"></div>
                                    <span>
                                        966+
                                    </span>
                                </div>
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