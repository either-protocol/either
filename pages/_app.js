import "@/styles/globals.css";
import Head from 'next/head';
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import Layout from '@/components/Layout';

const wallets = [new PetraWallet()];

export default function App({ Component, pageProps }) {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Head>
        <title>Predict Either</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AptosWalletAdapterProvider>
  );
}
