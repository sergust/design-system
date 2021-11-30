<!-- This component has been made for demo and testing purposes. -->
<template>
  <v-btn @click="clicked">
    <i class="fas fa-rocket" />
    Button
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    // Test Composition API
    const clicked = () => {
      console.log("clicked");
    };

    return { clicked };
  },
});
</script>
