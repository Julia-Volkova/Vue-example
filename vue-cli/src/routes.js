import Home from './components/Home.vue';
import Header from './components/Header.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
  {
    path: '', name: 'home', components: {
    default: Home,
    'header-top': Header,
  }
  },
  {
    path: '/user', components: {
    default: User,
    'header-top': Header,
  },
    // nested routing
    children: [
      {path: '', component: UserStart},
      {
        path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
        console.log('inside route setup');
        next();
      }
      },
      {path: ':id/edit', component: UserEdit, name: 'userEdit'},
    ]
  },
  {path: '/lol', redirect: {name: 'home'}},
  {path: '*', redirect: '/'}
];
