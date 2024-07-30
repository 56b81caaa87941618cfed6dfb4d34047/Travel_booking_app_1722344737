/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1722344739", {
    template: `
    <header class="w-full z-30 bg-purple-800" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between h-20">
    
                <div id="site-branding" class="flex-1">
                    <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
                        <img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar">
                    </a>
                </div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Explore Destinations-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-100 hover:text-white" href="Explore Destinations.html">Explore Destinations</a></li>
                        <li><a id="Book Flights-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-100 hover:text-white" href="Book Flights.html">Book Flights</a></li>
                        <li><a id="Find Hotels-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-100 hover:text-white" href="Find Hotels.html">Find Hotels</a></li>
                        <li><a id="Travel Deals-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-100 hover:text-white" href="Travel Deals.html">Travel Deals</a></li>
                        <li><a id="Travel Guide-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-100 hover:text-white" href="Travel Guide.html">Travel Guide</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-500 transition duration-150 ease-in-out mr-4" href="signin.html">Sign in</a></li>
                    <li><a id="sign-up-link" class="font-medium text-sm px-4 py-2 rounded-md bg-white text-purple-800 hover:bg-purple-100 transition duration-150 ease-in-out" href="signup.html">Sign up</a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-6 h-6 fill-current text-white transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect y="4" width="24" height="2" rx="1" />
                            <rect y="11" width="24" height="2" rx="1" />
                            <rect y="18" width="24" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out bg-purple-700" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="py-2">
                            <li><a id="mobile-Explore Destinations-link" class="block font-medium text-sm py-2 text-purple-100 hover:text-white" href="Explore Destinations.html">Explore Destinations</a></li>
                            <li><a id="mobile-Book Flights-link" class="block font-medium text-sm py-2 text-purple-100 hover:text-white" href="Book Flights.html">Book Flights</a></li>
                            <li><a id="mobile-Find Hotels-link" class="block font-medium text-sm py-2 text-purple-100 hover:text-white" href="Find Hotels.html">Find Hotels</a></li>
                            <li><a id="mobile-Travel Deals-link" class="block font-medium text-sm py-2 text-purple-100 hover:text-white" href="Travel Deals.html">Travel Deals</a></li>
                            <li><a id="mobile-Travel Guide-link" class="block font-medium text-sm py-2 text-purple-100 hover:text-white" href="Travel Guide.html">Travel Guide</a></li>
                            <li><a id="mobile-sign-in-link" class="block font-medium text-sm py-2 mt-4 text-center bg-purple-600 text-white hover:bg-purple-500 rounded-md" href="signin.html">Sign in</a></li>
                            <li><a id="mobile-sign-up-link" class="block font-medium text-sm py-2 mt-2 text-center bg-white text-purple-800 hover:bg-purple-100 rounded-md" href="signup.html">Sign up</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>

    <div class="bg-gradient-to-r from-gray-900 to-purple-900 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Book Your Dream Flight Today
                </h1>
                <p class="mt-3 max-w-md mx-auto text-base text-purple-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Experience hassle-free booking and embark on your next adventure with our top-rated flight service.
                </p>
                <div class="mt-10 sm:flex sm:justify-center">
                    <div class="rounded-md shadow-lg">
                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gray-900 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-purple-400 text-center mb-12">
                What Our Customers Say
            </h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
                    <p class="text-purple-200 mb-4">"Booking my flight was incredibly easy. The service is top-notch!"</p>
                    <p class="font-bold text-purple-400">- Sarah J.</p>
                </div>
                <div class="bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
                    <p class="text-purple-200 mb-4">"I found great deals and saved a lot on my last trip. Highly recommended!"</p>
                    <p class="font-bold text-purple-400">- Mike T.</p>
                </div>
                <div class="bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
                    <p class="text-purple-200 mb-4">"The customer support is excellent. They helped me every step of the way."</p>
                    <p class="font-bold text-purple-400">- Emily R.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">

    <div class="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-extrabold text-purple-400 mb-6">Customer Support</h2>
            <form class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-purple-300">Name</label>
                    <input type="text" name="name" id="name" class="mt-1 block w-full bg-gray-800 border-purple-500 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-purple-300">Email</label>
                    <input type="email" name="email" id="email" class="mt-1 block w-full bg-gray-800 border-purple-500 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white">
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-purple-300">Subject</label>
                    <input type="text" name="subject" id="subject" class="mt-1 block w-full bg-gray-800 border-purple-500 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white">
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-purple-300">Message</label>
                    <textarea id="message" name="message" rows="4" class="mt-1 block w-full bg-gray-800 border-purple-500 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white"></textarea>
                </div>
                <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Submit Request
                    </button>
                </div>
            </form>
        </div>
    </div>
        data() {
            return {
                expanded: false, 
                tab: null,
                textStylePrimary: 'text-purple-100',
                hoverTextStylePrimary: 'hover:text-white',
                signUpButtonText: "text-purple-800",
                signUpButtonHover: "hover:bg-purple-100",
                signUpButtonGradient: "bg-white",
                signUpButtonArrow: "text-purple-500",
            };
        },
        methods: {
            // Start of submitSupportRequest method
            submitSupportRequest(event) {
                event.preventDefault();
                // Here you would typically send the form data to your backend
                console.log('Support request submitted');
                // Reset form fields after submission
                event.target.reset();
            }
            // End of submitSupportRequest method
        }
    });
                    