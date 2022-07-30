<template>
  <div id="app">
    <div class="container">
      <HeaderNav />
    </div>
    <div class="container mt-5 pt-3 text-center">
      <main class="form-signin">
        <form @submit.prevent="signIn">
          <img class="mb-4" src="https://placeimg.com/52/52/any" alt="" width="72" height="57">
          <div class="form-floating">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">メールアドレス</label>
          </div>
          <div class="form-floating">
            <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
            <label for="floatingPassword">パスワード</label>
          </div>

          <div class="checkbox mb-3"><label><input v-model="rememberMe" type="checkbox" value="remember-me"> Remember me</label></div>
          <div class="mb-3">
            <a href="#" data-bs-toggle="modal" data-bs-target="#reset-password-modal">パスワードが分からない方はこちら</a>
          </div>
          <div class="mb-3" v-if="loginError">
            {{ loginError }}
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">ログイン</button>
        </form>
      </main>
    </div>
    <!-- model -->
    <ModalsResetPassword />
    <!-- /model -->
  </div>
</template>

<script setup lang="ts">
import {
  firebaseAuthValidateMessage
} from '@/assets/js/validate.js'

const email = ref('');
const password = ref('');
const loginError = ref();
const rememberMe = ref(true);

const signIn = async () => {
  try {
    const auth = await signInUser(email.value, password.value, rememberMe.value);
    if (auth) {
      return navigateTo('/');
    }
  } catch (e) {
    loginError.value = firebaseAuthValidateMessage(e);
  }
}

</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>