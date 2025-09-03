<template>
  <div class="modal fade" id="addTeamModal" tabindex="-1" aria-labelledby="addTeamModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addTeamModal">{{$t('createteam')}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
              <label class="label">{{$t('teamname')}}</label>
              <input
                type="text"
                class="form-control text-dark"
                :placeholder="$t('teamname')"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">{{$t('note')}}</label>
              <textarea
                class="form-control text-dark" 
                name=""
                :placeholder="$t('note')"
                rows="5"></textarea>
            </div>

            <div class="form-group mb-4">
              <label class="label">{{$t('status')}}</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option value="1" selected>Active</option>
                <option value="2">Closed</option>
              </select>
            </div>

            <div class="form-group d-flex gap-3">
              <button
                class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
              >
                <span class="py-sm-1 d-block">
                  <i class="ri-add-line text-white me-1"></i>
                  <span>{{$t('createteam')}}</span>
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
  name: "AddTeamModal",
});
</script>
