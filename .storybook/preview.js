import { addDecorator } from "@storybook/vue";
import vuetify from "./vuetify_storybook";
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);

addDecorator(() => ({
  vuetify,
  template: `
    <v-app>
    <v-main>
        <v-container fluid >
        <story/>
        </v-container>
    </v-main>
    </v-app>
    `,
}));
