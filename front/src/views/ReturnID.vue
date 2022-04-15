<template>
<div>
<h2>return id</h2>
<div>
    <h3>User_ID: {{ userProp._id }}</h3>
</div>
    
    <span @click="delEmit">Delete </span>
    <span @click="updateEmit">Update</span>
</div>
</template>
<script>
export default {
  methods: {
    delEmit() {
      this.$emit("delUserEmit", this.userProp._id);
    },
    updateEmit() {
      this.$emit("updUserEmit", this.userProp._id);
    },
  },
  emits: ["delUserEmit", "updUserEmit"],
};
</script>
<script setup>
defineProps({
  userProp: {
    type: Object,
    required: true,
  },
});
</script>
