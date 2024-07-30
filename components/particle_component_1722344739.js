/* Summary: This is a canvas element for displaying a purple glow and a particle animation in the background of the hero component.
*/

Vue.component("particle_component_1722344739", {
    template: `
    <div class="bg-red-900 text-white p-8">
        <h1 class="text-4xl font-bold mb-6">Popular Crypto Staking Projects</h1>
        <div class="grid grid-cols-1 gap-6">
            <div v-for="project in projects" :key="project.name" class="bg-red-800 rounded-lg shadow-lg p-6">
                <h2 class="text-2xl font-semibold mb-4">{{ project.name }}</h2>
                <p class="mb-2">Average Yield: {{ project.avgYield }}%</p>
                <p class="mb-2">Risk Score: {{ project.riskScore }}/10</p>
                <p class="mb-4">Likelihood of Slashing: {{ project.slashingLikelihood }}%</p>
                <button @click="autoStake(project)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Auto-Stake
                </button>
            </div>
        </div>
        <div v-if="showExplanation" class="mt-8 bg-red-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Auto-Stake Explanation</h3>
            <p>Our Auto-Stake feature automatically chooses the best yield farming strategy on your behalf. It analyzes the current market conditions, risk factors, and potential returns to maximize your earnings while minimizing risk.</p>
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
                { name: "Ankr", avgYield: 4.2, riskScore: 4, slashingLikelihood: 0.25 }
            ],
            showExplanation: false
        };
    },
    methods: {
        // Start of autoStake method
        autoStake(project) {
            alert(`Auto-staking initiated for ${project.name}`);
            this.showExplanation = true;
        }
        // End of autoStake method
    }
});
                    