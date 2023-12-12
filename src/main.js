import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret,
    faUser,
    faCheck,
    faTruck,
    faArrowLeft,
    faBoxesPacking,
    faStar,
    faMagnifyingGlass,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret, 
    faUser, 
    faCheck, 
    faTruck,
    faArrowLeft,
    faBoxesPacking,
    faStar,
    faMagnifyingGlass,
    faChevronRight)
    faShoppingCart,
    faBoxesPacking,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faShoppingCart, faBoxesPacking, faUsers)

import './style.css'
import router from '@/plugins/router'

createApp(App).
component('font-awesome-icon', FontAwesomeIcon).
use(router).
mount('#app')
