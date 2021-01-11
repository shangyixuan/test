
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
// import {Swipe,SwipeItem,DatetimePicker,Button} from 'vant';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Cascader,Tabs,TabPane,Radio,RadioButton,RadioGroup,Message,Table,
	TableColumn,Dialog,Button} from 'element-ui';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// Vue.use(Swipe);
// Vue.use(SwipeItem);
// Vue.use(DatetimePicker);

Vue.use(Cascader);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Message);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Button);

new Vue({
	el: '#app',
	render: h => h(App)
}); 