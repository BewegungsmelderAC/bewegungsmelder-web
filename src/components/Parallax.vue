<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>
<script>
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
export default {
  name: 'parallax',
  data() {
    return {
      styles: {},
      debounceTimeout: 6,
    };
  },
  methods: {
    handleScroll(scrollVal) {
      const oVal = scrollVal / 3;
      this.styles = {
        transform: `translate3d(0, ${oVal}px,0)`,
      };
    },
    checkForParallax(scrollVal) {
      const fn = debounce(
        () => this.handleScroll(scrollVal),
        this.debounceTimeout,
      );
      fn();
    },
  },
  mounted() {
    const self = this;
    window.addEventListener('scroll', function () {
      if (window.innerWidth > 991) {
        const scrollVal = this.scrollY;
        self.checkForParallax(scrollVal);
      }
    });
  },
};
</script>
<style>
  .page-header {
    background-image: url(https://bewegungsmelder-aachen.de/wp-content/uploads/2018/05/header_bewegungsmelder_aachen.png)
  }
</style>
