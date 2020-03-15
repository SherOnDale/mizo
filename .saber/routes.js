
    export default [
      {
          path: "/about.html",
          meta: {
            __relative: 'about.md',
            __pageId: '05ff0f25'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--about-md" */ "/mnt/c/Users/sheri/Documents/projects/saber/mizo/pages/about.md?saberPage=05ff0f25")
            
          }
        },
{
          path: "/",
          meta: {
            __relative: 'index.md',
            __pageId: 'a7a37080'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--index-md" */ "/mnt/c/Users/sheri/Documents/projects/saber/mizo/pages/index.md?saberPage=a7a37080")
            
          }
        },
{
          path: "/posts/day-one.html",
          meta: {
            __relative: '_posts/day-one.md',
            __pageId: '31039e9e'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-day-one-md" */ "/mnt/c/Users/sheri/Documents/projects/saber/mizo/pages/_posts/day-one.md?saberPage=31039e9e")
            
          }
        },
{
          path: "/posts/day-two.html",
          meta: {
            __relative: '_posts/day-two.md',
            __pageId: '3a0f38f8'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-day-two-md" */ "/mnt/c/Users/sheri/Documents/projects/saber/mizo/pages/_posts/day-two.md?saberPage=3a0f38f8")
            
          }
        },
{
          path: "/posts/day-three.html",
          meta: {
            __relative: '_posts/day-three.md',
            __pageId: '3c6eceb4'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-day-three-md" */ "/mnt/c/Users/sheri/Documents/projects/saber/mizo/pages/_posts/day-three.md?saberPage=3c6eceb4")
            
          }
        },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/mnt/c/Users/sheri/Documents/projects/saber/mizo/node_modules/saber/vue-app/404.vue")
        }
      }
    ]