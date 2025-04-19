<template>
    <div v-if="store.openPayModal" class="payment-modal-overlay">
        <div class="payment-modal">
            <button class="close-btn" @click="store.openPayModal = false">×</button>
            <h5 class="mb-4"> خيارات الدفع </h5>
            <div class="card-icons">
                <label class="card-option">
                    <input type="radio" name="cardType" value="mada" v-model="selectedCard" />
                    <img src="/images/mada.png"/>
                </label>

                <label class="card-option">
                    <input type="radio" name="cardType" value="mastercard" v-model="selectedCard" />
                    <img src="/images/master.png"/>

                </label>

                <label class="card-option">
                    <input type="radio" name="cardType" value="visa" v-model="selectedCard" />
                    <img src="/images/visa.png"/>

                </label>
            </div>

            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="cardNumber"> اسم حامل البطاقة </label>
                    <input id="cardNumber" type="text" placeholder=" اسم حامل البطاقة " required />
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="expiry">تاريخ الإنتهاء</label>
                        <input id="expiry" type="text" placeholder="شهر/سنة" required />
                    </div>
                    <div class="form-group">
                        <label for="cvv">رمز التحقق (CVV)</label>
                        <input id="cvv" type="text" placeholder="CVV" required />
                    </div>
                </div>

                <div class="form-group">
                    <label for="holder">  رقم البطاقة </label>
                    <input id="holder" type="text" placeholder=" رقم البطاقة " required />
                </div>

                <button type="submit" class="submit-btn">إتمام الشراء</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();

const selectedCard = ref('')

const visible = ref(true)

const submit = () => {
    // Submit logic here
    alert('تم إرسال البيانات!')
    close()
}
</script>

<style lang="scss" scoped>
.payment-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.payment-modal {
    background: white;
    padding: 2rem;
    width: 700px;
    // width: 500px;
    border-radius: 10px;
    position: relative;
    direction: rtl;

    .close-btn {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .card-icons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1.5rem;

        .card-option {
            border: 1px solid #DFE4EA;
            position: relative;
            // border: 2px solid transparent;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            padding: 0.25rem;
            transition: border-color 0.3s;
            display: flex;
            width: 140px;
            height: 70px;
            padding: 11px 46px;
            justify-content: center;
            align-items: center;
          

            input[type="radio"] {
                display: none;
            }

            img {
                // height: 32px;
                width: 90%;
                pointer-events: none;
            }

            input[type="radio"]:checked+img {
                // border: 2px solid #4c8b5f;
                // border-radius: 8px;
            }

            // OR apply border to label if you prefer:
            input[type="radio"]:checked~img,
            &:has(input[type="radio"]:checked) {
                border-color: #4c8b5f;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .form-row {
            display: flex;
            gap: 1rem;

            .form-group {
                flex: 1;
            }
        }

        .form-group {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 0.5rem;
                font-weight: 600;
            }

            input {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 1rem;
            }
        }

        .submit-btn {
            background-color: #43806C;
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: 20px;
            font-size: 1.1rem;
            margin-top: 1rem;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background-color: #3a6f4d;
            }
        }
    }
}

@media (max-width:750px) {
    .payment-modal{
        width: 90% !important;
    }
}
</style>