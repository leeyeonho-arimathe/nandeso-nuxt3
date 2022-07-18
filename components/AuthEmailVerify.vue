<template>
  <div class="modal fade" id="auth-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="auth-modalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="auth-modalLabel">メールアドレス認証</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <section>
            <h1>認証コードの確認</h1>
            <p>xxxx@xxxxにメールの送信が完了しました。30分以内にメール記載の6桁の認証コードを入力してください。</p>
          </section>
          <div>
            <p>メールが届かない場合、以下をご確認ください。</p>
            <div class="col-md-12">
              <label for="validationServer01" class="form-label">認証コード</label>
              <input type="text" class="form-control is-invalid" id="validationServer01" value="######" required>
              <div class="invalid-feedback">認証コードが一致しません!</div>
            </div>
            <div class="mt-5">
              <ul>
                <li>入力されたメールアドレスが正しいか</li>
                <li>mail.nandeso.comのメールアドレスが拒否設定に含まれていないか</li>
                <li>迷惑メールフォルダに入っていないか</li>
              </ul>
            </div>
            <div class="text-center">
              <a href="#">メールを再送する</a>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">クローズ</button>
        <button type="button" class="btn btn-primary">完了する</button>
      </div>
    </div>
  </div>
</div>


</template>