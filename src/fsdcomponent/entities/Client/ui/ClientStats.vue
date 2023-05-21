<template>
  <div class="client-stats">
    <h1>Параметры клента:</h1>
    <div>
      <h3>Рост: {{ clientStats.height }}</h3>
      <h3>Вес: {{ clientStats.weight }}</h3>
      <h3>Процент жира: {{ clientStats.bodyfat_percent }}</h3>
      <h3>Шея: {{ clientStats.neck }}</h3>
      <h3>Плечи: {{ clientStats.shoulders }}</h3>
      <h3>Грудь: {{ clientStats.chest }}</h3>
      <h3>Бицепс: {{ clientStats.bicep }}</h3>
      <h3>Предплечье: {{ clientStats.forearm }}</h3>
      <h3>Талия: {{ clientStats.waist }}</h3>
      <h3>Ягодицы: {{ clientStats.glutes }}</h3>
      <h3>Ноги: {{ clientStats.legs }}</h3>
      <h3>Икры: {{ clientStats.calves }}</h3>
      <h5>Дата обновления: {{ clientStats.date_update }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clientStats: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.client-stats {
  height: 100%;
  width: 40%;
  background: #333;
}
</style>
