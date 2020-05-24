<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Bewegungsmelder Aachen</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item">
                <router-link to="/">
                  <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                      <md-button slot="title" class="md-button md-button-link md-white md-simple" >
                        <i class="material-icons">home</i>
                        <p>Startseite</p>
                      </md-button>
                  </div>
                </a>
                </router-link>
              </li>
              <li class="md-list-item">
              <router-link to="/events">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button slot="title" class="md-button md-button-link md-white md-simple" >
                      <i class="material-icons">event</i>
                      <p>Veranstaltungen</p>
                    </md-button>
                  </div>
                </a>
              </router-link>
            </li>
              <li class="md-list-item">
                <router-link to="/groups">
                  <a
                    href="javascript:void(0)"
                    class="md-list-item-router md-list-item-container md-button-clean"
                  >
                    <div class="md-list-item-content">
                      <md-button slot="title" class="md-button md-button-link md-white md-simple" >
                        <i class="material-icons">group</i>
                        <p>Gruppen</p>
                      </md-button>
                    </div>
                  </a>
                </router-link>
              </li>

              <md-list-item
                href="https://twitter.com/BewegungAC"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Twitter</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="#"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Like us on Facebook</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="#"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Instagram</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import MobileMenu from '@/layout/MobileMenu';

let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info',
        ].includes(value);
      },
    },
  },
  data() {
    return {
      extraNavClasses: '',
      toggledClass: false,
    };
  },
  methods: {
    bodyClick() {
      const bodyClick = document.getElementById('bodyClick');

      if (bodyClick === null) {
        const body = document.querySelector('body');
        const elem = document.createElement('div');
        elem.setAttribute('id', 'bodyClick');
        body.appendChild(elem);

        const bodyClick = document.getElementById('bodyClick');
        bodyClick.addEventListener('click', this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      const scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
      const navbarColor = document.getElementById('toolbar');
      this.currentScrollValue = scrollValue;
      if (scrollValue > 400) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove('md-transparent');
      } else if (this.extraNavClasses) {
        this.extraNavClasses = '';
        navbarColor.classList.add('md-transparent');
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  },
};
</script>
