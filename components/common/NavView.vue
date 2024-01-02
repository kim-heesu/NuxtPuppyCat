<template>
  <nav>
    <ul>
      <!-- :exact 속성은 정확한 경로 일치 여부 -->
        <li><NuxtLink to="/" :exact="true">HOME</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li>
          <NuxtLink to="/testfolder">테스트폴더</NuxtLink>
          <ul class="depth">
            <li><NuxtLink to="/testfolder/test">테스트안에 테스트</NuxtLink></li>
          </ul>
        </li>
    </ul>
</nav>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  gap: 1rem;
}

nav ul {
  display: flex;
  align-content: center;
  gap: 2rem;
  font-size: 1.8rem;
}
nav ul li {
  position: relative;
}
nav .depth {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  width: max-content;
  padding: 1rem;
  background: #fff;
  border: 1px solid #ddd;
  transform: translateX(-50%);
}
nav .depth li {
  margin: 0.5rem 0;
}
nav ul li:hover .depth {
  display: block;
}
/* nuxt active style */
.nuxt-link-active {
  color: green;
  font-weight: 800;
  border-bottom: 2px solid green;
}
.user-box > * {
  padding: 0.8rem 1.2rem;
  margin: 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}

</style>
