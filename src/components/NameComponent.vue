<template>

    <q-input
    class="formBackground moreCenter"
    v-model="name"
    type="email"
    :before="[{icon: 'mail', handler () {}}]"
    suffix="@mec.cuny.edu"
    placeholder="username"
    @input="v.$touch()"
    :class="{ 'hasError': v.$error }"
     />



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
    name: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style media="screen">
.moreCenter{

}
</style>
