Vue.component("purple_feature_grid_component_1722344739", {
    template: `
    <div class="bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-3xl shadow-2xl backdrop-blur-md backdrop-filter">
        <h2 class="text-4xl font-bold text-white mb-8">Node Operator Onboarding</h2>
        <p class="text-purple-200 mb-6">Connect your EVM ECDSA wallet to begin the onboarding process. Later, you'll need to provide an ED25519 public key for your node.</p>
        <div class="space-y-8">
            <div class="bg-purple-800 bg-opacity-30 p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-sm">
                <h3 class="text-2xl font-semibold text-white mb-4">Wallet Connection</h3>
                <p class="text-purple-200 mb-4">Connect your EVM ECDSA wallet to begin the onboarding process. This step is crucial for verifying your identity and securing your node operations.</p>
                <button @click="connectWallet" class="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 transform hover:scale-105">
                    <i class='bx bx-wallet-alt mr-2'></i>Connect Wallet
                </button>
                <p v-if="walletConnected" class="text-green-400 mt-3 font-semibold"><i class='bx bx-check-circle mr-2'></i>Wallet connected successfully!</p>
            </div>
            <div class="bg-purple-800 bg-opacity-30 p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-sm">
                <h3 class="text-2xl font-semibold text-white mb-4">Stake Amount</h3>
                <p class="text-purple-200 mb-4">Staking $SXT tokens is required to become a node operator. The amount you stake determines your node's weight in the network.</p>
                <label for="stakeAmount" class="block text-purple-200 text-lg font-semibold mb-2">Enter Stake Amount:</label>
                <input id="stakeAmount" v-model="stakeAmount" type="number" placeholder="Amount of $SXT to stake" class="w-full p-3 rounded-xl bg-purple-700 bg-opacity-50 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300">
                <button @click="stakeSXT" class="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md mt-4 transition duration-300 transform hover:scale-105">
                    <i class='bx bx-coin-stack mr-2'></i>Stake $SXT
                </button>
                <p v-if="stakeCompleted" class="text-green-400 mt-3 font-semibold"><i class='bx bx-check-circle mr-2'></i>Staking completed successfully!</p>
            </div>
            <div class="bg-purple-800 bg-opacity-30 p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-sm">
                <h3 class="text-2xl font-semibold text-white mb-4">Node Public Key</h3>
                <p class="text-purple-200 mb-4">Your node's ED25519 public key is essential for identifying your node on the network. It's used for secure communication and transaction validation.</p>
                <label for="publicKey" class="block text-purple-200 text-lg font-semibold mb-2">Enter Node Public Key:</label>
                <input id="publicKey" v-model="publicKey" type="text" placeholder="Your node's public key" class="w-full p-3 rounded-xl bg-purple-700 bg-opacity-50 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300">
                <button @click="submitPublicKey" class="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md mt-4 transition duration-300 transform hover:scale-105">
                    <i class='bx bx-key mr-2'></i>Submit Public Key
                </button>
                <p v-if="publicKeySubmitted" class="text-green-400 mt-3 font-semibold"><i class='bx bx-check-circle mr-2'></i>Public key submitted successfully!</p>
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