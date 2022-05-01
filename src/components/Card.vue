<template>
  <div>
    Card
    <span>{{ cid }}</span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cid : null,
        }
    },
    created() {
        console.log(this.$route.params.cid)
        this.cid = this.$route.params.cid
    }
}
</script>

<style>

</style>
