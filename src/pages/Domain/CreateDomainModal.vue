<template>
  <div class="modal fade" id="toDoListModal" tabindex="-1" aria-labelledby="toDoListModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="toDoListModal">Create Domain</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
              <label class="label">Task ID</label>
              <input
                type="text"
                class="form-control text-dark"
                placeholder="Task ID"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Task Title</label>
              <input
                type="text"
                class="form-control text-dark"
                placeholder="Task Title"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Assigned To</label>
              <input
                type="text"
                class="form-control text-dark"
                placeholder="Assigned To"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Due Date</label>
              <input type="date" class="form-control text-dark" />
            </div>
            <div class="form-group mb-4">
              <label class="label">Priority</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option selected>High</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
              </select>
            </div>

            <div class="form-group mb-4">
              <label class="label">Status</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option selected>Finished</option>
                <option value="1">Pending</option>
                <option value="2">In Progress</option>
                <option value="3">Cancelled</option>
              </select>
            </div>

            <div class="form-group mb-4">
              <label class="label">Action</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option selected>Yes</option>
                <option value="1">No</option>
              </select>
            </div>

            <div class="form-group d-flex gap-3">
              <button
                class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
              >
                <span class="py-sm-1 d-block">
                  <i class="ri-add-line text-white me-1"></i>
                  <span>Create Task</span>
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
  name: "CreateDomainModal",
});
</script>
