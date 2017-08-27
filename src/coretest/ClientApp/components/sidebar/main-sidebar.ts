import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        SidebarUserpanelComponent: require('./sidebar-userpanel.vue.html'),
        SidebarSearchformComponent: require('./sidebar-searchform.vue.html'),
        SidebarMenuComponent: require('./sidebar-menu.vue.html')
    }
})
export default class MainSidebarComponent extends Vue {
}
