<template>
<!-- Modal toggle -->
<button data-modal-target="default-modal" data-modal-toggle="default-modal" class="font-roboto text-primary-0 bg-tertiary-0 hover:bg-secondary-0 focus:ring-4 focus:ring-tertiary-0 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2" type="button">
  View
</button>

<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-primary-0 rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <div class="flex flex-col">
                    <h3 class="text-xl font-roboto font-semibold text-secondary-0">
                        View User
                    </h3>
                    <span class="font-roboto text-gray-400">Last online: July 2, 2021</span>
                </div>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <div class="flex flex-row gap-4">
                    <div>
                        <svg class="rounded bg-gray-500 w-36 h-36 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <form>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="John" required>
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Doe" required>
                                </div>
                                <div>
                                    <label for="BD" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Birth Date</label>
                                    <input type="date" id="BD" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" required>

                                </div>  
                                <div>
                                    <label for="address" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Address</label>
                                    <input type="text" id="address" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="Recodo, Zamboanga City" required>
                                </div>
                                <div>
                                    <label for="contact" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Contact No.</label>
                                    <input type="tel" id="contact" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                </div>
                                <div>
                                    <label for="DA" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Date Added</label>
                                    <input type="date" id="DA" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" required>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-secondary-0 font-roboto">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-secondary-0 font-roboto text-sm rounded-lg focus:ring-tertiary-0 focus:border-tertiary-0 block w-full p-2.5" placeholder="john.doe@company.com" required>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
