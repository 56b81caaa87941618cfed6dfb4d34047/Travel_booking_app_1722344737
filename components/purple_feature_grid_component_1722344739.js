Vue.component("purple_feature_grid_component_1722344739", {
    template: `
    <div class="bg-gradient-to-br from-deep-blue-900 to-purple-900 p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-white mb-8">Node Operator Onboarding</h2>
        <div class="space-y-8">
            <div>
                <p class="text-purple-200 mb-4">Connect your wallet to begin the onboarding process. This step is crucial for verifying your identity and securing your node operations.</p>
                <button @click="connectWallet" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    Connect Wallet
                </button>
                <p v-if="walletConnected" class="text-green-400 mt-3">Wallet connected successfully!</p>
            </div>
            <div>
                <label for="stakeAmount" class="block text-purple-200 text-lg font-semibold mb-2">Stake Amount</label>
                <p class="text-purple-200 mb-4">Staking $SXT tokens is required to become a node operator. The amount you stake determines your node's weight in the network.</p>
                <input id="stakeAmount" v-model="stakeAmount" type="number" placeholder="Amount of $SXT to stake" class="w-full p-3 rounded-lg bg-deep-blue-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <button @click="stakeSXT" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md mt-3 transition duration-300">
                    Stake $SXT
                </button>
                <p v-if="stakeCompleted" class="text-green-400 mt-3">Staking completed successfully!</p>
            </div>
            <div>
                <label for="publicKey" class="block text-purple-200 text-lg font-semibold mb-2">Node Public Key</label>
                <p class="text-purple-200 mb-4">Your node's public key is essential for identifying your node on the network. It's used for secure communication and transaction validation.</p>
                <input id="publicKey" v-model="publicKey" type="text" placeholder="Your node's public key" class="w-full p-3 rounded-lg bg-deep-blue-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <button @click="submitPublicKey" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md mt-3 transition duration-300">
                    Submit Public Key
                </button>
                <p v-if="publicKeySubmitted" class="text-green-400 mt-3">Public key submitted successfully!</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            walletConnected: false,
            stakeAmount: null,
            stakeCompleted: false,
            publicKey: '',
            publicKeySubmitted: false
        };
    },
    methods: {
        // Start of connectWallet method
        connectWallet() {
            // Simulating wallet connection
            setTimeout(() => {
                this.walletConnected = true;
            }, 1000);
        },
        // End of connectWallet method

        // Start of stakeSXT method
        stakeSXT() {
            if (this.stakeAmount > 0) {
                // Simulating staking process
                setTimeout(() => {
                    this.stakeCompleted = true;
                }, 1000);
            }
        },
        // End of stakeSXT method

        // Start of submitPublicKey method
        submitPublicKey() {
            if (this.publicKey) {
                // Simulating public key submission
                setTimeout(() => {
                    this.publicKeySubmitted = true;
                }, 1000);
            }
        }
        // End of submitPublicKey method
    }
});