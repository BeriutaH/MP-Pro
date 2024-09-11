export default [
  /* ------------------跳转的页面--------------------- */
  {
    path: '/props_pre',
    component: () => import('@/views/props/PropsTest.vue')
  },
  {
    path: '/event_pre',
    component: () => import('@/views/custom_event/EventTest.vue')
  },
  {
    path: '/bus_pre',
    component: () => import('@/views/event_bus/EventBusTesr.vue')
  }
]
