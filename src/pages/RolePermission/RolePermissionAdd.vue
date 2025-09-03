<template>
  <div class="main-content-container overflow-hidden">
    <PageTitle :pageTitle="$t('rolepermissionadd')" :subTitle="$t('authentication')" />

    <div class="card bg-white border-0 rounded-3 mb-4">
      <div class="card-header">
        <div
            class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-0"
        >
            <h5 class="mb-0">{{ $t('add') }}</h5>
            <RouterLink to="/role-permission" class="menu-link">
            <button
                class="btn btn-outline-secondary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            >
            <span class="py-sm-1 d-block">
                <i class="ri-arrow-left-line d-none d-sm-inline-block me-1"></i>
                <span>{{ $t('back') }}</span>
            </span>
            </button>
            </RouterLink>
        </div>
      </div>
      <div class="card-body p-4 pt-3">
        <div class="row">
          <div class="justify-content-between align-items-center flex-wrap gap-2">
            <form>
              <!-- Role -->
              <div class="row mb-15">
                <div class="col-lg-6">
                  <label class="label text-secondary">{{ $t('role') }}</label>
                  <select v-model="selectedRole" class="form-select form-control h-55">
                    <option disabled value="">{{ $t('selectone') }}</option>
                    <option value="manager">Manager</option>
                    <option value="owner">Owner</option>
                    <option value="member">Member</option>
                    <option value="viewer">Viewer</option>
                  </select>
                </div>
              </div>

              <!-- Permissions -->
              <div class="row">
                <div class="col-lg-6">
                  <label class="label text-secondary">{{ $t('permission') }}</label>
                  <div
                    v-for="module in modules"
                    :key="module.key"
                    class="mb-4 border p-3 rounded"
                  >
                    <h6 class="mb-2">{{ module.name }}</h6>
                    <div class="d-flex flex-wrap gap-4">
                      <div
                        v-for="action in module.permission"
                        :key="action"
                        class="form-check"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :id="`${module.key}-${action}`"
                          v-model="selectedPermissions[module.key]"
                          :value="action"
                        />
                        <label class="form-check-label" :for="`${module.key}-${action}`">
                          {{ $t(action) }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Submit -->
              <div class="form-group d-flex mt-10 gap-3">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="submitRole"
                >
                  Create Role
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PageTitle from "../../components/Commons/PageTitle.vue";
import rawModules from "@/rolelist.json";

interface Module {
  name: string;
  key: string;
  permission: string[];
}

export default defineComponent({
  name: "AddRoleModal",
  components: { PageTitle },
  setup() {
    const modules = ref<Module[]>(rawModules);

    // role selection
    const selectedRole = ref("");

    // permissions per module
    const selectedPermissions = ref<Record<string, string[]>>({});

    // initialize structure
    modules.value.forEach((m) => {
      selectedPermissions.value[m.key] = [];
    });

    const submitRole = () => {
      console.log("Role:", selectedRole.value);
      console.log("Selected permissions:", selectedPermissions.value);
    };

    return {
      modules,
      selectedRole,
      selectedPermissions,
      submitRole,
    };
  },
});
</script>
