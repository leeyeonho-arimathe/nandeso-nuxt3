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
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">メールアドレス</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">パスワード</label>
          </div>

          <div class="checkbox mb-3"><label><input type="checkbox" value="remember-me"> Remember me</label></div>
          <div class="mb-3">
            <a href="#" data-bs-toggle="modal" data-bs-target="#reset-password-modal">パスワードが分からない方はこちら</a>
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

<script setup>
const firebaseUser = useFirebaseUserStore();

const signIn = async () => {
  const email = "mclljr1243@gmail.com";
  const password = "123123123";
  await signInUser(email, password);
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