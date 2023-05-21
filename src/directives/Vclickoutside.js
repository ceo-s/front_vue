export default {
    name: "clickoutside",
    mounted: (el, binding) => {
        el.clickOutsideEvent = event => {
          if (!(el == event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener("click", el.clickOutsideEvent);
      },
      unmounted: (el, binding) => {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
}