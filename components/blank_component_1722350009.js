/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722350009", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <nav class="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg p-4">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <i class='bx bx-menu text-2xl text-white'></i>
                        <span class="text-xl font-bold text-white">Logo</span>
                    </div>
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="#" class="text-white hover:text-purple-300">Home</a>
                        <a href="#" class="text-white hover:text-purple-300">Products</a>
                        <a href="#" class="text-white hover:text-purple-300">About</a>
                        <a href="#" class="text-white hover:text-purple-300">Contact</a>
                        <a href="#" class="text-white hover:text-purple-300">Services</a>
                        <a href="#" class="text-white hover:text-purple-300">Blog</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">Login</button>
                        <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>          
    `,
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
