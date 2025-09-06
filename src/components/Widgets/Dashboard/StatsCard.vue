<template>
  <div
    class="appointments-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="al-card-content d-flex justify-content-between">
        <div class="title">
          <span class="d-block"> {{ $t(title) }} </span>
          <h2>{{ number }}</h2>
          <span v-if="badge" 
            class="badge pill-badge rounded-pill"
            :class="'text-outline-'+type"
          > {{ badge }}</span>
        </div>
        <div class="icon">
            <i class="material-symbols-outlined fs-40"
              :class="'text-'+type"
            >
                {{ icon }}
            </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Appointments",
    props: {
        title: {
            type: String,
            default: ""
        },
        number: {
            type: String
        },
        icon: null,
        type: null,
        badge: null
    }
});
</script>

<style lang="scss" scoped>
.appointments-card {
  .al-card-content {
    .title {
      h2 {
        margin: {
          top: 5px;
          bottom: 8px;
        }
        font: {
          size: 28px;
          weight: 900;
        }
      }
      .info-badge {
        font-size: 12px;
        padding: 0 10px;
        color: #1e8308;
        border-radius: 100px;
        border: 1px solid #82fc5a;
        background-color: #d8ffc8;

        &.down {
          border-color: #ffaa72;
          color: var(--dangerColor);
          background-color: #ffe8d4;
        }
      }
    }
    .icon {
      margin-top: 5px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .appointments-card {
    .al-card-content {
      .title {
        h2 {
          font-size: 22px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .appointments-card {
    .al-card-content {
      .title {
        h2 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
