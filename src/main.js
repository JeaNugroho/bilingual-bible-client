import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
// import { Icon } from 'primevue/icons'
import 'primevue/resources/themes/viva-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import App from './App.vue'
import './index.css'

import Button from 'primevue/button';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/* use like this in any component
<font-awesome-icon icon="fa-solid fa-user-secret" />
*/
const app = createApp(App)
app.use(PrimeVue)
app.component('prime-vue-button', Button)
// app.component('prime-vue-icon', Icon)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
