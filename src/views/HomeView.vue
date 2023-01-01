<template>
  <div id="wrapper">
    <the-banner></the-banner>
    <the-categories></the-categories>
    <the-place></the-place>
    <the-review></the-review>
    <the-plan></the-plan>
    <the-blog></the-blog>
    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheCategories from "@/components/TheCategories.vue";
import ThePlace from "@/components/ThePlace.vue";
import TheReview from "@/components/TheReview.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheBlog from "@/components/TheBlog.vue";

export default {
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlace,
    TheReview,
    ThePlan,
    TheBlog,
  },
};
</script>
