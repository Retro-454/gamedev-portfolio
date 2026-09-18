<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Raphael Romero</strong>, I am a UTEP student currently studying computer science.<br/>
        I enjoy working in game development and I am apart of Bandit Game Studio currently
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">games </router-link>, on <router-link to="/other-projects">other projects</router-link>, and took part in <router-link to="/resume"> other experiences</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer. You can reach me at <a href="mailto:romerorraphael0912@gmail.com">romerorraphael0912@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/projects/rapha.jpg" alt="Avatar of John" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>