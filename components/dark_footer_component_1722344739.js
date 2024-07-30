Vue.component("dark_footer_component_1722344739", {
    template: `
<footer class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div class="space-y-6">
                <img src="./images/logo.svg" alt="Logo" class="h-12">
                <p class="text-purple-200 text-sm">Experience extraordinary journeys and create unforgettable memories with our curated travel experiences.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-purple-300 hover:text-white transition-colors duration-300"><i class='bx bxl-facebook-circle text-2xl'></i></a>
                    <a href="#" class="text-purple-300 hover:text-white transition-colors duration-300"><i class='bx bxl-twitter text-2xl'></i></a>
                    <a href="#" class="text-purple-300 hover:text-white transition-colors duration-300"><i class='bx bxl-instagram text-2xl'></i></a>
                    <a href="#" class="text-purple-300 hover:text-white transition-colors duration-300"><i class='bx bxl-linkedin text-2xl'></i></a>
                </div>
            </div>
            
            <div>
                <h3 class="text-xl font-semibold mb-6 text-purple-300">Company</h3>
                <ul class="space-y-4">
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">About Us</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Careers</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Partners</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Press</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Sustainability</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-xl font-semibold mb-6 text-purple-300">Explore</h3>
                <ul class="space-y-4">
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Destinations</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Travel Guides</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Trip Ideas</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Blog</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Travel Deals</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-xl font-semibold mb-6 text-purple-300">Support</h3>
                <ul class="space-y-4">
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Help Center</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Contact Us</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Booking Information</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Cancellation Policy</a></li>
                    <li><a href="#" class="text-purple-200 hover:text-white transition-colors duration-300">Travel Insurance</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-xl font-semibold mb-6 text-purple-300">Newsletter</h3>
                <p class="text-purple-200 mb-6 text-sm">Subscribe to our newsletter for exclusive travel tips, inspiration, and special offers.</p>
                <form @submit.prevent="subscribeNewsletter" class="flex flex-col space-y-4">
                    <input type="email" v-model="email" placeholder="Your email address" class="px-4 py-3 rounded-lg bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300 font-semibold">Subscribe Now</button>
                </form>
            </div>
        </div>
        
        <div class="mt-16 pt-8 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center">
            <p class="text-purple-300 text-sm mb-4 md:mb-0">&copy; 2023 Book Extraordinary Trips. All rights reserved.</p>
            <div class="flex space-x-6">
                <a href="#" class="text-purple-300 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" class="text-purple-300 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" class="text-purple-300 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
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