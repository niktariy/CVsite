import {EventBus} from "@/services/EventBus";

export default {
  methods: {
    toggle_menu() {
      EventBus.$emit('toggle_menu', () => {
        console.log(`Oh, that's nice. It's gotten click! :)`)
      });
    }
  }
};
