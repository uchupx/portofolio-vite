<template>
  <Analytics />
  <div class="font-mono bg-black text-green-500 min-h-screen">
    <!-- Header/Navigation -->
    <header class="border-b border-green-900 px-4 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <Terminal class="h-6 w-6 mr-2" />
          <span class="text-xl font-bold">uchupx@portfolio:~$</span>
        </div>
        <nav class="hidden md:flex space-x-6">
          <a href="#about" class="hover:text-white transition-colors">about</a>
          <a href="#projects" class="hover:text-white transition-colors">projects</a>
          <a href="#skills" class="hover:text-white transition-colors">skills</a>
          <a href="#contact" class="hover:text-white transition-colors">contact</a>
        </nav>
        <button @click="showMobileMenu = !showMobileMenu" class="md:hidden">
          <Menu v-if="!showMobileMenu" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="showMobileMenu" class="md:hidden bg-black border-b border-green-900">
      <nav class="container mx-auto px-4 py-3 flex flex-col space-y-3">
        <a href="#about" class="hover:text-white transition-colors">about</a>
        <a href="#projects" class="hover:text-white transition-colors">projects</a>
        <a href="#skills" class="hover:text-white transition-colors">skills</a>
        <a href="#contact" class="hover:text-white transition-colors">contact</a>
      </nav>
    </div>

    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <div class="flex flex-col space-y-6 max-w-3xl">
          <div class="h-16">
          <h1 class="text-4xl md:text-6xl font-bold text-white">
            <TypewriterEffect :text="['Hi.', 'I\'m Yusuf.', 'Full Stack Developer.', 'Backend Developer.']" />
          </h1>
          </div>
          <p class="text-lg md:text-xl">
            > Building digital experiences with clean code and creative solutions.
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
              > Hi there! I’m a full stack and backend developer who focuses on building scalable, maintainable applications using Go, Node.js, and Vue.js.
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
    "Open Source",
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
                <a :href="project.github" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                  <Github class="h-5 w-5" />
                </a>
                <a :href="project.demo" target="_blank" rel="noopener" class="hover:text-white transition-colors">
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

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 border-t border-green-900">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-10 flex items-center">
          <Mail class="h-6 w-6 mr-2" />
          <span>contact:~/</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
          <form class="space-y-4">
            <div>
              <label class="block mb-1" for="name">NAME</label>
              <input 
                type="text" 
                id="name"
                v-model="contactForm.name"
                class="w-full px-4 py-2 bg-black border border-green-900 focus:border-green-500 focus:outline-none" 
              />
            </div>

            <div>
              <label class="block mb-1" for="email">EMAIL</label>
              <input 
                type="email" 
                id="email"
                v-model="contactForm.email"
                class="w-full px-4 py-2 bg-black border border-green-900 focus:border-green-500 focus:outline-none" 
              />
            </div>

            <div>
              <label class="block mb-1" for="message">MESSAGE</label>
              <textarea 
                id="message"
                v-model="contactForm.message"
                rows="5"
                class="w-full px-4 py-2 bg-black border border-green-900 focus:border-green-500 focus:outline-none"
              ></textarea>
            </div>

            <button 
              @click.prevent="submitForm"
              class="px-6 py-3 bg-green-500 text-black font-bold hover:bg-white transition-colors"
            >
              Send Message
            </button>
          </form>

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
  Mail, Github, Linkedin, Twitter, ExternalLink 
} from 'lucide-vue-next';

// Mobile menu toggle
const showMobileMenu = ref(false);

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', contactForm.value);
  // Here you would handle form submission logic
  alert('Message sent! (This is a demo)');
  contactForm.value = { name: '', email: '', message: '' };
};

// Projects data
const projects = ref([
  {
    name: 'Kajian API <on_development>',
    description: 'A Event API for Kajian, a platform for searching nearby events.',
    technologies: ['Go', 'Node.js', 'MySQL', 'Microservices'],
    github: '#',
    demo: '#'
  },
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
  'GitHub Actions',  'Vim'
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

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

:root {
  font-family: 'JetBrains Mono', monospace;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #047857;
}
</style>
