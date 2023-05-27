<template>
  <div>
    <div class="blurs"></div>
    <div class="home">
      <div class="main-text">
        <h1>Самая продвинутая платформа <span>для тренеров</span></h1>
        <h3>Вы охуеете от крутости</h3>
      </div>
      <div class="main-photo">
        <img src="@/assets/maxresdefault.jpg" alt="" />
      </div>
      <div class="block-container">
        <div class="block-main">
          <div class="content">
            <h1>Своя страница-визтка</h1>
            <p>Напечатай свой qr на дверях в фитнес клуб</p>
            <p>Будь самым продвинутым в своей деревне</p>
          </div>
          <div class="media"></div>
        </div>
        <div class="block-main">
          <div class="content">
            <h1>Управляйте клиентами</h1>
            <p>Все клиенты в одном месте.</p>
            <p>Отслеживайте прогресс в пару кликов.</p>
            <p>Подведение ол-тайм статистики по выбранным упражнениям.</p>
          </div>
        </div>
        <div class="block-main">
          <div class="content">
            <h1>Составляйте программы тренировок и питания</h1>
            <p>
              Интуитивно понятный интерфейс для составления програм тренировок и
              питания.
            </p>
            <p>Автокомплит,</p>
          </div>
        </div>
        <div class="block-main">
          <div class="content">
            <h1>Библиотека продуктов и упражнений</h1>
            <p>
              Видео с техникой и описанием упражнений, удобный поиск и
              сортировка.
            </p>
            <p>Сотни продуктов с указанием пищевой ценности.</p>
            <p>Добавьте свои</p>
          </div>
        </div>
        <div class="block-main">
          <div class="content">
            <h1>Интеграция с телеграмом</h1>
            <p>
              Не нужно ничего скачивать! Редактируйте и создавайте программы в
              нашем боте.
            </p>
            <p>Доступ к кабинету прямо из диалога с клиентом.</p>
          </div>
        </div>
      </div>
      <div class="why-us">
        <div class="us-photo">
          <img src="@/assets/photo-us.jpg" alt="" />
        </div>
        <div class="us-content">
          <h1>Идёт информация почему надо выбрать именно нас</h1>
        </div>
      </div>
      <div></div>
      <h1>Some silly text</h1>
      <h2></h2>
      <!-- <div
        style="
          position: absolute;
          width: 300px;
          height: 300px;
          background: #444;
          z-index: 1;
        "
      >
        <div class="button">SALAMALEKUM</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  setup() {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      // new Date().toDateString()
      return date;
    };
  },
  mounted() {
    // const dialog = this.$refs.dialog;
    // console.log(dialog);
    // this.dialog = dialog;
    // console.log(dialog.parentNode);
    // const backdrop = document.querySelector("::backdrop");
    // console.log(backdrop);
  },
  name: "HomeView",
  components: {},
  data() {
    return {
      minDate: new Date().addDays(-30).toDateString(),
      maxDate: new Date().addDays(360).toDateString(),
      visible: true,
    };
  },
  methods: {
    handle(date) {
      console.log(date);
    },
    openDialog() {
      this.dialog.showModal();
    },
    closeDialog() {
      this.dialog.close();
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
}
.blurs {
  position: absolute;
  background-image: linear-gradient(rgb(249, 15, 237), #00ffab);
  filter: blur(8em);
  opacity: 0.5;
  width: 500px;
  height: 500px;
  border-radius: 50% 20%;
}
// .home::before,
// .home::before {
//   content: "";
//   inset: 0;
//   position: fixed;
//   background: rgb(86, 76, 76);
//   opacity: 0.3;
//   z-index: -1;
//   background-image: linear-gradient(rgb(249, 15, 237), #00ffab);
//   filter: blur(1em);
// }
.button {
  position: relative;
  margin: auto;
  width: 260px;
  height: 100px;
  border-radius: 20px;
  // color: #000;
  border: none;
  background: #000;
}
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
.main-text {
  margin: auto;
  margin-top: 4rem;
  max-width: 70rem;
  text-overflow: clip;
}
.main-text h1 {
  font-size: 6vw;
}
.main-text h1 span {
  // font-size: 50px;
  background-image: linear-gradient(30deg, #c976d8, #52f5f2);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main-text h3 {
  font-size: 3vw;
  opacity: 0.7;
}
.main-photo {
  @include flex-centered;
  background: none;
  object-fit: cover;
  margin-top: 3rem;
}
.main-photo img {
  width: 70%;
  object-fit: cover;
}
.button::before,
.button::after {
  z-index: -1;
  background: conic-gradient(
    from var(--gradient-angle),
    #00ffab,
    #37e2d5,
    #37e2d5,
    #ff00e4,
    #ff00e4,
    #00ffab
  );
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  filter: blur(2px);
  animation: rotation 25s linear infinite;
}
.button::before {
  filter: blur(25px);
}

.card {
  height: 60vh;
  aspect-ratio: 1 / 1.5;
  background: var(--clr-1);
  border-radius: 0.5rem;

  position: relative;
}
.block-container {
  display: flex;
  flex-direction: column;
  background: #37e2d5;
}
.block-main {
  display: flex;
}
.block-main .content {
}
.block-main .media {
}
.why-us {
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: flex-end;
  margin-top: 20px;
}
.us-photo {
  // background: #c976d8;
  height: 600px;
  width: 800px;
  object-fit: cover;
}
.us-photo img {
  height: 600px;
}
.us-content {
  height: 600px;
  width: 500px;
  background: #52f5f2;
}
.card::before,
.card::after {
  content: "";
  position: absolute;
  inset: -0.5rem;
  z-index: -1;
  background: conic-gradient(
    from var(--gradient-angle),
    #00ffab,
    #37e2d5,
    #37e2d5,
    #ff00e4,
    #ff00e4,
    #00ffab
  );
  border-radius: inherit;
  animation: rotation 20s linear infinite;
}

.card::after {
  filter: blur(3.5rem);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
</style>
