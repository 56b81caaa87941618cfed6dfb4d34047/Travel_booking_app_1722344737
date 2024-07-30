Vue.component("dark_footer_component_1722344739", {
    template: `
<div class="bg-blue-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold mb-8 text-purple-300">Popular Crypto Staking Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in projects" :key="project.name" class="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg shadow-lg p-6 hover:shadow-purple-500/50 transition duration-300">
                <h3 class="text-2xl font-semibold mb-4 text-purple-300">{{ project.name }}</h3>
                <p class="mb-2">Average Yield: {{ project.avgYield }}%</p>
                <p class="mb-2">Risk Score: {{ project.riskScore }}/10</p>
                <p class="mb-4">Slashing Likelihood: {{ project.slashingLikelihood }}%</p>
                <button @click="autoStake(project)" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-purple-500/50 transition duration-300">
                    Auto-Stake
                </button>
            </div>
        </div>
        <div class="mt-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg shadow-lg p-6 hover:shadow-purple-500/50 transition duration-300">
            <h3 class="text-2xl font-semibold mb-4 text-purple-300">Auto-Stake Explanation</h3>
            <p class="text-lg">
                The "Auto-Stake" button will automatically choose the best yield farming option on your behalf, 
                optimizing your returns while considering risk factors and slashing likelihood.
            </p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            projects: [
                { name: "Ethereum 2.0", avgYield: 5.2, riskScore: 3, slashingLikelihood: 0.1 },
                { name: "Rocket Pool", avgYield: 4.8, riskScore: 4, slashingLikelihood: 0.2 },
                { name: "Lido", avgYield: 4.5, riskScore: 3, slashingLikelihood: 0.15 },
                { name: "Stakewise", avgYield: 5.5, riskScore: 5, slashingLikelihood: 0.3 },
                { name: "Ankr", avgYield: 4.9, riskScore: 4, slashingLikelihood: 0.25 },
                { name: "Staked.us", avgYield: 5.1, riskScore: 4, slashingLikelihood: 0.2 }
            ]
        };
    },
    methods: {
        // Start of autoStake method
        autoStake(project) {
            console.log(`Auto-staking for ${project.name}`);
            // Implement auto-staking logic here
        }
        // End of autoStake method
    }
});