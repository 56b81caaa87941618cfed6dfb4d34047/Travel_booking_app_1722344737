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
            <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <nav class="bg-white shadow-md rounded-lg p-4 mb-8">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <i class='bx bx-menu text-2xl'></i>
                                <span class="text-xl font-bold">Logo</span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <a href="#" class="text-gray-600 hover:text-gray-800">Home</a>
                                <a href="#" class="text-gray-600 hover:text-gray-800">Products</a>
                                <a href="#" class="text-gray-600 hover:text-gray-800">About</a>
                                <a href="#" class="text-gray-600 hover:text-gray-800">Contact</a>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
                                <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
