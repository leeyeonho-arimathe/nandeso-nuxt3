<template>
  <div class="modal fade" id="reset-password-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="reset-password-modalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="reset-password-modalLabel">パスワードリセット</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <section>
            <h1></h1>
            <p>30分以内にメール記載のリンクからパスワードを再設定してください。</p>
          </section>
          <div>
            <div class="col-md-12">
              <label for="validationServer01" class="form-label">メールアドレス</label>
              <input type="text" class="form-control is-valid" id="validationServer01" placeholder="your_mail@domain.com" required>
            </div>
            <div class="mt-5">
              <p>メールが届かない場合、以下をご確認ください。</p>
              <ul>
                <li>入力されたメールアドレスが正しいか</li>
                <li>mail.nandeso.comのメールアドレスが拒否設定に含まれていないか</li>
                <li>迷惑メールフォルダに入っていないか</li>
              </ul>
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