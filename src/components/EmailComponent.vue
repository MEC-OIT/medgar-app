<template>
<div class="text-center">
  <q-input
  class="formBackground  moreCenterT q-my-lg "
  v-model="password"
  type="password"
  :before="[{icon: 'lock', handler () {}}]"
  placeholder="password"
  :class="{ hasError: v.$error }"
   />
</div>

</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(value) {
        this.v.$touch();
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style media="screen">
.moreCenterT{

}
.q-input-target{
color: white;
}

</style>
