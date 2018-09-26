import {EventBus} from "@/services/EventBus";

const ANIMATED_CLASS = 'animated';
const TABS_CLASS_OPENED = 'slideInRight';
const TABS_CLASS_CLOSED = 'slideOutRight';
const BURGER_CLASS_OPENED = 'is-opened';

export default {
  mounted() {
    EventBus.$on('toggle_menu', () => {
      let tab_list = document.getElementById('header-nav');
      let tab_list_classes = tab_list.classList;
      let burger = document.querySelectorAll('.burger')[0];

      debugger

      if (!tab_list_classes.contains(TABS_CLASS_OPENED)) {
        debugger
        document.documentElement.style.overflow = 'hidden';
        burger.classList.add(BURGER_CLASS_OPENED);
        tab_list_classes.remove(TABS_CLASS_CLOSED);
        tab_list_classes.add(ANIMATED_CLASS, TABS_CLASS_OPENED);
      }

      document.documentElement.style.overflow = 'auto';
      burger.classList.remove(BURGER_CLASS_OPENED);
      tab_list_classes.add(TABS_CLASS_CLOSED);
      tab_list_classes.remove(TABS_CLASS_OPENED);
    });
  }
}
