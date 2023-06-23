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
            I am a passionate full-stack developer and freelancer with a strong
            interest in open source and DevOps. I am skilled at writing clean
            and functional web designs, and I am always looking for ways to
            improve my skills in web development.
          </p>
          <div class="mt-3 flex flex-col space-y-3">
            <p>Some of the projects I have worked on include:</p>
            <ul class="list-disc pl-5 my-2 space-y-1">
              <li>
                Aslam Tour and Travels - A tour and travel agency specialized in
                Hajj and Umrah packages, custom packages, and visa and passport
                services.
              </li>
              <li>
                CodeAPI - I built CodeAPI, a platform for building and
                distributing custom APIs, designed for competitive programmers
                and developers, in a hackathon.
              </li>
              <li>
                Leaf- Leaf is an open-source community for questions and answers
                about open source development. I created this project in a
                hackathon.
              </li>
              <li>
                Travel Journal - I created a web application for planning and
                documenting travel experiences, including a blog section, trip
                planner, and interactive journal, in a 1-day hackathon.
              </li>
            </ul>
            <p>
              I am passionate about open source software, DevOps, and best
              practices. I write idiomatic code and prioritize user and
              developer experience.
            </p>
            <p>
              Apart from coding, I enjoy spending my free time engaging in
              badminton and running, as well as exploring the outdoors.
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