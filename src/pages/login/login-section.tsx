import { Description, Image, Title } from "@/components";
import { images } from "@/lib/image";
import { Link } from "react-router-dom";
import { ConnectWithMetamask } from "./connect-with-metamask";
export const LoginSection = () => {
  return (
    <section className="bg-secondary-blue flex flex-col justify-center gap-9 px-6 py-8 md:px-14">
      <Image src={images.logo} alt="xield logo" className="self-center" />
      <div className="mx-auto w-full md:max-w-[360px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Title>Login</Title>
            <Description>Welcome to XIELD - Developer Portal</Description>
          </div>
          <ConnectWithMetamask />
          <Description className="text-light-gray mt-6 text-center md:text-xs">
            By clicking login you are accepting XIELD protocol{" "}
            <Link to={"#"} className="text-white underline">
              privacy policy
            </Link>{" "}
            &{" "}
            <Link to={"#"} className="text-white underline">
              Terms and condition
            </Link>
          </Description>
        </div>
      </div>
    </section>
  );
};
