<template>
  <div class="mt-5 pt-5 justify-content-center search-container">
    <div class="form-search">
      <p class="text-center fw-light">あなたが悩んでいるのは何ですか？少しお聞かせください。</p>
      <form>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Keyword" aria-label="text with button addon" aria-describedby="button-addon1">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">検索</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

.form-search {
  max-width: 720px;
  padding: 15px;
  margin: auto;
}

</style>