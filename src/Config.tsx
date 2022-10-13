import { NetworkType } from "@airgap/beacon-sdk";

let networks = new Map();

networks.set('mainnet', {
  networkType: NetworkType.MAINNET,
  rpcUrl: "https://mainnet.tezos.marigold.dev/",
  viewerUrl: "https://tzkt.io"
});

networks.set('ghostnet', {
  networkType: NetworkType.GHOSTNET,
  rpcUrl: "https://rpc.ghostnet.teztnets.xyz/",
  viewerUrl: "https://ghostnet.tzkt.io"
});

let Config = {
  application: {
    name: "Tezocracy.xyz",
    githubRepository: "https://github.com/avysel/tezocracy"
  },
  network: networks.get('mainnet')
}

export default Config;
