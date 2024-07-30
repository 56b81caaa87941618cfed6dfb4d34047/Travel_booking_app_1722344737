Vue.component("crypto_staking_component", {
    template: `
    <section id="crypto-staking-container" class="bg-blue-900 text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 class="text-4xl font-bold mb-8 text-center text-purple-400 glow">Popular Crypto Staking Projects</h2>
            <div class="grid gap-6">
                <div v-for="project in projects" :key="project.name" class="bg-blue-800 rounded-lg shadow-lg p-6 border border-purple-500">
                    <h3 class="text-2xl font-semibold mb-4 text-purple-300">{{ project.name }}</h3>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p class="font-bold text-purple-200">Avg. Yield:</p>
                            <p class="text-white">{{ project.avgYield }}%</p>
                        </div>
                        <div>
                            <p class="font-bold text-purple-200">Risk Score:</p>
                            <p class="text-white">{{ project.riskScore }}/10</p>
                        </div>
                        <div>
                            <p class="font-bold text-purple-200">Slashing Likelihood:</p>
                            <p class="text-white">{{ project.slashingLikelihood }}%</p>
                        </div>
                    </div>
                    <button @click="autoStake(project)" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        Auto-Stake
                    </button>
                </div>
            </div>
            <div class="mt-12 bg-blue-800 rounded-lg shadow-lg p-6 border border-purple-500">
                <h3 class="text-2xl font-semibold mb-4 text-purple-300">Auto-Stake Explanation</h3>
                <p class="text-white">The "Auto-Stake" button will automatically choose the best yield farming option on your behalf. Our algorithm considers the average yield, risk score, and slashing likelihood to optimize your returns while minimizing potential risks.</p>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            projects: [
                { name: "Ethereum 2.0", avgYield: 5.2, riskScore: 2, slashingLikelihood: 0.1 },
                { name: "Rocket Pool", avgYield: 4.8, riskScore: 3, slashingLikelihood: 0.2 },
                { name: "Lido", avgYield: 4.5, riskScore: 4, slashingLikelihood: 0.3 },
                { name: "StakeWise", avgYield: 5.5, riskScore: 5, slashingLikelihood: 0.5 },
                { name: "Ankr", avgYield: 4.2, riskScore: 4, slashingLikelihood: 0.4 }
            ]
        };
    },
    methods: {
        autoStake(project) {
            // Auto-stake logic would go here
            alert(`Auto-staking initiated for ${project.name}`);
        }
    }
});