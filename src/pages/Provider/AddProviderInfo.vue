<template>
  <div class="modal fade" id="addProviderInfoModal" tabindex="-1" aria-labelledby="addProviderInfoModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addProviderInfoModal">{{ $t('createproviderinfo') }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
              <label class="label">{{ $t('providers') }}</label>
              <select
                class="form-select form-control text-dark"
                aria-label="Default select example"
              >
                <option value="" selected>{{ $t('chooseone') }}</option>
                <option value="1">Provider 1</option>
                <option value="2">Provider 2</option>
              </select>
            </div>
            <div class="form-group mb-4">
              <label class="label">{{ $t('name') }}</label>
              <input
                type="text"
                class="form-control text-dark"
                :placeholder="$t('name')"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">{{ $t('apiid') }}</label>
              <input
                type="text"
                class="form-control text-dark"
                :placeholder="$t('apiid')"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">{{ $t('apikey') }}</label>
              <input
                type="text"
                class="form-control text-dark"
                :placeholder="$t('apikey')"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">{{ $t('apisecret') }}</label>
              <input
                type="text"
                class="form-control text-dark"
                :placeholder="$t('apisecret')"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">{{ $t('note') }}</label>
              <textarea 
                class="form-control text-dark" 
                name="" 
                id="" 
                cols="10"></textarea>
            </div>

            <div class="form-group d-flex gap-3">
              <button
                class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
              >
                <span class="py-sm-1 d-block">
                  <i class="ri-add-line text-white me-1"></i>
                  <span>{{ $t('createproviderinfo') }}</span>
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
  name: "AddProvider",
});
</script>
