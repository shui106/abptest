import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from "jquery";

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 0;

    incrementCounter() {
        this.currentcount++;
        $("#aa").html(this.currentcount.toString());
    }
}
