import { MetaMaskProvider as MetaMaskContextProvider } from "@metamask/sdk-react";
import { FC } from "react";
import type { MetaMaskSDKOptions } from "@metamask/sdk";
interface MetaMaskProviderProps {
  children: React.ReactNode;
}

const MetaMaskProvider: FC<MetaMaskProviderProps> = ({ children }) => {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions: MetaMaskSDKOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Xeild",
      url: host,
    },
    preferDesktop: true,
  };

  return (
    <MetaMaskContextProvider debug={false} sdkOptions={sdkOptions}>
      {children}
    </MetaMaskContextProvider>
  );
};

export default MetaMaskProvider;
