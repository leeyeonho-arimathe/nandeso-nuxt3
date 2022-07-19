<template>
  <div id="app">
    <div class="container">
      <HeaderNav />
    </div>
    <div class="container mt-5 pt-3">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">メールアドレス</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">パスワード</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 text-center">
          <a href="#" data-bs-toggle="modal" data-bs-target="#reset-password-modal">パスワードが分からない方はこちら</a>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-primary">ログイン</button>
        </div>
      </form>
    </div>
    <!-- model -->
    <ModalsResetPassword />
    <!-- /model -->
  </div>
</template>