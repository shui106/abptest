import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class MainSidebarComponent extends Vue {
    loadImg() {
        require("../../img/user2-160x160.jpg");
        return "dist/img/user2-160x160.jpg";
    }
}
