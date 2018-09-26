import {EventBus} from "@/services/EventBus";

export default {
  methods: {
    toggle_menu() {
      EventBus.$emit('toggle_menu');
    }
  }
};
