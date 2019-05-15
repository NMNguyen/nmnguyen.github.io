<template>
<div id="fullbody">
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Đăng nhập</h5>
                        <form class="form-signin" @submit="login">
                            <div class="form-label-group">
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address"  v-model="email" required autofocus>
                                <label for="inputEmail">Email address</label>
                            </div>
                            <b-alert variant="danger" :show="error.email">{{error.message}}</b-alert>

                            <div class="form-label-group">
                                <input type="password"  v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
                                <label for="inputPassword">Password</label>
                            </div>
                            <b-alert variant="danger" :show="error.password">{{error.message}}</b-alert>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Ghi nhớ mật khẩu</label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase"                                     :disabled="loading"
                                    type="submit">Sign in</button>
                            <hr class="my-4">
<!--                            <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>-->
<!--                            <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>-->
                            <a href="../">Quên Mật Khẩu!</a> &nbsp;·&nbsp;
                            <a href="https://cjs.zendesk.com/hc/vi/requests/new">Cần giúp đỡ?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<style >
    :root {
        --input-padding-x: 1.5rem;
        --input-padding-y: .75rem;
    }

    #fullbody {
        background: #007bff;
        background: linear-gradient(to right, #2077a0, #42cadd);
        height: 100%;
    }

    .card-signin {
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    }

    .card-signin .card-title {
        margin-bottom: 2rem;
        font-weight: 300;
        font-size: 1.5rem;
    }

    .card-signin .card-body {
        padding: 2rem;
    }

    .form-signin {
        width: 100%;
    }

    .form-signin .btn {
        font-size: 80%;
        border-radius: 5rem;
        letter-spacing: .1rem;
        font-weight: bold;
        padding: 1rem;
        transition: all 0.2s;
    }

    .form-label-group {
        position: relative;
        margin-bottom: 1rem;
    }

    .form-label-group input {
        height: auto;
        border-radius: 2rem;
    }

    .form-label-group>input,
    .form-label-group>label {
        padding: var(--input-padding-y) var(--input-padding-x);
    }

    .form-label-group>label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin-bottom: 0;
        /* Override default `<label>` margin */
        line-height: 1.5;
        color: #495057;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: all .1s ease-in-out;
    }

    .form-label-group input::-webkit-input-placeholder {
        color: transparent;
    }

    .form-label-group input:-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-moz-placeholder {
        color: transparent;
    }

    .form-label-group input::placeholder {
        color: transparent;
    }

    .form-label-group input:not(:placeholder-shown) {
        padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
        padding-bottom: calc(var(--input-padding-y) / 3);
    }

    .form-label-group input:not(:placeholder-shown)~label {
        padding-top: calc(var(--input-padding-y) / 3);
        padding-bottom: calc(var(--input-padding-y) / 3);
        font-size: 12px;
        color: #777;
    }

    .btn-google {
        color: white;
        background-color: #ea4335;
    }

    .btn-facebook {
        color: white;
        background-color: #3b5998;
    }
</style>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from '@/firebase';
    import {FirebaseError} from 'firebase';
import User from '../models/User';

    export default Vue.extend({
        name: "LoginPage",
        data() {
            return {
                email: "",
                password: "",
                loading: false,
                error: {
                    email: false,
                    password: false,
                    message: '',
                }
            }
        },

        methods: {
            async login(ev: Event): Promise<any>
            {
                ev.preventDefault();
                this.loading = true;
                this.error = {
                    email: false,
                    password: false,
                    message: '',
                };

                try {
                    const credential = await fauth.signInWithEmailAndPassword(
                        this.email,
                        this.password
                    );
                    const uid = credential.user ? credential.user.uid : '';
                    const user = await (new User).getById(uid);

                    this.$router.replace('/');
                } catch (e) {
                    const error = e as FirebaseError;
                    this.error = {
                        email: error.code == 'auth/user-not-found',
                        password: error.code == 'auth/wrong-password',
                        message: error.message,
                    };

                    // @ts-ignore
                    this.$log.error(error);
                    this.$toasted.error(error.message, {
                        position: 'top-center',
                    });
                }

                this.loading = false;
            }
        },

        mounted() {
            fauth.onAuthStateChanged(user=>{
                if (user) {
                    this.$router.replace('/');
                }
            })
        },

    });
</script>
