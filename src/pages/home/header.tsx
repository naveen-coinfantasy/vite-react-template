import { Button, Image } from "@/components";
import { images } from "@/lib/image";
import { useSDK } from "@metamask/sdk-react";

export const Header = () => {
  const { sdk } = useSDK();
  const logout = () => {
    if (sdk) {
      sdk.terminate();
    }
  };
  return (
    <header className="flex items-center justify-between py-2.5">
      <Image src={images.logo} alt="xield logo" className="self-center" />
      <Button onClick={logout} variant={"ghost"}>
        Logout
      </Button>
    </header>
  );
};
