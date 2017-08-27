import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        MainHeaderComponent: require('../header/main-header.vue.html'),
        MainSidebarComponent: require('../sidebar/main-sidebar.vue.html'),
        ContentWrapperComponent: require('../content/content-wrapper.vue.html'),
        MainFooterComponent: require('../footer/main-footer.vue.html'),
        ControlSidebarComponent: require('../control/control-sidebar.vue.html'),
        ControlSidebarBgComponent: require('../control/control-sidebar-bg.vue.html')
    }
})
export default class AppComponent extends Vue {
}
