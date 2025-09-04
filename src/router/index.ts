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

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AnalyticsPage",
    component: AnalyticsPage,
  },
  {
    path: '/login',
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/lock-screen",
    name: "LockScreenPage",
    component: LockScreenPage,
  },
  {
    path: "/domain",
    name: "DomainPage",
    component: DomainPage
  },
  {
    path: "/server",
    name: "ServerPage",
    component: ServerPage
  },
  {
    path: "/server/add",
    name: "ServerAddPage",
    component: ServerAddPage
  },
  {
    path: "/userlist",
    name: "UserListPage",
    component: UserList
  },
  {
    path: "/teams",
    name: "TeamListPage",
    component: TeamListPage
  },
  {
    path: "/members",
    name: "MemberListPage",
    component: MemberListPage
  },
  {
    path: "/role",
    name: "RoleListPage",
    component: RoleListPage
  },
  {
    path: "/permission",
    name: "PermissionListPage",
    component: PermissionListPage
  },
  {
    path: "/role-permission",
    name: "RolePermissionListPage",
    component: RolePermissionListPage
  },
  {
    path: "/role-permission/add",
    name: "RolePermissionAdd",
    component: RolePermissionAdd
  },
  {
    path: "/settings/account-settings",
    name: "AccountSettingsPage",
    component: AccountSettingsPage
  },
  {
    path: "/settings/change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage
  },
  {
    path: "/provider",
    name: "ProviderPage",
    component: ProviderPage
  },
  {
    path: "/providerinfo",
    name: "ProviderInfoPage",
    component: ProviderInfoPage
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

export default router;