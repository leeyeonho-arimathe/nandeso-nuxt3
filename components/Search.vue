<template>
  <div class="mb-3 mt-5 pt-5 justify-content-center search-container">
    <div class="my-3">
      <p class="text-center fw-light">あなたが悩んでいるのは何ですか？少しお聞かせください。</p>
      <form>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="最近子育てが大変です" aria-label="text with button addon" aria-describedby="button-addon1">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">検索</button>
        </div>
      </form>
    </div>
    <div>
      <div class="mb-3">
        <div class="list-group w-auto">
          <PartsListItem />
          <PartsListItem />
          <PartsListItem />
          <PartsListItem />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>