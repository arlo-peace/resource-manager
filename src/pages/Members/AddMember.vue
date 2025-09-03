<template>
  <div class="modal fade" id="addMemberModal" tabindex="-1" aria-labelledby="addMemberModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addMemberModal">{{$t('addmember')}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
              <label class="label">{{$t('team')}}</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option value="1" selected>Team 1</option>
                <option value="2">Team 2</option>
              </select>
            </div>
            <div class="form-group mb-4">
              <label class="label">{{$t('user')}}</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option value="1" selected>User 1</option>
                <option value="2">User 1</option>
              </select>
            </div>
            <div class="form-group mb-4">
              <label class="label">{{$t('role')}}</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option value="owner" selected>Owner</option>
                <option value="manager">Manager</option>
                <option value="member">Member</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>

            <div class="form-group d-flex gap-3">
              <button
                class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
              >
                <span class="py-sm-1 d-block">
                  <i class="ri-add-line text-white me-1"></i>
                  <span>{{$t('addmember')}}</span>
                </span>
              </button>
            </div>
          </form>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddMemberModal",
});
</script>
