import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import 'amfe-flexible'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import router from './router/index'
import store from './store'
import './api/mock'
import { ActionBar, Icon, Stepper, Tab, Tabs, TreeSelect, ActionBarIcon, ActionBarButton } from 'vant'
import { Checkbox, CheckboxGroup, SubmitBar, ContactCard, Card, Button, Dialog, AddressList } from 'vant';
import { AddressEdit, Form, Field, CellGroup} from 'vant'
//1引入所需组件 
// import { Button, Icon } from 'vant'
//2引入组件样式
import 'vant/lib/index.css'
const app = createApp(App)
app.use(router).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper)
app.use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(store).use(Checkbox);
app.use(CheckboxGroup).use(SubmitBar).use(ContactCard).use(Card).use(Button).use(Dialog)
app.use(AddressList).use(AddressEdit)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')

