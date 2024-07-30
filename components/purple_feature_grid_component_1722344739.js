Vue.component("purple_feature_grid_component_1722344739", {
    template: `
    <div class="bg-gradient-to-br from-deep-blue-900 to-purple-900 p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-6">Node Operator Onboarding</h2>
        <div class="space-y-6">
            <div>
                <button @click="connectWallet" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                    Connect Wallet
                </button>
                <p v-if="walletConnected" class="text-green-400 mt-2">Wallet connected!</p>
            </div>
            <div>
                <input v-model="stakeAmount" type="number" placeholder="Amount of $SXT to stake" class="w-full p-2 rounded">
                <button @click="stakeSXT" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-2">
                    Stake $SXT
                </button>
                <p v-if="stakeCompleted" class="text-green-400 mt-2">Staking completed!</p>
            </div>
            <div>
                <input v-model="publicKey" type="text" placeholder="Your node's public key" class="w-full p-2 rounded">
                <button @click="submitPublicKey" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-2">
                    Submit Public Key
                </button>
                <p v-if="publicKeySubmitted" class="text-green-400 mt-2">Public key submitted!</p>
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