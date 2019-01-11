import SplashScreen from 'pages/splashScreen'
import Login from 'pages/login'
import MainMenu from 'pages/mainMenu'
import Podcast from 'pages/podcast'
import VideoPod from 'pages/videoPod'
import VideoTwo from 'pages/videoTwo'
import VideoThree from 'pages/videoThree'



const routes = [
  {
    path: '/',
    component: () => import('layouts/splashScreenLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
  },
    {
      path: '/splashScreen',
      component: () => import('layouts/splashScreenLayout.vue'),
      children: [
        { path: '', component: () => import('pages/splashScreen.vue') }
      ],
    },
    {
      path: '/videoThree',
      component: () => import('layouts/testPageLayout.vue'),
      children: [
        { path: '', component: () => import('pages/videoThree.vue') }
      ],
    },
    {
      path: '/login',
      component: () => import('layouts/splashScreenLayout.vue'),
      children: [
        { path: '', component: () => import('pages/login.vue') }
      ],
    },
    {
      path: '/podocast2',
      component: () => import('layouts/MyLayout.vue'),
      children: [
        { path: '', component: () => import('pages/podcast2.vue') }
      ],
    },
    {
      path: '/mainMenu',
      component: () => import('layouts/MyLayout.vue'),
      children: [
        { path: '', component: () => import('pages/mainMenu.vue') }
      ],
    },
    {
      path: '/videoPod',
      component: () => import('layouts/MyLayoutVideos.vue'),
      children: [
        { path: '', component: () => import('pages/videoPod.vue') },
        { path: '', component: () => import('pages/podcast.vue') }
      ],
    },
    {
      path: '/videoTwo',
      component: () => import('layouts/MyLayoutVideos.vue'),
      children: [
        { path: '', component: () => import('pages/videoTwo.vue') },
      ],
    },
    {
      path: '/podocast',
      component: () => import('layouts/MyLayoutVideos.vue'),
      children: [
        { path: '', component: () => import('pages/podcast.vue') }
      ],
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
