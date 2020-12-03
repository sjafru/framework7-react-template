import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import FormContainer from './containers/FormContainer';
import DynamicRouteContainer from './containers/DynamicRouteContainer';
import NotFoundContainer from './containers/DefaultRouteContainer';
import PanelLeftContainer from './containers/PanelLeftContainer';
import PanelRightContainer from './containers/PanelRightContainer';
import LoginContainer from './containers/LoginContainer';
import PopupContainer from './containers/PopupContainer';

import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import CatalogPage from '../pages/catalog.jsx';
import ProductPage from '../pages/product.jsx';
import SettingsPage from '../pages/settings.jsx';

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomeContainer,
  },
  {
    path: '/panel-left/',
    panel: {
      component: PanelLeftContainer,
    },
  },
  {
    path: '/panel-right/',
    panel: {
      component: PanelRightContainer,
    },
  },
  {
    path: '/about/',
    component: AboutContainer,
  },
  {
    path: '/form/',
    component: FormContainer,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRouteContainer,
  },
  {
    path: '/login/',
    loginScreen: {
      component: LoginContainer
    }
  },
  {
    path: '/popup/',
    popup: {
      component: PopupContainer
    }
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundContainer,
  },
];

export default routes;
