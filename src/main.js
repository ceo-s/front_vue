import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Directives from "@/directives";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import UI from "@/components/shared";

const app = createApp(App);

UI.forEach((Component) => {
  app.component(Component.name, Component);
});

Directives.forEach((Directive) => {
  app.directive(Directive.name, Directive);
});

// console.log(router.options.routes)

app.use(store).use(router).use(autoAnimatePlugin).mount("#app");
