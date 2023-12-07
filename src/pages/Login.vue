<template>
  <div class="min-h-screen bg-primary-0 flex flex-col">
    <header>
        <LoginRegisterNav/>
    </header>
    
    <main class="flex-1 flex md:mt-16 items-center md:items-start justify-center">
      <div class="p-8 md:w-auto max-md:max-w-lg w-full">
        <!-- card -->
        <div class="flex w-full shadow border rounded-3xl">
            <!-- 1st content -->
            <div class="hidden md:flex justify-center bg-tertiary-0 rounded-l-3xl items-center">
                <img class="p-8 h-auto max-w-full" src="../assets/Login.svg" alt="">
            </div>
            <!-- 2nd content -->
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-secondary-0 font-roboto">LOGIN</h1>
                </div>
                <form>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
                    </div> 
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
                    </div>
                    <div class="mb-6 text-center p-4 border-b text-blue-500 hover:underline">
                        <a href="">Forgot Password?</a>
                    </div>
                    <div class="text-center mb-6">
                        <span>Doesn't have an account? <br> <a class="text-blue-500 hover:underline" href="">Sign Up</a></span>
                    </div>
                    <button type="submit" class="text-white bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center">LOGIN</button>
                </form>
            </div>
        </div>
      </div>
    </main>

    <footer class="bg-primary-0 shadow mt-auto">
        <div class="w-full p-4">
          <h1 class="text-sm text-center text-gray-500">© 2023 Tailoring System. All Rights Reserved.
          </h1>
        </div>
    </footer>
  </div>
</template>

<script setup>
import LoginRegisterNav from '../components/cutomer/nav/Login.Register.Nav.vue';
</script>