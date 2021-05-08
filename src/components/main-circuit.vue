<template>
  <div class="main-circuit-container">
    <div class="main-circuit-line">
      <div class="size">
        <span>{{$store.state.size}}</span>
      </div>
      <div class="size-lines">
        <div v-for="(item,index) in new Array(parseInt($store.state.lines))" :key="index" class="line"/>
      </div>
      <triangle :class="['triangle', $store.state.toVeco?'VECO':'MDP'].join(' ')" />
      <span class="to" v-if="$store.state.toVeco">TO VECO</br>SOURCE</span>
      <span class="to" v-if="!$store.state.toVeco" style="top: -13px">TO MDP</span>
    </div>
    <div class="main-circuit">
      <svg
        width="46"
        height="80"
        viewBox="0 0 46 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <circle
            cx="5.5"
            cy="4.5"
            r="4"
            transform="rotate(90 5.5 4.5)"
            stroke="black"
            stroke-width="3"
          />
          <circle
            cx="5.5"
            cy="75.5"
            r="4"
            transform="rotate(90 5.5 75.5)"
            stroke="black"
            stroke-width="3"
          />
          <path
            d="M10 4C21 4.04888 43 11.3173 43 40C43 68.6827 21 75.9511 10 76"
            stroke="black"
            stroke-width="3"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="80"
              height="46"
              fill="white"
              transform="translate(46) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
      <span style="margin-left: 10px">
        <span class="input">{{$store.state.mainCB}}</br>MAIN CB</span>
      </span>
    </div>
  </div>
</template>

<script>
import triangle from "./triangle";

export default {
  components: {
    triangle,
  },
};
</script>
