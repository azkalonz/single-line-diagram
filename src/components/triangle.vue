<template>
  <span>
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip2)">
        <path
          d="M64 32.1063L1 1V64L64 32.1063Z"
          stroke="black"
          stroke-width="3"
        />
      </g>
      <defs>
        <clipPath id="clip2">
          <rect width="65" height="65" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <div class="lines" v-if="$store.state.toVeco">
      <div
        class="line"
        v-for="(item, index) in new Array(parseInt($store.state.lines))"
        :key="index"
      ></div>
    </div>
  </span>
</template>
