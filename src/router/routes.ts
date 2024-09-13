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
    component: () => import('@/views/event_bus/EventBusTest.vue')
  },
  {
    path: '/model_pre',
    component: () => import('@/views/v_model/ModelTest.vue')
  },
  {
    path: '/attrs_listeners_pre',
    component: () => import('@/views/attrs_listeners/AttrsListenersTest.vue')
  },
  {
    path: '/ref_parent_pre',
    component: () => import('@/views/ref_children_parent/RefChildrenParentTest.vue')
  },
  {
    path: '/provide_inject_pre',
    component: () => import('@/views/provide_inject/ProvideInjectTest.vue')
  },
  {
    path: '/vuex_pre',
    component: () => import('@/views/pinia_test/index.vue')
  },
  {
    path: '/slot_pre',
    component: () => import('@/views/slot/SlotTest.vue')
  },
]
