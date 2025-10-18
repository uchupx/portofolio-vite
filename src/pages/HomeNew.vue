<template>
  <div class="font-mono mt-20 bg-black text-green-500 min-h-screen md:w-8/12 w-9/12 block mx-auto">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <div class="flex flex-col space-y-6 max-w-5xl">
          <div class="">
            <h1 class="text-4xl md:text-5xl font-bold text-white">
              <TypewriterEffect :text="['Hi.', 'I\'m Yusuf.', 'Backend Developer.', 'and also Fullstuck Developer. :(']" />
            </h1>
          </div>
          <p class="text-lg md:text-xl">
            > linux user and maybe linux enthusiast. love to build performance backend app
          </p>
          <div class="flex space-x-4">
            <a
                href="#contact"
                class="px-6 py-3 bg-green-500 text-black font-bold hover:bg-white transition-colors">
              Contact Me
            </a>
            <a
                href="#projects"
                class="px-6 py-3 border border-green-500 text-green-500 font-bold hover:bg-green-500 hover:text-black transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 border-t border-green-900">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-10 flex items-center">
          <FolderOpen class="h-6 w-6 mr-2" />
          <span>about:~/</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <p class="mb-4">
              > Hi there! I’m Yusuf, i'm a software engineer.
            </p>
            <p class="mb-4">
              > My focus on efficient system architecture, maintainability, and user-centric design ensures high-performance solutions tailored to evolving project needs.</p>
            <p>
              > By combining modern development practices with continuous integration and deployment, I aim for streamlined workflows and reliable results in every project.</p>
          </div>
          <div class="bg-green-900 bg-opacity-20 p-6 border border-green-900">
            <h3 class="text-xl font-bold mb-4">$ cat personal_info.json</h3>
            <pre class="whitespace-pre-wrap text-sm">
{
  "name": "Yusuf Andriyanto",
  "location": "Bekasi, West Java, Indonesia",
  "interests": [
    "Linux",
    "Algorithmic Problem Solving",
    "System Architecture"
  ],
  "current_focus": "Building performant web applications"
}
            </pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 border-t border-green-900">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-10 flex items-center">
          <Code class="h-6 w-6 mr-2" />
          <span>projects:~/</span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in projects" :key="index" class="border border-green-900 hover:border-green-500 transition-colors">
            <div class="border-b border-green-900 p-4 flex justify-between items-center">
              <h3 class="font-bold text-white">{{ project.name }}</h3>
              <div class="flex space-x-2">
                <a :href="project.docker_hub" v-if="project.docker_hub" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                  <Box class="h-5 w-5" />
                </a>
                <a :href="project.github" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                  <Github class="h-5 w-5" />
                </a>
                <a :href="project.demo" v-if="project.demo" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                  <ExternalLink class="h-5 w-5" />
                </a>
              </div>
            </div>
            <div class="p-4">
              <p class="mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="px-2 py-1 bg-green-900 bg-opacity-30 text-xs">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 border-t border-green-900">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-10 flex items-center">
          <TerminalSquare class="h-6 w-6 mr-2" />
          <span>skills:~/</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-xl font-bold mb-4">$ ls frontend/</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="skill in frontendSkills" :key="skill.name" class="flex items-center">
                <div class="w-2 h-2 bg-green-500 mr-2"></div>
                <span class="mr-2">{{ skill.name }}</span>
                <div class="flex-1 h-2 bg-green-900">
                  <div class="h-full bg-green-500" :style="{ width: `${skill.level}%` }"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">$ ls backend/</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="skill in backendSkills" :key="skill.name" class="flex items-center">
                <div class="w-2 h-2 bg-green-500 mr-2"></div>
                <span class="mr-2">{{ skill.name }}</span>
                <div class="flex-1 h-2 bg-green-900">
                  <div class="h-full bg-green-500" :style="{ width: `${skill.level}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-xl font-bold mb-4">$ ls tools/</h3>
          <div class="flex flex-wrap gap-4">
            <span
                v-for="tool in tools"
                :key="tool"
                class="px-4 py-2 border border-green-900 hover:border-green-500 transition-colors">
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="exprience" class="py-20 px-4 border-t border-green-900">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-10 flex items-center">
          <BriefcaseBusinessIcon class="h-6 w-6 mr-2" />
          <span>$ history</span>
        </h2>

        <div class="space-y-8">
          <!-- Experience 1 -->
          <div class="border border-green-900 hover:border-green-500 transition-colors">
            <div class="border-b border-green-900 p-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-bold text-white">Detikcom - Web Developer</h3>
                  <p class="text-green-400">Nov 2023 - Current</p>
                </div>
                <div class="w-2 h-2 bg-green-500 mt-2"></div>
              </div>
            </div>
            <div class="p-4">
              <p class="mb-4">Working as a Web Developer focusing on developing and maintaining web applications with modern technologies.</p>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Develop and maintain web applications using modern JavaScript frameworks
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Collaborate with cross-functional teams to deliver high-quality software solutions
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Optimize application performance and ensure responsive design
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Implement new features and functionality based on business requirements
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Participate in code reviews and maintain coding standards
                </li>
              </ul>
            </div>
          </div>

          <!-- Experience 2 -->
          <div class="border border-green-900 hover:border-green-500 transition-colors">
            <div class="border-b border-green-900 p-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-bold text-white">Pintro - Backend Developer</h3>
                  <p class="text-green-400">May 2023 - Nov 2023</p>
                </div>
                <div class="w-2 h-2 bg-green-500 mt-2"></div>
              </div>
            </div>
            <div class="p-4">
              <p class="mb-4">Migrate old technology to a new tech stack using Golang, employing a microservices architecture.</p>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Migrated APIs from PHP Laravel to Golang
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Improved the generation of Journal Payment from 1-2 minutes per case to less than 5 seconds per case, reducing error cases such as full server load
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Created a Notification server (WhatsApp, SMS, Pusher, email) with dynamic templates
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Set up CI/CD and unit testing
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Implemented a Worker for background jobs
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Implemented Clean Architecture for all microservices
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Implemented a Queue to prevent server overload from numerous requests
                </li>
              </ul>
            </div>
          </div>

          <!-- Experience 3 -->
          <div class="border border-green-900 hover:border-green-500 transition-colors">
            <div class="border-b border-green-900 p-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-bold text-white">Transflynd - Junior Fullstack Developer</h3>
                  <p class="text-green-400">Sep 2019 - Apr 2023</p>
                </div>
                <div class="w-2 h-2 bg-green-500 mt-2"></div>
              </div>
            </div>
            <div class="p-4">
              <p class="mb-4">Develop and maintain application to ensure good performance, add new features, and address urgent hotfixes.</p>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Import data optimization: Reduced processing time from 30 minutes to less than 2 minutes for datasets exceeding 100,000 rows
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">▸</span>
                  Enhanced existing features and addressed hotfixes for both Frontend (Vue/Nuxt) and Backend (Golang) applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 border-t border-green-900">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-10 flex items-center">
          <Mail class="h-6 w-6 mr-2" />
          <span>social media:~/</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <p class="mb-6">
              > Interested in working together? Feel free to reach out through the form or via any of these channels:
            </p>

            <div class="space-y-4">
              <a href="mailto:hi@uchupx.tech" class="flex items-center hover:text-white transition-colors">
                <Mail class="h-5 w-5 mr-2" />
                hi@uchupx.tech
              </a>
              <a href="https://github.com/uchupx" target="_blank" rel="noopener" class="flex items-center hover:text-white transition-colors">
                <Github class="h-5 w-5 mr-2" />
                github.com/uchupx
              </a>
              <a href="https://linkedin.com/in/uchupx" target="_blank" rel="noopener" class="flex items-center hover:text-white transition-colors">
                <Linkedin class="h-5 w-5 mr-2" />
                linkedin.com/in/uchupx
              </a>
              <a href="https://twitter.com/uchupx" target="_blank" rel="noopener" class="flex items-center hover:text-white transition-colors">
                <Twitter class="h-5 w-5 mr-2" />
                @uchupx
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-green-900 py-8 px-4">
      <div class="container mx-auto text-center">
        <p>© {{ new Date().getFullYear() }} Yusuf Andriyanto. All rights reserved.</p>
        <p class="mt-2">
          <span class="text-green-500">❯</span> Built with Vue.js and Tailwind CSS By <a href="https://v0.dev" target="_blank" rel="noopener" class=" items-center hover:text-white transition-colors">v0.dev</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Analytics } from '@vercel/analytics/vue';
import {
  Terminal, Menu, X, FolderOpen, Code, TerminalSquare,
  Mail, Github, Linkedin, Twitter, ExternalLink, Box, BriefcaseBusinessIcon
} from 'lucide-vue-next';

// Projects data
const projects = ref([
  {
    name: 'Kajian API <on_development>',
    description: 'A Event API for Kajian, a platform for searching nearby events.',
    technologies: ['Node.js', 'MySQL', 'Microservices'],
    github: 'https://github.com/uchupx/kajian-api-ts',
    demo: null
  },
  {
    name: 'Kajian Auth API <on_development>',
    description: 'A Event API for Kajian, a platform for searching nearby events.',
    technologies: ['Go',  'MySQL', 'Microservices'],
    github: 'https://github.com/uchupx/kajian-auth',
    demo: null
  },
  {
    name: 'Sidewalk API',
    description: 'An API for Sidewalk Mall.',
    technologies: ['Go', 'Firebase', 'PostgreSQL'],
    github: 'https://github.com/avatardev/sidewalk-be',
    demo: null
  },
  {
    name: 'Worker Shift - Auth',
    description: 'Auth service for worker-shift API.',
    technologies: ['TypeScript','MySQL','REST API', 'gRPC', 'Github Action'],
    github: 'https://github.com/uchupx/worker-auth',
    demo: null,
    docker_hub: 'https://hub.docker.com/repository/docker/uchupxx/worker-auth/general'
  }
]);

// Skills data
const frontendSkills = ref([
  { name: 'Vue.js', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind', level: 85 }
]);

const backendSkills = ref([
  { name: 'Node.js', level: 80 },
  { name: 'Go', level: 85 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'REST API', level: 90 },
  { name: 'PHP', level: 75 }
]);

const tools = ref([
  'Git', 'Docker', 'AWS', 'GCP',
  'GitHub Actions',  'Vim', 'Jenkins'
]);

onMounted(() => {
  document.title = 'Yusuf Portfolio'
});

// Typewriter effect component
const TypewriterEffect = {
  props: {
    text: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      displayText: '',
      currentIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typingSpeed: 100,
      deleteSpeed: 50,
      pauseDelay: 1500
    };
  },
  mounted() {
    this.startTypewriter();
  },
  methods: {
    startTypewriter() {
      const current = this.text[this.currentIndex];

      if (this.isDeleting) {
        // Delete mode
        this.displayText = current.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;

        if (this.currentCharIndex === 0) {
          this.isDeleting = false;
          this.currentIndex = (this.currentIndex + 1) % this.text.length;
          setTimeout(this.startTypewriter, this.typingSpeed);
        } else {
          setTimeout(this.startTypewriter, this.deleteSpeed);
        }
      } else {
        // Type mode
        this.displayText = current.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;

        if (this.currentCharIndex === current.length) {
          this.isDeleting = true;
          setTimeout(this.startTypewriter, this.pauseDelay);
        } else {
          setTimeout(this.startTypewriter, this.typingSpeed);
        }
      }
    }
  },
  render() {
    return this.$slots.default ?
        this.$slots.default({ text: this.displayText }) :
        this.displayText;
  }
};
</script>
