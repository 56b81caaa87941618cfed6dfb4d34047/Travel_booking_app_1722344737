Vue.component("dark_footer_component_1722344739", {
    template: `
<footer class="bg-purple-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div class="space-y-4">
                <img src="./images/logo.svg" alt="Logo" class="h-10">
                <p class="text-purple-200">Book extraordinary trips and create unforgettable memories.</p>
                <div class="flex space-x-4">
                    <a href="#" class="text-purple-200 hover:text-white"><i class='bx bxl-facebook-circle text-2xl'></i></a>
                    <a href="#" class="text-purple-200 hover:text-white"><i class='bx bxl-twitter text-2xl'></i></a>
                    <a href="#" class="text-purple-200 hover:text-white"><i class='bx bxl-instagram text-2xl'></i></a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Company</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-purple-200 hover:text-white">About Us</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Careers</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Partners</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Press</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Explore</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-purple-200 hover:text-white">Destinations</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Travel Guides</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Trip Ideas</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Blog</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Support</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-purple-200 hover:text-white">Help Center</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Contact Us</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Booking Information</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white">Cancellation Policy</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                <p class="text-purple-200 mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
                <form @submit.prevent="subscribeNewsletter" class="flex">
                    <input type="email" v-model="email" placeholder="Your email" class="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow">
                    <button type="submit" class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-lg transition duration-300">Subscribe</button>
                </form>
            </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-purple-800 text-center">
            <p class="text-purple-200">&copy; 2023 Book Extraordinary Trips. All rights reserved.</p>
        </div>
    </div>
</footer>
    `,
    data() {
        return {
            email: ''
        };
    },
    methods: {
        // Start of subscribeNewsletter method
        subscribeNewsletter() {
            // Logic for newsletter subscription
            console.log('Subscribing email:', this.email);
            // Reset email input
            this.email = '';
        }
        // End of subscribeNewsletter method
    }
});