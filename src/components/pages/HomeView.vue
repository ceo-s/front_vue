<template>
  <div>
    <div class="blurs"></div>
    <div class="home">
      <div class="text main">
        <h1>Самая продвинутая платформа <span>для тренеров</span></h1>
        <p>Вы будете в шоке от крутости</p>
      </div>
      <div class="main-photo-container">
        <img class="main-photo" src="@/assets/maxresdefault.jpg" alt="" />
      </div>
      <div class="text intro">
        <h2>Инновационные фичи, достойные вашего внимания</h2>
        <p>Готов поспорить вы уже в шоке</p>
      </div>
      <div ref="blocks" class="block-container">
        <div data-order="1" class="block">
          <div class="icon-container">
            <cabinet-icon
              style="margin-top: 12px; margin-left: 2px"
              :size="1.4"
            />
          </div>
          <h4>Свой лэндос</h4>
          <p>По обложке встречают так-то</p>

          <div class="media"></div>
        </div>
        <div data-order="2" class="block">
          <div class="icon-container">
            <clients-icon style="margin-top: 6px" :size="1.2" />
          </div>
          <h4>Управляйте клиентами</h4>
          <p>Доступ ко всем подопечным в одном месте</p>
        </div>
        <div data-order="3" class="block">
          <div class="icon-container">
            <programs-icon style="margin-top: 8px" :size="1.3" />
          </div>
          <h4>Составление программ</h4>
          <p>Конструктор программ тренировок и питания</p>
        </div>
        <div data-order="4" class="block">
          <div class="icon-container">
            <library-icon style="margin-top: 8px" :size="1.1" />
          </div>
          <h4>Общедоступная библиотека</h4>
          <p>Сотни упражнений, продуктов и прочего</p>
        </div>
        <div data-order="5" class="block">
          <div class="icon-container">
            <telegram-icon
              style="margin-top: 8px; margin-left: -4px"
              :size="1.2"
            />
          </div>
          <h4>Интеграция с телеграмом</h4>
          <p>Телеграм бот с функционаом, не уступающим сайту</p>
        </div>
        <div data-order="6" class="block">
          <div class="content">
            <div class="icon-container">
              <community-icon
                style="margin-top: 8px; margin-left: 1px"
                :size="1.25"
              />
            </div>
            <h4>Коммъюнити</h4>
            <p>
              Телеграм чат с единомышленниками, исполюзующими наше приложение
            </p>
          </div>
        </div>
      </div>
      <div ref="detail1" class="block-detail">
        <div class="content">
          <h2>Нереальный менеджмент всех процессов</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem
            ipsum quo dicta libero officiis necessitatibus ullam, ad pariatur
            aut!
          </p>

          <div class="option">
            <div class="icon-container"></div>
            <div class="content">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                vero.
              </p>
            </div>
          </div>
          <div class="option">
            <div class="icon-container"></div>
            <div class="content">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                vero.
              </p>
            </div>
          </div>
        </div>
        <div class="media">
          <img src="@/assets/block-detail-1.jpeg" alt="" />
        </div>
      </div>
      <div ref="detail2" class="block-detail">
        <div class="content">
          <h2>Нереальный менеджмент всех процессов</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem
            ipsum quo dicta libero officiis necessitatibus ullam, ad pariatur
            aut!
          </p>
          <div class="option">
            <div class="icon-container"></div>
            <div class="content">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                vero.
              </p>
            </div>
          </div>
          <div class="option">
            <div class="icon-container"></div>
            <div class="content">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                vero.
              </p>
            </div>
          </div>
        </div>
        <div class="media">
          <img src="@/assets/block-detail-2.jpeg" alt="" />
        </div>
      </div>

      <div ref="startNow" class="start-now">
        <h2>Регистрируйтесь прямо сейчас!</h2>
        <div>
          <default-button>Lorem </default-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
const blocks = ref();
const detail1 = ref();
const detail2 = ref();
const startNow = ref();
const downAnimOptions = (y) => {
  return {
    initial: {
      opacity: 0,
      y: y,
    },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
      },
    },
  };
};
const sideAnimOptions = (x) => {
  return {
    initial: {
      opacity: 0,
      x: x,
    },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1000,
      },
    },
  };
};
useMotion(blocks, downAnimOptions(30));
useMotion(detail1, sideAnimOptions(50));
useMotion(detail2, sideAnimOptions(-50));
useMotion(startNow, downAnimOptions(20));
</script>
<script>
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "HomeView",
  mounted() {
    // const dialog = this.$refs.dialog;
    // console.log(dialog);
    // this.dialog = dialog;
    // console.log(dialog.parentNode);
    // const backdrop = document.querySelector("::backdrop");
    // console.log(backdrop);
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      // new Date().toDateString()
      return date;
    };
  },
  data() {
    return {
      minDate: this.addDays(-30).toDateString(),
      maxDate: this.addDays(360).toDateString(),
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
    addDays(days) {
      var date = new Date();
      date.setDate(date.getDate() + days);

      return date;
    },
  },
};
</script>

<style scoped lang="scss">
.route {
  margin: 0;
}
.home {
  margin-top: -2em;
  // position: relative;
  // z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blurs {
  position: absolute;
  background-image: linear-gradient($color-purple, $color-blue);
  filter: blur(8em);
  opacity: 0.5;
  width: 500px;
  height: 500px;
  border-radius: 50% 20%;
  z-index: -1;
}
.text {
  p {
    @media (width < 980px) {
      font-size: 1.4em;
    }
    @media (width < 600px) {
      font-size: 1em;
    }
    @media (width < 420px) {
      font-size: 0.8em;
    }
    font-size: 1.7em;
  }
}
.main {
  margin-top: 10vh;
  padding: 10px;
  h1 {
    @media (width < 980px) {
      font-size: 2.8em;
    }
    @media (width < 600px) {
      font-size: 2em;
    }
    @media (width < 420px) {
      font-size: 1.8em;
    }
    font-size: 3.4em;
    span {
      font-size: 1.08em;
      background: -webkit-linear-gradient(-80deg, $color-pink, $color-blue);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
h2 {
  @media (width < 980px) {
    font-size: 2em;
  }
  @media (width < 600px) {
    font-size: 1.6em;
  }
  @media (width < 420px) {
    font-size: 1.4em;
  }
  font-size: 2.8em;
  font-weight: 400;
}
.intro {
  margin-top: 4vh;
  padding: 10px;
}
.main-photo-container {
  @include bordered;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  aspect-ratio: 7/4;
  object-fit: cover;
  @media (width < 980px) {
    width: 86%;
  }
  @media (width < 500px) {
    width: 96%;
  }
  width: 78%;
  .main-photo {
    height: 100%;
  }
}
.reg2 {
  @include neon-border(40deg, $color-pink, $color-blue, 2px, 4px);
  border-radius: 30px;
  background: $color1;
  width: 140px;
  height: 50px;
  border: none;
}

.block-container {
  display: grid;
  @media (width < 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (width < 600px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 26px;
  padding: 4%;
  .block {
    @include bordered;
    // height: 240px;
    background: $color2;
    padding: 34px 26px 46px;
    text-align: start;
    h4 {
      font-size: 1.2em;
    }
    p {
      font-weight: 300;
    }
  }
}
.icon-container {
  @include flex-centered;
  height: 64px;
  aspect-ratio: 1/1;
  background: $color3;
  border-radius: 16px;
  margin-bottom: 20px;
}
.block-detail:nth-child(even) {
  flex-direction: row-reverse;
  @media (width < 900px) {
    flex-direction: column;
    align-items: center;
  }
}
.block-detail {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  gap: 6%;
  margin: 20px 0;
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
    p {
      font-weight: 300;
    }
    .option {
      display: flex;
      gap: 32px;
      margin: 20px 0;
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
.start-now {
  @include bordered;
  @include neon-shadow(45deg, $color-blue, $color-pink, 1, 28px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em 0;
  width: 80%;
  aspect-ratio: 4/1;
  background: $color2;
  h2 {
    margin-left: 1em;
    font-size: 1.6em;
    max-width: 60%;
  }
  div {
    margin-left: auto;
    margin-right: auto;
  }
  div:first:active {
    @include neon-border(45deg, $color-blue, $color-pink, 6px, 16px);
  }
  @media (width < 800px) {
    flex-direction: column;
    justify-content: space-around;
    * {
      margin: 10px;
    }
  }
}
</style>
