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
  }
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