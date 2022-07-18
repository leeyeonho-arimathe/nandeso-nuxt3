<template>
  <div id="app">
    <div class="container">
      <HeaderNav />
    </div>
    <div class="container mt-5 pt-3">
      <h1>アカウント登録</h1>
      <div class="card">
        <div class="card-header">ログイン情報</div>
        <div class="card-body">
          <div class="col-md-5">
            <label for="validationServerUsername" class="form-label">メールアドレス</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">@</span>
              <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="your_mail@domain.com" required>
              <div id="validationServerUsernameFeedback" class="invalid-feedback">既に登録済みのメールアドレスです!</div>
            </div>
          </div>
          <div class="col-md-5">
            <label for="validationServer05" class="form-label">パスワード</label>
            <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
            <div id="validationServer05Feedback" class="invalid-feedback">パスワードは英数字（8桁以上）の組み合わせにしてください!</div>

            <label for="validationServer06" class="form-label">パスワード確認</label>
            <input type="text" class="form-control is-invalid" id="validationServer06" aria-describedby="validationServer06Feedback" required>
            <div id="validationServer06Feedback" class="invalid-feedback">パスワードが一致しません!</div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="card-header">追加情報</div>
        <div class="card-body row g-3">
          <div class="col-md-4">
            <label for="validationServer01" class="form-label">表示名</label>
            <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
            <div class="valid-feedback">登録可能です!</div>
          </div>
          <div class="col-md-4">
            <label for="validationServer04" class="form-label">年代</label>
            <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
              <option selected disabled value="">選択</option>
              <option>10代</option>
              <option>20代</option>
              <option>30代</option>
              <option>40代</option>
              <option>50代</option>
              <option>60代</option>
              <option>その他</option>
            </select>
            <div id="validationServer04Feedback" class="invalid-feedback">年代は必ず選択してください!</div>
          </div>
          <div class="col-md-4">
            <label for="inlineRadioOptions" class="form-label">性別</label>
            <select class="form-select is-invalid" id="validationServer07" aria-describedby="validationServer07Feedback" required>
              <option selected disabled value="">選択</option>
              <option>男子</option>
              <option>女子</option>
              <option>その他</option>
            </select>
            <div id="validationServer07Feedback" class="invalid-feedback">性別は必ず選択してください!</div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="form-check">
          <input class="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
          <label class="form-check-label" for="invalidCheck3">
            Nandeso <a class="link-info" data-bs-toggle="modal" data-bs-target="#privacy-policy-modal">プライバシーポリシー</a>を確認の上、同意して送信してください。
            取得したメールアドレスは、以下の目的で使用します。
            <ul>
              <li>ログイン情報</li>
              <li>問い合わせ対応、アンケートに関する連絡</li>
              <li>サービスに関する連絡</li>
            </ul>
          </label>
          <div id="invalidCheck3Feedback" class="invalid-feedback">同意に確認する必要があります。</div>
        </div>
      </div>
      <div class="col-12 my-3 text-center">
        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#auth-email-modal">次へ</a>
      </div>
    </div>
    <!-- Modals -->
    <ModalsPrivacyPolicy />
    <ModalsAuthEmailVerify />
    <!-- /Modals -->
  </div>
</template>

<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
}
</style>