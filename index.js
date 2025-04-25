import { useEffect, useState } from "react";

export default function Home() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setWallet(accounts[0]);
    } else {
      alert("Install MetaMask!");
    }
  };

  const buyZZZ = () => {
    const quickswapUrl = `https://quickswap.exchange/#/swap?outputCurrency=0x50f8160aeb9ce8032DC2AB97677a7c078328Db0B&chain=polygon`;
    window.open(quickswapUrl, "_blank");
  };

  return (
    <main style={{ padding: 20, textAlign: "center", background: "#fffbe6", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 48, fontWeight: "bold" }}>ZZZ Coin</h1>
      <p style={{ fontSize: 20, fontStyle: "italic", marginBottom: 30 }}>La crypto per chi è sempre stanco.</p>

      <div style={{ background: "#fff", padding: 20, margin: "0 auto", maxWidth: 500, boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}>
        <p><strong>Token Address:</strong></p>
        <code>0x50f8160aeb9ce8032DC2AB97677a7c078328Db0B</code>
        <div style={{ marginTop: 20 }}>
          <button onClick={connectWallet} style={{ marginBottom: 10, padding: 10, width: "100%" }}>
            {wallet ? `Wallet: ${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Connect Wallet"}
          </button>
          <button onClick={buyZZZ} style={{ backgroundColor: "#22c55e", color: "white", padding: 10, width: "100%" }}>
            Buy ZZZ on QuickSwap
          </button>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <p>1,000,000,000,000 ZZZ minted. Super rare (non davvero). Prezzo bassissimo. Meme fortissimo.</p>
        <p>Holda, sogna, dormi. Forse un giorno ti svegli ricco.</p>
      </div>
    </main>
  );
}