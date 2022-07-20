<template>
  <div id="app">
    <div class="container">
      <HeaderNav />
    </div>
    <div class="container mt-5 pt-3">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">タイトル</label>
        <input type="text" class="form-control" id="exampleFormControlInput1">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">相談内容</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">ハッシュタグ<a href="#" data-bs-toggle="modal" data-bs-target="#explane-message-modal"><span class="material-symbols-outlined">help</span></a></label>
        <input type="text" class="form-control" id="exampleFormControlInput2">
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-secondary" type="button">下書き</button>
        <button class="btn btn-primary" type="button">公開</button>
      </div>
    </div>
    <ModalsExplaneMessage />
  </div>
</template>

<style>


</style>