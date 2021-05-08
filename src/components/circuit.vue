<template>
  <div class="circuit">
    <div class="before">
      <template v-if="index != null">
        <div class="ckt-no" v-if="value.toUpperCase().indexOf('SPARE') < 0">
          CKT {{ index + 1 }}
        </div>
        <div class="ckt-no" v-if="value.toUpperCase().indexOf('SPARE') >= 0">
          SPARE
        </div>
      </template>
    </div>
    <div class="after" />
    <div class="input">
      <b>{{ (value ? value : "-").replace("SPARE", "") }}</b>
    </div>
    <svg
      width="80"
      height="46"
      viewBox="0 0 80 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.5" cy="40.5" r="4" stroke="black" stroke-width="3" />
      <circle cx="75.5" cy="40.5" r="4" stroke="black" stroke-width="3" />
      <path
        d="M4 36C4.04888 25 11.3173 3 40 3C68.6827 3 75.9511 25 76 36"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["value", "index"],
};
</script>
