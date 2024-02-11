<template>
  <!-- component -->
  <div class="container mx-auto w-full h-full">
    <div class="relative wrap overflow-hidden p-10 h-full transition-all">
      <div class="border-2-2 absolute border-opacity-20 border-white h-full border" style="left: 50%"></div>
      <!-- right timeline -->
      <div class="mb-8 flex justify-between items-center w-full right-timeline">
        <div class="order-1 w-5/12"></div>
        <div class="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-gray-800">1</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 px-6 py-4">
          <h3 class="mb-1 font-bold text-white text-xl">Detikcom - Web Developer</h3>
          <span class="text-md">(Nov 2023 - Current)</span>
          <p class="text-sm leading-snug tracking-wide text-white text-opacity-100"></p>
        </div>
      </div>

      <!-- left timeline -->
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div class="order-1 w-6/12"></div>
        <div class="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full">
          <h1 class="mx-auto text-gray-800 font-semibold text-lg">2</h1>
        </div>
        <div class="order-1 rounded-lg w-6/12 px-6 py-4">
          <h3 class="mb-1 font-bold text-white text-xl">Pintro - Backend Developer</h3>
          <span class="text-md">(May 2023 - Nov 2023)</span>
          <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
            Migrate old technology to a new tech stack using Golang, employing a microservices architecture.
            <br>
            <br>
            - Migrated APIs from PHP Laravel to Golang <br>
            - Improved the generation of Journal Payment from 1-2 minutes per case to less than 5 seconds per case, reducing error cases such as full server load <br>
            - Created a Notification server (WhatsApp, SMS, Pusher, email) with dynamic templates <br>
            - Set up CI/CD and unit testing <br>
            - Implemented a Worker for background jobs <br>
            - Implemented Clean Architecture for all microservices <br>
            - Implemented a Queue to prevent server overload from numerous requests <br>
          </p>
        </div>
      </div>
      
      <!-- right timeline -->
      <div class="mb-8 flex justify-between items-center w-full right-timeline">
        <div class="order-1 w-5/12"></div>
        <div class="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-gray-800">3</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 px-6 py-4">
          <h3 class="mb-1 font-bold text-white text-xl">Transflynd - Junior Fullstack Developer</h3>
          <span class="text-md">(Sep 2019 - Apr 2023)</span>
          <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
            Develop and maintain application to ensure good performance, add new features, and address urgent hotfixes.<br>
  - Import data optimization: Reduced processing time from 30 minutes to less than 2 minutes for datasets exceeding 100,000 rows<br>
  - Enhanced existing features and addressed hotfixes for both Frontend (Vue/Nuxt) and Backend (Golang) applications. </p>
        </div>
      </div>

      <!-- left timeline
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div class="order-1 w-5/12"></div>
        <div class="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full">
          <h1 class="mx-auto text-gray-800 font-semibold text-lg">4</h1>
        </div>
        <div class="order-1 bg-red-400 rounded-lg w-5/12 px-6 py-4">
          <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
          <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div> -->
    </div>
  </div>
</template>