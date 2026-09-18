<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Raphael Romero</strong>, a Computer Science student at The University of Texas at El Paso (expected graduation December 2026, GPA 3.9/4.0), with hands-on experience across game development and software engineering.
      <br />I'm currently a technical team member at Bandit Game Studio, where I build Unity-based tech demos and foundational game systems, and I recently completed a software engineering internship at SAIC working on network data capture, visualization tools, and Rust-based message parsing.
      <br />I care about clean gameplay systems, solid tooling, and building things that are actually fun to play.
      <br />
      <br />Looking for opportunities in game development or software engineering? Feel free to
      <router-link to="/contact">contact me</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Raphael_Romero_Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>SAIC — Software Engineer Intern</h3>
      <h4>June 2026 - August 2026</h4>

      <div>Contributed to the development of a network data capture and analysis tool using Agile methodologies. Implemented a tactical viewer using CesiumJS to read, process, and render air picture messages for visualization and analysis. Developed network message dissectors in Rust to parse and analyze captured data. Contributed to database architecture refactoring to improve user connection security. Implemented a frontend external window feature allowing users to view project streams across multiple monitors.</div>

      <div class="tech-stack">Rust, CesiumJS, SQL, Agile</div>

      <h3>Bandit Game Studio — Technical Team Member</h3>
      <h4>January 2025 - Current</h4>

      <div>Develop Unity-based technical demos to prototype core gameplay systems and evaluate new mechanics for upcoming studio projects. Build and maintain foundational game systems, tools, and pipelines to support full-game production. Collaborate closely with artists, designers, and production leads to ensure technical feasibility and smooth feature integration. Assist in debugging, performance optimization, and testing across early-stage prototypes.</div>

      <div class="tech-stack">Unity, C#</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming</h3>
        <SkillRate name="C#"  />
        <SkillRate name="Python"  />
        <SkillRate name="Java"  />
        <SkillRate name="JavaScript"  />
        <SkillRate name="Rust"  />
        <SkillRate name="SQL"  />
      </div>

      <div class="skill-set">
        <h3>Tools & Tech</h3>
        <SkillRate name="Unity" />
        <SkillRate name="Vue" />
        <SkillRate name="Git" />
        <SkillRate name="Docker" />
        <SkillRate name="Firebase"  />
        <SkillRate name="Cesium" />
        <SkillRate name="Playwright"  />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>The University of Texas at El Paso</h3>
      <h4>Expected Graduation: December 2026</h4>
      <div>Bachelor of Science in Computer Science — GPA 3.9/4.0</div>

      <h3>El Paso Community College</h3>
      <h4>Graduated: December 2023</h4>
      <div>Associate of Arts in Multidisciplinary Studies</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>