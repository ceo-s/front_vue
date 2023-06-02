<template>
  <div class="block-detail">
    <div class="content">
      <h2><slot name="header"></slot></h2>
      <p>
        <slot name="content"></slot>
      </p>

      <div>A</div>
      <div>b</div>
    </div>

    <div class="media">
      <slot name="image"></slot>
      <img src="@/assets/block-detail-1.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.block-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  gap: 10%;
  @media (width < 900px) {
    flex-direction: column;
    align-items: center;
  }
  .content {
    text-align: start;
    max-width: 520px;
    @media (width < 900px) {
      max-width: 600px;
      min-width: auto;
    }
  }
  .media {
    @include bordered;
    width: 100%;
    max-width: 600px;
    object-fit: fill;
    overflow: hidden;
    height: fit-content;
    img {
      margin-bottom: -10px;
      inset: 0;
      width: 100%;
    }
  }
}
</style>
