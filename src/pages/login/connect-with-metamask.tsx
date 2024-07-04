import { Image, Button } from "@/components";
import { images } from "@/lib/image";
import { useSDK } from "@metamask/sdk-react";

export const ConnectWithMetamask = () => {
  const { connecting, sdk } = useSDK();
  const connect = async () => {
    console.log(sdk)
    if (sdk) {
      try {
        await sdk.connect();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <Button
      variant={"ghost"}
      className="w-full self-center"
      onClick={connect}
      isLoading={connecting}
    >
      <Image src={images.metamaskLogo} alt="Metamask logo" />
      Continue with Metamask
    </Button>
  );
};
