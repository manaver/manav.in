<template>
  <div
    class="hero flex justify-center flex-col pt-10"
    :class="getThemeClass(isDarkMode)"
  >
    <page_heading Heading="The Untold Stories" :isDarkMode="isDarkMode" />

    <div class="pageContent flex justify-center flex-col-reverse md:flex-row">
      <div class="content py-5 p-3 md:p-1 md:w-2/5 space-y-8">
        <h1
          class="pe-10 md:pe-24 text-4xl w-full md:text-5xl font-bold"
          :class="getThemeTextColor(isDarkMode)"
        >
          Hi there,<br />I'm Manav Verma.
        </h1>
        <div class="pe-10 md:pe-24 flex flex-col">
          <p>
            I've been making computers do my bidding for over 15 years. I've
            done everything from designing websites to building the servers they
            run on. These days my passion is building web applications with
            Laravel, Vue, and Tailwind.
          </p>
          <div class="mt-3 flex flex-col space-y-3">
            <p>Some interesting projects I've worked on include:</p>
            <ul class="list-disc pl-5 my-2 space-y-1">
              <li>A chemical warehouse management system</li>
              <li>A marriage equality telephone robot</li>
              <li>A cryptocurrency trading robot</li>
              <li>Clinical data collection and storage</li>
              <li>Police software to help vulnerable people</li>
            </ul>
            <p>
              I care deeply about open-source software, privacy, best practices,
              open standards, idiomatic code, and great user and developer
              experiences.
            </p>
            <p>
              When I'm not coding, I enjoy cooking, woodworking, photography,
              spicy food, dark beer, motorcycles, and heavy music.
            </p>
          </div>
        </div>
      </div>

      <div class="image p-10 md:p-1 md:w-1/5">
        <img
          class="rounded-md opacity-70 hover:opacity-100"
          src="https://pbs.twimg.com/profile_images/1632349501351661569/8FPON-tB_400x400.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
import { getThemeClass, getThemeTextColor } from "../../theme/theme.js";
import page_heading from "../reusable/PageHeading.vue";

export default {
  name: "AboutView",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    page_heading,
  },
  methods: {
    getThemeClass,
    getThemeTextColor,
  },
};
</script>
  
  <style></style>