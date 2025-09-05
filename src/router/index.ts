import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AnalyticsPage from "../pages/Dashboard/AnalyticsPage.vue";
import LoginPage from "../pages/Auth/LoginPage.vue";
import LockScreenPage from "../pages/Auth/LockScreenPage.vue";
import DomainPage from "@/pages/Domain/DomainPage.vue";
import ServerPage from "@/pages/Server/ServerPage.vue";
import UserList from "@/pages/Users/UserList.vue";
import TeamListPage from "@/pages/Teams/TeamListPage.vue";
import MemberListPage from "@/pages/Members/MemberListPage.vue";
import RoleListPage from "@/pages/Role/RoleListPage.vue";
import PermissionListPage from "@/pages/Permission/PermissionListPage.vue";
import RolePermissionListPage from "@/pages/RolePermission/RolePermissionListPage.vue";
import RolePermissionAdd from "@/pages/RolePermission/RolePermissionAdd.vue";
import MyProfilePage from "@/pages/MyProfilePage.vue";
import AccountSettingsPage from "@/pages/Settings/AccountSettingsPage.vue";
import ChangePasswordPage from "@/pages/Settings/ChangePasswordPage.vue";
import ProviderPage from "@/pages/Provider/ProviderPage.vue";
import ProviderInfoPage from "@/pages/Provider/ProviderInfoPage.vue";
import ServerAddPage from "@/pages/Server/ServerAddPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";
import DomainAddPage from "@/pages/Domain/DomainAddPage.vue";
import ExpendPage from "@/pages/Expend/ExpendPage.vue";
import RevenuePage from "@/pages/Revenue/RevenuePage.vue";
import NotificationPage from "@/pages/Notification/NotificationPage.vue";
import FoodprintPage from "@/pages/Foodprint/FoodprintPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AnalyticsPage",
    component: AnalyticsPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: "LoginPage",
    component: LoginPage,
    meta: { guest: true }
  },
  {
    path: "/lock-screen",
    name: "LockScreenPage",
    component: LockScreenPage,
    meta: { guest: true }
  },
  {
    path: "/domain",
    name: "DomainPage",
    component: DomainPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/domain/add",
    name: "DomainAddPage",
    component: DomainAddPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/server",
    name: "ServerPage",
    component: ServerPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/server/add",
    name: "ServerAddPage",
    component: ServerAddPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/revenue",
    name: "RevenuePage",
    component: RevenuePage,
    meta: { requiresAuth: true }
  },
  {
    path: "/expend",
    name: "ExpendPage",
    component: ExpendPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/userlist",
    name: "UserListPage",
    component: UserList,
    meta: { requiresAuth: true }
  },
  {
    path: "/teams",
    name: "TeamListPage",
    component: TeamListPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/members",
    name: "MemberListPage",
    component: MemberListPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/role",
    name: "RoleListPage",
    component: RoleListPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/permission",
    name: "PermissionListPage",
    component: PermissionListPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/role-permission",
    name: "RolePermissionListPage",
    component: RolePermissionListPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/role-permission/add",
    name: "RolePermissionAdd",
    component: RolePermissionAdd,
    meta: { requiresAuth: true }
  },
  {
    path: "/settings/account-settings",
    name: "AccountSettingsPage",
    component: AccountSettingsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/settings/change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/provider",
    name: "ProviderPage",
    component: ProviderPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/providerinfo",
    name: "ProviderInfoPage",
    component: ProviderInfoPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/notification",
    name: "NotificationPage",
    component: NotificationPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/foodprint",
    name: "FoodprintPage",
    component: FoodprintPage,
    meta: { requiresAuth: true }
  },

  // Error Page
  { path: "/:pathMatch(.*)*", name: "NotFound", component: ErrorPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken') // change to real auth
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.meta.guest && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})


export default router;