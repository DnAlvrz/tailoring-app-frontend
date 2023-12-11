<template>
                <div class="w-full md:block p-4 bg-primary-0">
                <div class="w-full p-3 border-b">
                    <h3 class="font-roboto text-lg font-semibold ">My Profile</h3>
                    <p class="font-roboto text-sm">Account information</p>
                </div>

                <div class="p-3">
                    <!-- profile tab -->
                    <div class="flex flex-col lg:flex-row border-b lg:border-none justify-between">
                        <div class="lg:border-r lg:w-full">
                            <form>
                                <div class="flex border-b lg:border-none pb-4 flex-col">
                                    <div class="flex mb-2 items-center">
                                        <label for="first_name" class="bg-primary-0 text-right w-40 text-sm font-medium text-gray-900">Full name</label>
                                        <input type="text" id="first_name" class="text-gray-900 w-full mx-10 border border-gray-300 focus:ring-tertiary-0  focus:border-tertiary-0 text-sm block" value="John Doe">
                                    </div>
                                    <div class="flex mb-2 justify-around items-center">
                                        <label for="first_name" class="bg-primary-0 w-40 text-sm text-right font-medium text-gray-900">Phone Number</label>
                                        <input type="text" id="number-input" aria-describedby="helper-text-explanation" class="text-gray-900 w-full mx-10 border border-gray-300 focus:ring-tertiary-0  focus:border-tertiary-0 text-sm block " value="*********89" pattern="^(09|\+639)\d{9}$" required>                                </div>
                                    <div class="flex justify-around mb-2 items-center">
                                        <label for="first_name" class="bg-primary-0 w-40 text-sm text-right font-medium text-gray-900">Email</label>
                                        <input type="email" id="first_name" class="text-gray-900 w-full mx-10 border border-gray-300 focus:ring-tertiary-0  focus:border-tertiary-0 text-sm block" value="Jo*****@yahoo.com">
                                    </div>
                                    <div class="flex justify-around mb-2 items-center">
                                        <label for="BD" class="bg-primary-0 w-40 text-sm text-right font-medium text-gray-900">Birthdate</label>
                                        <input type="date" id="BD" class="text-gray-900 w-full mx-10 border border-gray-300 focus:ring-tertiary-0  focus:border-tertiary-0 text-sm block" value="2017-06-01">
                                    </div>
                                    <button type="submit" class="text-white self-center mt-2 bg-tertiary-0 hover:bg-secondary-0 font-medium text-sm px-5 py-2.5 text-center">Save</button>
                                </div>
                            </form>
                        </div>
                        <div class="flex lg:w-full items-center pb-6 mt-10 justify-center">
                            <form>
                                <div class="flex flex-col gap-4 items-center space-x-6">
                                    <div class="shrink-0">
                                    <img id='preview_img' class="h-16 w-16 object-cover rounded-full" src="../../assets/Shorts.jpg" alt="Current profile photo" />
                                    </div>
                                    <label class="block">
                                    <span class="sr-only">Choose profile photo</span>
                                    <input type="file" class="block w-full text-sm text-slate-500"/>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class=" mt-10">
                        <div class="w-full p-3 border-b">
                            <h4 class="font-roboto text-lg font-semibold">ADDRESS</h4>
                        </div>
                        <form>
                            <div class="flex mt-4 items-center">
                                <label for="address" class="bg-primary-0 w-40 text-sm text-right font-medium text-gray-900">Location</label>
                                <input type="text" id="address" class="text-gray-900 w-full mx-10 border border-gray-300 focus:ring-tertiary-0  focus:border-tertiary-0 text-sm block" value="Dacon Homes Recodo, Zamboanga City" required>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
</template>