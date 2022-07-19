<template>
  <div id="app">
    <div class="container">
      <HeaderNav />
    </div>
    <div class="container mt-5 pt-3">
      <form>
        <div class="col-md-12">
          <label for="validationServer05" class="form-label">既存パスワード</label>
          <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
          <div id="validationServer05Feedback" class="invalid-feedback">パスワードが正しくありません</div>

          <label for="validationServer05" class="form-label">新しいパスワード</label>
          <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
          <div id="validationServer05Feedback" class="invalid-feedback">パスワードは英数字（8桁以上）の組み合わせにしてください!</div>

          <label for="validationServer06" class="form-label">パスワード確認</label>
          <input type="text" class="form-control is-invalid" id="validationServer06" aria-describedby="validationServer06Feedback" required>
          <div id="validationServer06Feedback" class="invalid-feedback">パスワードが一致しません!</div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
          <button type="button" class="btn btn-primary">更新</button>
        </div>
      </form>
    </div>
  </div>
</template>