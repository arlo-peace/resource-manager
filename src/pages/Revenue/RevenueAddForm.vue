<template>
  <div class="modal fade" ref="addnewrevenue" id="addnewrevenue" tabindex="-1" aria-labelledby="addnewrevenue" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addnewrevenue">{{$t('addnewrevenue')}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
                <label class="label">{{$t('asserttype')}}</label>
                <select class="form-select form-control" aria-label="Default select example">
                    <option value="" selected>{{ $t('chooseone') }}</option>
                    <option value="domain">{{ $t('domain') }}</option>
                    <option value="server">{{ $t('server') }}</option>
                    <option value="other">{{ $t('other') }}</option>
                </select>
            </div>
            <div class="row">
                <div class="mb-3 col-lg-6">
                    <label for="startdate" class="form-label">{{$t('startdate')}}</label>
                    <input type="date" class="form-control" id="startdate" :placeholder="$t('startdate')">
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="expiredate" class="form-label">{{$t('expiredate')}}</label>
                    <input type="date" class="form-control" id="expiredate" :placeholder="$t('expiredate')">
                </div>
            </div>
            <div class="row">
                <div class="mb-3 col-lg-6">
                    <label for="purchaseprice" class="form-label">{{$t('purchaseprice')}}</label>
                    <input type="number" class="form-control" id="purchaseprice" :placeholder="$t('purchaseprice')">
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="currency" class="form-label">{{$t('currency')}}</label>
                    <select class="form-select form-control" id="currency" aria-label="currency">
                        <option value="">{{$t('chooseone')}}</option>
                        <option value="USDT" selected>USDT</option>
                        <option value="USD">USD</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
              <label for="source" class="form-label">{{$t('source')}}</label>
              <input type="text" class="form-control" :placeholder="$t('aads')">
            </div>
            <div class="mb-3">
              <label for="note" class="form-label">{{$t('note')}}</label>
              <textarea 
                id="note" 
                class="form-control" 
                :placeholder="$t('typenotehere')"></textarea>
            </div>
            <div class="form-group d-flex gap-3">
              <button
                class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3"
              >
                <span class="py-sm-1 d-block">
                  <i class="ri-add-line text-white me-1"></i>
                  <span>{{$t('addnew')}}</span>
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
  name: "ExpandAddForm",

});
</script>
