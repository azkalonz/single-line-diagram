<template>
  <div>
    <input type="range" max="600" v-model="width" min="300" />
    <input type="range" max="4" v-model="strokeWidth" min="1" />
    <input type="number" v-model="$store.state.lines" />
    <button v-on:click="save">Save</button>
    <md-switch v-model="$store.state.toVeco">{{
      $store.state.toVeco ? "TO VECO" : "TO MDP"
    }}</md-switch>
    <md-dialog
      :md-fullscreen="true"
      :md-active.sync="$store.state.showInputDialog"
    >
      <md-field>
        <label>Conductor Size</label>
        <md-input v-model="$store.state.size"></md-input>
      </md-field>
      <md-field>
        <label>Main CB</label>
        <md-input v-model="$store.state.mainCB"></md-input>
      </md-field>
      <md-field>
        <label>Data</label>
        <md-textarea
          v-model="$store.state.rawData"
          style="height: 700px"
        ></md-textarea>
      </md-field>

      <md-dialog-actions>
        <md-button
          class="md-primary"
          @click="$store.commit('toggleInputDialog')"
          >Close</md-button
        >
        <md-button class="md-primary" @click="setData()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <div id="snapshot">
      <div
        id="single-diagram-container"
        :style="`width: ${width}px`"
        v-if="$store.state.data.length > 0"
      >
        <main-circuit />
        <div class="circuits">
          <template v-for="(item, index) in $store.state.data">
            <circuit
              :key="index"
              :class="index % 2 != 0 ? 'right' : 'left'"
              :value="item"
              :index="index"
            />
            <circuit
              v-if="
                $store.state.data.length % 2 !== 0 &&
                index == $store.state.data.length - 1
              "
              :key="item + 'last'"
              :class="'hidden'"
            />
          </template>
        </div>
        <circuit-footer />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import circuit from "./components/circuit";
import circuitFooter from "./components/circuit-footer";
import maincircuit from "./components/main-circuit";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      width: 400,
      strokeWidth: 3,
    };
  },
  components: {
    circuit,
    "main-circuit": maincircuit,
    "circuit-footer": circuitFooter,
  },
  watch: {
    strokeWidth(val) {
      this.updateStroke(val);
    },
  },
  methods: {
    save() {
      html2canvas($("#snapshot")[0]).then(function (canvas) {
        saveAs(canvas.toDataURL(), "single-line.png");
      });
    },
    updateStroke(val) {
      $("path,circle").css("stroke-width", `${val}px`);
      $(
        "#single-diagram-container:not(.after),#single-diagram-container *:not(.after)"
      ).css("border-width", `${val}px`);
      $("#single-diagram-container .circuit .before")
        .css("height", `${val}px`)
        .css("bottom", `-${val}px`);
    },
    setData() {
      this.$store.commit("setData", this.$store.state.rowData);
      this.$store.commit("toggleInputDialog");
    },
  },
};
</script>
