<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
    <!-- Hero Section con animación 3D -->
    <section class="relative min-h-screen overflow-hidden">
      <!-- Canvas 3D -->
      <div id="canvas-container" class="absolute inset-0 z-0"></div>
      
      <!-- Navbar -->
      <nav class="fixed top-0 z-50 w-full bg-slate-900/50 backdrop-blur-lg">
        <div class="container mx-auto flex items-center justify-between px-4 py-4">
          <div class="text-2xl font-bold text-white">
            <span class="text-cyan-400">Create</span>Studio
          </div>
          <!-- Menú Desktop -->
          <div class="hidden space-x-8 md:flex">
            <a href="#servicios" class="text-white/80 transition-colors hover:text-cyan-400">Services</a>
            <a href="#portafolio" class="text-white/80 transition-colors hover:text-cyan-400">Portfolio</a>
            <a href="#proceso" class="text-white/80 transition-colors hover:text-cyan-400">Process</a>
            <a href="#contacto" class="text-white/80 transition-colors hover:text-cyan-400">Contact</a>
          </div>
          <!-- Botón de menú móvil -->
          <div class="flex items-center gap-4">
            <button 
              @click="toggleMenu"
              class="relative z-50 block h-10 w-10 md:hidden"
              aria-label="Menu"
            >
              <div class="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2">
                <span 
                  class="absolute block h-0.5 w-5 transform bg-white transition-all duration-300"
                  :class="isMenuOpen ? 'top-0 rotate-45' : '-translate-y-1.5'"
                ></span>
                <span 
                  class="absolute top-0 block h-0.5 w-5 transform bg-white transition-all duration-300"
                  :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
                ></span>
                <span 
                  class="absolute block h-0.5 w-5 transform bg-white transition-all duration-300"
                  :class="isMenuOpen ? 'top-0 -rotate-45' : 'translate-y-1.5'"
                ></span>
              </div>
            </button>
            <button class="hidden rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2 text-white transition-all hover:scale-105 md:block">
              Start Project
            </button>
          </div>
        </div>
      </nav>

      <!-- Menú móvil -->
      <div 
        class="fixed inset-0 z-40 transform transition-all duration-300"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"></div>
        <div class="relative flex h-full w-full flex-col items-center justify-center space-y-8 p-4">
          <a 
            href="#servicios" 
            @click="closeMenu"
            class="text-2xl font-bold text-white/80 transition-colors hover:text-cyan-400"
          >
            Services
          </a>
          <a 
            href="#portafolio" 
            @click="closeMenu"
            class="text-2xl font-bold text-white/80 transition-colors hover:text-cyan-400"
          >
            Portfolio
          </a>
          <a 
            href="#proceso" 
            @click="closeMenu"
            class="text-2xl font-bold text-white/80 transition-colors hover:text-cyan-400"
          >
            Process
          </a>
          <a 
            href="#contacto" 
            @click="closeMenu"
            class="text-2xl font-bold text-white/80 transition-colors hover:text-cyan-400"
          >
            Contact
          </a>
          <button class="mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 text-white transition-all hover:scale-105">
            Start Project
          </button>
        </div>
      </div>
      
      <!-- Hero Content -->
      <div class="container relative z-10 mx-auto px-4">
        <div class="flex min-h-screen items-center">
          <div class="max-w-2xl opacity-0" ref="content">
            <h1 class="hero-title mb-6 text-7xl font-bold text-white md:text-8xl">
              We Create 
              <span class="mt-2 block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            <p class="mb-8 text-xl text-gray-300">
              Transforming ideas into unique digital experiences. Web design, development and creativity at its finest.
            </p>
            <div class="flex space-x-4">
              <button class="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                View Projects
              </button>
              <button class="rounded-full border-2 border-white/20 px-8 py-3 text-white transition-all hover:border-cyan-400 hover:bg-cyan-400/10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section id="servicios" class="relative z-10 py-20">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-5xl font-bold text-white">
            Our Services
          </h2>
          <p class="mx-auto max-w-2xl text-gray-400">
            Complete digital solutions to grow your business
          </p>
        </div>
        
        <div class="grid gap-12 md:grid-cols-3">
          <!-- Servicio 1: Diseño UI/UX - Cian y Morado -->
          <div class="service-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="service-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-4xl shadow-lg shadow-cyan-500/25">
                  🎨
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">UI/UX Design</h3>
                <p class="mb-6 text-gray-400">
                  Modern interfaces and exceptional user experiences.
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Responsive Design</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Interactive Prototypes</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Design Systems</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105">
                  More Information
                </button>
              </div>
            </div>
          </div>

          <!-- Servicio 2: Desarrollo Web -->
          <div class="service-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="service-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-500 text-4xl shadow-lg shadow-blue-500/25">
                  💻
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">Web Development</h3>
                <p class="mb-6 text-gray-400">
                  Websites and applications with modern technologies.
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                    <span>Modern Frontend</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                    <span>Robust Backend</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                    <span>APIs & Integrations</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-400 to-emerald-500 py-3 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105">
                  More Information
                </button>
              </div>
            </div>
          </div>

          <!-- Servicio 3: Marketing Digital -->
          <div class="service-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="service-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-orange-500 text-4xl shadow-lg shadow-pink-500/25">
                  📈
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">Digital Marketing</h3>
                <p class="mb-6 text-gray-400">
                  Effective strategies for your online presence.
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                    <span>SEO Optimization</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                    <span>Content Marketing</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                    <span>Data Analysis</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-pink-400 to-orange-500 py-3 text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105">
                  More Information
                </button>
              </div>
            </div>
          </div>

          <!-- Servicio 4: Desarrollo Móvil - Violeta y Rosa -->
          <div class="service-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="service-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-pink-500 text-4xl shadow-lg shadow-violet-500/25">
                  📱
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">Mobile Development</h3>
                <p class="mb-6 text-gray-400">
                  Native and cross-platform mobile applications.
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>iOS & Android</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>React Native</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Flutter</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-400 to-pink-500 py-3 text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105">
                  More Information
                </button>
              </div>
            </div>
          </div>

          <!-- Servicio 5: E-commerce - Verde y Amarillo -->
          <div class="service-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-yellow-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="service-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-yellow-500 text-4xl shadow-lg shadow-green-500/25">
                  🛍️
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">E-commerce</h3>
                <p class="mb-6 text-gray-400">
                  Complete e-commerce solutions.
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Online Stores</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Payment Gateways</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Inventory Management</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-green-400 to-yellow-500 py-3 text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105">
                  More Information
                </button>
              </div>
            </div>
          </div>

          <!-- Servicio 6: IA & Machine Learning - Índigo y Azul -->
          <div class="service-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="service-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 text-4xl shadow-lg shadow-indigo-500/25">
                  🤖
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">AI & Machine Learning</h3>
                <p class="mb-6 text-gray-400">
                  Intelligent solutions for your business.
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>AI Chatbots</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Predictive Analysis</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>AI Automation</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-400 to-blue-500 py-3 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105">
                  More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portafolio Section -->
    <section id="portafolio" class="relative z-10 py-20">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-5xl font-bold text-white">
            Our Portfolio
          </h2>
          <p class="mx-auto max-w-2xl text-gray-400">
            Projects that speak for themselves
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Proyecto 1 -->
          <div class="portfolio-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="portfolio-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-4xl shadow-lg shadow-cyan-500/25">
                  🎨
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">App Móvil Fitness</h3>
                <p class="mb-6 text-gray-400">
                  Aplicación de seguimiento de ejercicios y nutrición
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>UI/UX Design</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>React Native</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                    <span>Backend Node.js</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105">
                  View project
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 2 -->
          <div class="portfolio-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="portfolio-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-500 text-4xl shadow-lg shadow-blue-500/25">
                  🛍️
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">E-commerce Moda</h3>
                <p class="mb-6 text-gray-400">
                  Tienda online de ropa y accesorios
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                    <span>Next.js</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                    <span>Stripe Payments</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                    <span>AWS Cloud</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-400 to-emerald-500 py-3 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105">
                  View project
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 3 -->
          <div class="portfolio-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="portfolio-icon-wrapper absolute -top-10 left-1/2 -translate-x-1/2">
                <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-orange-500 text-4xl shadow-lg shadow-pink-500/25">
                  🤖
                </div>
              </div>
              <div class="mt-12 text-center">
                <h3 class="mb-4 text-2xl font-bold text-white">AI Assistant</h3>
                <p class="mb-6 text-gray-400">
                  Chatbot inteligente para atención al cliente
                </p>
                <ul class="space-y-3 text-left text-gray-400">
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                    <span>OpenAI GPT-3</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                    <span>Vue.js</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                    <span>Python Backend</span>
                  </li>
                </ul>
                <button class="mt-8 w-full rounded-xl bg-gradient-to-r from-pink-400 to-orange-500 py-3 text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105">
                  View project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso Section -->
    <section id="proceso" class="relative z-10 py-20">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-5xl font-bold text-white">
            Our Process
          </h2>
          <p class="mx-auto max-w-2xl text-gray-400">
            Proven methodology to take your project to the next level
          </p>
        </div>
        
        <!-- Línea conectora - Modificada -->
        <div class="relative"> <!-- Agregamos un contenedor relativo -->
          <div class="process-line absolute left-1/2 h-[calc(100%-100px)] w-1 -translate-x-1/2 transform">
            <div class="h-full w-full animate-pulse bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-20"></div>
            <div class="absolute left-1/2 top-0 h-1/2 w-4 -translate-x-1/2 transform animate-glow bg-gradient-to-b from-cyan-400 to-transparent"></div>
          </div>

          <div class="relative flex flex-col space-y-12">
            <!-- Conectores horizontales para cada paso -->
            <div class="process-connector-left absolute left-[calc(50%-150px)] top-[15%] h-0.5 w-[150px] bg-gradient-to-r from-transparent to-cyan-400/50"></div>
            <div class="process-connector-right absolute left-1/2 top-[35%] h-0.5 w-[150px] bg-gradient-to-r from-blue-400/50 to-transparent"></div>
            <div class="process-connector-left absolute left-[calc(50%-150px)] top-[55%] h-0.5 w-[150px] bg-gradient-to-r from-transparent to-pink-400/50"></div>
            <div class="process-connector-right absolute left-1/2 top-[75%] h-0.5 w-[150px] bg-gradient-to-r from-violet-400/50 to-transparent"></div>

            <!-- Paso 1 -->
            <div class="process-card process-left group relative">
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl"></div>
              <div class="relative z-10 p-8">
                <div class="process-icon-wrapper absolute -top-10 left-8">
                  <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-4xl shadow-lg shadow-cyan-500/25">
                    1️⃣
                  </div>
                </div>
                <div class="mt-12 ml-4">
                  <h3 class="mb-4 text-2xl font-bold text-white">Discovery</h3>
                  <p class="mb-6 text-gray-400">
                    We analyze your needs and objectives to create a personalized strategy.
                  </p>
                  <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                      <span>Kickoff Meeting</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                      <span>Requirements Analysis</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                      <span>Initial Planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Paso 2 -->
            <div class="process-card process-right group relative ml-auto">
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-xl"></div>
              <div class="relative z-10 p-8">
                <div class="process-icon-wrapper absolute -top-10 right-8">
                  <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-500 text-4xl shadow-lg shadow-blue-500/25">
                    2️⃣
                  </div>
                </div>
                <div class="mt-12 mr-4">
                  <h3 class="mb-4 text-2xl font-bold text-white">Design</h3>
                  <p class="mb-6 text-gray-400">
                    We create prototypes and designs that capture your vision.
                  </p>
                  <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                      <span>Wireframes</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                      <span>Visual Design</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">✓</span>
                      <span>Interactive Prototypes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Paso 3 -->
            <div class="process-card process-left group relative">
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-xl"></div>
              <div class="relative z-10 p-8">
                <div class="process-icon-wrapper absolute -top-10 left-8">
                  <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-orange-500 text-4xl shadow-lg shadow-pink-500/25">
                    3️⃣
                  </div>
                </div>
                <div class="mt-12 ml-4">
                  <h3 class="mb-4 text-2xl font-bold text-white">Development</h3>
                  <p class="mb-6 text-gray-400">
                    We convert designs into functional code and optimize it.
                  </p>
                  <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                      <span>Frontend Development</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                      <span>Backend Development</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">✓</span>
                      <span>Quality Control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Paso 4 -->
            <div class="process-card process-right group relative ml-auto">
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 backdrop-blur-xl"></div>
              <div class="relative z-10 p-8">
                <div class="process-icon-wrapper absolute -top-10 right-8">
                  <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-pink-500 text-4xl shadow-lg shadow-violet-500/25">
                    4️⃣
                  </div>
                </div>
                <div class="mt-12 mr-4">
                  <h3 class="mb-4 text-2xl font-bold text-white">Launch</h3>
                  <p class="mb-6 text-gray-400">
                    We deploy your project and ensure its success.
                  </p>
                  <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">✓</span>
                      <span>Final Testing</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">✓</span>
                      <span>Deployment</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <span class="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">✓</span>
                      <span>Continuous Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Contacto -->
    <section id="contacto" class="relative z-10 py-20">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-5xl font-bold text-white">
            Contact Us
          </h2>
          <p class="mx-auto max-w-2xl text-gray-400">
            Ready to take the next step? Let's talk about your project
          </p>
        </div>

        <div class="grid gap-12 md:grid-cols-2">
          <!-- Formulario de Contacto -->
          <div class="contact-form-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <form class="space-y-6" @submit.prevent="handleSubmit">
                <div class="form-group space-y-2" 
                     v-for="(field, index) in formFields" 
                     :key="field.id"
                     :style="{ '--delay': `${index * 0.1}s` }"
                     :class="['fade-up-enter-active']">
                  <label class="block text-sm font-medium text-gray-300">{{ field.label }}</label>
                  <component
                    :is="field.type === 'textarea' ? 'textarea' : 'input'"
                    v-model="field.value"
                    :type="field.inputType"
                    :placeholder="field.placeholder"
                    :class="[
                      'w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3',
                      'text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300',
                      'focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20',
                      'transform-gpu hover:border-cyan-400/50',
                      field.type === 'textarea' ? 'h-32' : '',
                      'animate-form-field'
                    ]"
                    @focus="field.focused = true"
                    @blur="field.focused = false"
                  />
                </div>

                <button 
                  type="submit"
                  class="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-4 text-white 
                         shadow-lg shadow-cyan-500/25 transition-all duration-300 
                         hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40
                         active:scale-95
                         animate-form-button"
                >
                  Send Message
                  <span class="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Información de Contacto y Redes Sociales -->
          <div class="contact-info-card group relative">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl"></div>
            <div class="relative z-10 p-8">
              <div class="mb-8">
                <h3 class="mb-4 text-2xl font-bold text-white">Contact Information</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                      <svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-400">Phone</p>
                      <p class="text-white">+1 234 567 890</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                      <svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-400">Email</p>
                      <p class="text-white">contacto@createstudio.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="mb-4 text-2xl font-bold text-white">Follow Us</h3>
                <div class="flex space-x-4">
                  <!-- Instagram -->
                  <a href="#" class="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all hover:scale-110 hover:from-purple-500 hover:to-pink-500">
                    <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  <!-- Twitter/X -->
                  <a href="#" class="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all hover:scale-110 hover:from-purple-500 hover:to-pink-500">
                    <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  <!-- LinkedIn -->
                  <a href="#" class="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all hover:scale-110 hover:from-purple-500 hover:to-pink-500">
                    <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  <!-- GitHub -->
                  <a href="#" class="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all hover:scale-110 hover:from-purple-500 hover:to-pink-500">
                    <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Botón WhatsApp -->
    <a 
      href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      class="group fixed bottom-8 left-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-green-500/50"
    >
      <div class="absolute -inset-2 animate-pulse rounded-full bg-green-500/20"></div>
      <svg 
        class="h-7 w-7 transform transition-transform duration-300 group-hover:scale-110" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>

    <!-- Botón Volver Arriba -->
    <button 
      @click="scrollToTop"
      class="group fixed bottom-8 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/25 backdrop-blur-xl transition-all hover:scale-110 hover:shadow-cyan-500/50"
      :class="{ 'translate-y-24 opacity-0': !showScrollButton, 'translate-y-0 opacity-100': showScrollButton }"
    >
      <svg 
        class="h-6 w-6 transform transition-transform duration-300 group-hover:-translate-y-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>

    
  </div>
</template>

<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const isMenuOpen = ref(false)
const content = ref(null)
const showScrollButton = ref(false)

// Función para manejar el scroll
const handleScroll = () => {
  showScrollButton.value = window.pageYOffset > 100 // Reducido para que aparezca antes
}

// Funciones para el menú móvil
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Función para scroll suave hacia arriba
const scrollToTop = () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: 0, autoKill: false },
    ease: 'power3.inOut'
  });
};

onMounted(() => {
  // Llamar a handleScroll inmediatamente para verificar si debemos mostrar el botón
  handleScroll()
  
  // Agregar evento de scroll
  window.addEventListener('scroll', handleScroll)
  
  // Configuración de Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  const container = document.getElementById('canvas-container');
  
  if (!container) return;
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Crear cubos con más variedad y movimiento
  const cubes = [];
  const cubeCount = 80; // Aumentamos la cantidad de cubos
  const colors = [0x00ffff, 0xff00ff, 0xffff00, 0x00ff00, 0xff0099, 0x00ff99];

  for (let i = 0; i < cubeCount; i++) {
    const size = Math.random() * 1.5 + 0.5; // Tamaños variables
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      transparent: true,
      opacity: 0.6,
      specular: 0xffffff,
      shininess: 100,
      side: THREE.DoubleSide
    });
    
    const cube = new THREE.Mesh(geometry, material);
    
    // Distribución más amplia
    cube.position.x = Math.random() * 60 - 30;
    cube.position.y = Math.random() * 60 - 30;
    cube.position.z = Math.random() * 60 - 30;
    
    // Rotación inicial aleatoria
    cube.rotation.x = Math.random() * Math.PI;
    cube.rotation.y = Math.random() * Math.PI;
    cube.rotation.z = Math.random() * Math.PI;
    
    // Velocidades de rotación y movimiento personalizadas
    cubes.push({
      mesh: cube,
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      },
      floatSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      },
      initialY: cube.position.y
    });
    
    scene.add(cube);
  }

  // Luces
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  camera.position.z = 30;

  // Efecto de mouse
  let mouseX = 0;
  let mouseY = 0;

  const handleMouseMove = (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Animación
  const animate = () => {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    cubes.forEach((cube) => {
      // Rotación continua
      cube.mesh.rotation.x += cube.rotationSpeed.x;
      cube.mesh.rotation.y += cube.rotationSpeed.y;
      cube.mesh.rotation.z += cube.rotationSpeed.z;
      
      // Movimiento flotante sinusoidal
      cube.mesh.position.y = cube.initialY + Math.sin(time + cube.initialY) * 2;
      
      // Movimiento suave en X y Z
      cube.mesh.position.x += Math.sin(time * 0.5) * cube.floatSpeed.x;
      cube.mesh.position.z += Math.cos(time * 0.5) * cube.floatSpeed.z;
      
      // Efecto de mouse mejorado
      cube.mesh.rotation.x += mouseY * 0.02;
      cube.mesh.rotation.y += mouseX * 0.02;
      cube.mesh.position.x += mouseX * 0.05;
      cube.mesh.position.y += mouseY * 0.05;

      // Mantener los cubos dentro de los límites
      if (Math.abs(cube.mesh.position.x) > 30) cube.mesh.position.x *= -0.9;
      if (Math.abs(cube.mesh.position.y) > 30) cube.mesh.position.y *= -0.9;
      if (Math.abs(cube.mesh.position.z) > 30) cube.mesh.position.z *= -0.9;
    });

    renderer.render(scene, camera);
  };

  animate();

  // Responsive
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animaciones GSAP
  if (content.value) {
    gsap.to(content.value, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      y: 0
    });
  }

  // Animaciones de servicios
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '#servicios',
      start: 'top center+=50px',
      toggleActions: 'play none none none',
      once: true
    },
    y: 30,
    opacity: 0,
    scale: 0.98,
    duration: 0.3,
    stagger: {
      amount: 0.15,
      from: "start"
    },
    ease: 'power2.out'
  });

  // Animaciones de portafolio
  gsap.from('.portfolio-card', {
    scrollTrigger: {
      trigger: '#portafolio',
      start: 'top center+=50px',
      toggleActions: 'play none none none',
      once: true
    },
    y: 30,
    opacity: 0,
    scale: 0.98,
    duration: 0.3,
    stagger: {
      amount: 0.15,
      from: "start"
    },
    ease: 'power2.out'
  });

  // Animación para el título de cada sección
  gsap.utils.toArray('section h2').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
        once: true
      },
      duration: 0.5,
      y: 50,
      opacity: 0,
      scale: 0.95,
      ease: 'power2.out'
    });
  });

  // Efecto parallax en las imágenes del portafolio
  gsap.utils.toArray('.portfolio-card img').forEach(img => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -50
    });
  });

  // Animaciones para la sección de proceso
  gsap.from('.process-left', {
    scrollTrigger: {
      trigger: '#proceso',
      start: 'top center+=100',
      toggleActions: 'play none none none',
      once: true
    },
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.process-right', {
    scrollTrigger: {
      trigger: '#proceso',
      start: 'top center+=100',
      toggleActions: 'play none none none',
      once: true
    },
    x: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    ease: 'power2.out'
  });

  // Cleanup
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = '' // Limpiar overflow al desmontar
  }
})

// Efecto de brillo en las cards
const cards = document.querySelectorAll('.service-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});

// Agregar el estado del formulario
const formFields = ref([
  {
    id: 1,
    label: 'Name',
    type: 'input',
    inputType: 'text',
    placeholder: 'Your full name',
    value: '',
    focused: false
  },
  {
    id: 2,
    label: 'Email',
    type: 'input',
    inputType: 'email',
    placeholder: 'your@email.com',
    value: '',
    focused: false
  },
  {
    id: 3,
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us about your project...',
    value: '',
    focused: false
  }
])

// Manejar el envío del formulario
const handleSubmit = () => {
  // Aquí iría la lógica de envío del formulario
  console.log('Form submitted:', formFields.value.map(f => ({ [f.label]: f.value })))
}

</script>

<style>
.hero-title {
  text-shadow: 0 0 30px rgba(0,255,255,0.3);
}

button {
  backdrop-filter: blur(4px);
}

.service-card {
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

/* Animaciones suaves */
a, button {
  transition: all 0.3s ease;
}

/* Efecto hover para cards */
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0,255,255,0.2);
}

/* Efecto para íconos */
.service-icon {
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(10deg);
}

/* Efecto para imágenes del portafolio */
.portfolio-card img {
  transition: transform 0.5s ease;
}

.portfolio-card:hover img {
  transform: scale(1.1);
}

.service-card {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.service-icon-wrapper {
  transform: translateZ(30px);
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: translateZ(50px) translateY(-5px);
}

.service-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(45deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1));
  border-radius: 24px;
  z-index: -1;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.service-card:hover::before {
  opacity: 1;
}

/* Animación flotante para los íconos */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.service-icon-wrapper {
  animation: float 3s ease-in-out infinite;
}

/* Efecto de brillo en hover */
.service-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(255,255,255,0.1) 0%, 
              transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.service-card:hover::after {
  opacity: 1;
}

/* Estilos para las tarjetas de proceso */
.process-card {
  width: 100%;
  max-width: 600px;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.process-left {
  transform-origin: left center;
}

.process-right {
  transform-origin: right center;
}

.process-icon-wrapper {
  transform: translateZ(30px);
  transition: transform 0.3s ease;
}

.process-card:hover .process-icon-wrapper {
  transform: translateZ(50px) translateY(-5px);
}

/* Efecto de brillo para las tarjetas de proceso */
.process-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(45deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1));
  border-radius: 24px;
  z-index: -1;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.process-card:hover::before {
  opacity: 1;
}

/* Animación flotante para los íconos de proceso */
.process-icon-wrapper {
  animation: float 3s ease-in-out infinite;
}

/* Estilos para la línea conectora */
.process-line {
  pointer-events: none;
}

@keyframes glow {
  0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.5); }
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

/* Animación para los conectores horizontales */
.process-connector-left, .process-connector-right {
  animation: fadeInScale 1s ease-out forwards;
  opacity: 0;
  transform-origin: center;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

/* Ajuste de las tarjetas de proceso para alineación con los conectores */
.process-left {
  margin-right: auto;
  margin-left: 0;
}

.process-right {
  margin-left: auto;
  margin-right: 0;
}

/* Efecto hover en los conectores */
.process-card:hover + .process-connector-left,
.process-card:hover + .process-connector-right {
  animation: pulseGlow 1.5s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Animaciones para los campos del formulario */
.animate-form-field {
  animation: formFieldEnter 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

@keyframes formFieldEnter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación para el botón del formulario */
.animate-form-button {
  animation: formButtonEnter 0.6s ease-out backwards;
  animation-delay: 0.3s;
}

@keyframes formButtonEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Efecto de focus mejorado */
.form-group:focus-within label {
  color: theme('colors.cyan.400');
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Animación de label */
.form-group label {
  transition: all 0.3s ease;
}

/* Efecto hover para los campos */
.form-group input:hover,
.form-group textarea:hover {
  border-color: theme('colors.cyan.400/30');
  box-shadow: 0 0 15px theme('colors.cyan.400/10');
}

/* Efecto de escritura activa */
.form-group input:focus,
.form-group textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px theme('colors.cyan.400/20');
}

/* Animación del placeholder */
.form-group input::placeholder,
.form-group textarea::placeholder {
  transition: all 0.3s ease;
}

.form-group input:focus::placeholder,
.form-group textarea:focus::placeholder {
  opacity: 0.5;
  transform: translateX(10px);
}

/* Efecto de ondulación al hacer clic */
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 theme('colors.cyan.400/30');
  }
  100% {
    box-shadow: 0 0 0 20px theme('colors.cyan.400/0');
  }
}

.form-group input:active,
.form-group textarea:active {
  animation: ripple 0.6s ease-out;
}

/* Estilos para el botón de scroll */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

button[class*="fixed"] {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

button[class*="fixed"]::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  border-radius: 9999px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

button[class*="fixed"]:hover::before {
  opacity: 0.3;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Estilos para el menú móvil */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Estilos para el botón de WhatsApp */
@keyframes pulse-whatsapp {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse-whatsapp 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Ajustes responsive para los botones flotantes */
@media (max-width: 640px) {
  .fixed.bottom-8 {
    bottom: 1.5rem;
  }
  
  .fixed.left-8 {
    left: 1.5rem;
  }
  
  .fixed.right-8 {
    right: 1.5rem;
  }
  
  /* Asegurar que el botón de scroll sea visible */
  [class*="translate-y-24"] {
    transform: translateY(6rem);
  }
}

/* Asegurar que el botón de menú sea visible */
button[aria-label="Menu"] span {
  transform-origin: center;
  will-change: transform;
}

/* Mejorar visibilidad de los botones flotantes */
.fixed {
  will-change: transform;
  backface-visibility: hidden;
}

/* Animaciones para los campos del formulario */
.animate-form-field {
  animation: formFieldEnter 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

@keyframes formFieldEnter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación para el botón del formulario */
.animate-form-button {
  animation: formButtonEnter 0.6s ease-out backwards;
  animation-delay: 0.3s;
}

@keyframes formButtonEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Efecto de focus mejorado */
.form-group:focus-within label {
  color: theme('colors.cyan.400');
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Animación de label */
.form-group label {
  transition: all 0.3s ease;
}

/* Efecto hover para los campos */
.form-group input:hover,
.form-group textarea:hover {
  border-color: theme('colors.cyan.400/30');
  box-shadow: 0 0 15px theme('colors.cyan.400/10');
}

/* Efecto de escritura activa */
.form-group input:focus,
.form-group textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px theme('colors.cyan.400/20');
}

/* Animación del placeholder */
.form-group input::placeholder,
.form-group textarea::placeholder {
  transition: all 0.3s ease;
}

.form-group input:focus::placeholder,
.form-group textarea:focus::placeholder {
  opacity: 0.5;
  transform: translateX(10px);
}

/* Efecto de ondulación al hacer clic */
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 theme('colors.cyan.400/30');
  }
  100% {
    box-shadow: 0 0 0 20px theme('colors.cyan.400/0');
  }
}

.form-group input:active,
.form-group textarea:active {
  animation: ripple 0.6s ease-out;
}
</style>
