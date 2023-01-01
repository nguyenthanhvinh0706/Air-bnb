<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-title-bar></the-title-bar>
    <the-content></the-content>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheTitleBar from "@/components/TheTitleBar.vue";
import TheContent from "@/components/TheContent.vue";
// @ is an alias to /src

export default {
  name: "Blog",
  components: { TheTitleBar, TheContent },
};
</script>

<style></style>
