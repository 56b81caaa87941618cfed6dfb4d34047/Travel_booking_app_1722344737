Vue.component("crypto_staking_component", {
    template: `
    <section id="crypto-staking-container" class="bg-red-900 text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 class="text-4xl font-bold mb-8 text-center">Popular Crypto Staking Projects</h2>
            <div class="grid gap-6">
                <div v-for="project in projects" :key="project.name" class="bg-red-800 rounded-lg shadow-lg p-6">
                    <h3 class="text-2xl font-semibold mb-4">{{ project.name }}</h3>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p class="font-bold">Avg. Yield:</p>
                            <p>{{ project.avgYield }}%</p>
                        </div>
                        <div>
                            <p class="font-bold">Risk Score:</p>
                            <p>{{ project.riskScore }}/10</p>
                        </div>
                        <div>
                            <p class="font-bold">Slashing Likelihood:</p>
                            <p>{{ project.slashingLikelihood }}%</p>
                        </div>
                    </div>
                    <button @click="autoStake(project)" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Auto-Stake
                    </button>
                </div>
            </div>
            <div class="mt-12 bg-red-800 rounded-lg shadow-lg p-6">
                <h3 class="text-2xl font-semibold mb-4">Auto-Stake Explanation</h3>
                <p>The "Auto-Stake" button will automatically choose the best yield farming option on your behalf. Our algorithm considers the average yield, risk score, and slashing likelihood to optimize your returns while minimizing potential risks.</p>
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