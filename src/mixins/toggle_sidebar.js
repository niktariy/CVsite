import {EventBus} from "@/services/EventBus";

export default {
  methods: {
    toggle_menu() {
      EventBus.$emit('toggle_menu', (e) => {
        console.log(e, `Oh, that's nice. It's gotten click! :)`)
      });
    }
  }
};
