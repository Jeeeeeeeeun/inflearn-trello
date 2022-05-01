<template>
  <div>
    Board
    <span>{{ bid }}</span>
    <hr/>
    <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bid : 0,
        }
    },
    created() {
        console.log(this.$route.params.bid)
        this.bid = this.$route.params.bid
    }
}
</script>

<style>

</style>
