<template>
  <div>
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
          <h1>Клиентская база</h1>
        </div>
        <div class="block-main">
          <h1>Менеджмент программ тренировок</h1>
        </div>
        <div class="block-main">
          <h1>Менеджмент программ питания</h1>
        </div>
        <div class="block-main">
          <h1>Интеграция с телеграмом</h1>
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
      <dialog ref="dialog">AAAAAAAA</dialog>
      <default-button @click="openDialog">OPEN</default-button>
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
    const dialog = this.$refs.dialog;
    console.log(dialog);
    this.dialog = dialog;
    console.log(dialog.parentNode);
    const backdrop = document.querySelector("::backdrop");
    console.log(backdrop);
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
  width: 700px;
  text-overflow: clip;
}
.main-text h1 {
  font-size: 50px;
}
.main-text h1 span {
  font-size: 50px;
  background-image: linear-gradient(30deg, #c976d8, #52f5f2);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main-text h3 {
  font-size: 30px;
}
.main-photo {
  @include flex-centered;
  background: none;
  object-fit: cover;
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
  justify-content: space-around;
  height: fit-content;
  width: 100%;
}
.block-main {
  height: 300px;
  width: 260px;
  background: #00ffab;
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
