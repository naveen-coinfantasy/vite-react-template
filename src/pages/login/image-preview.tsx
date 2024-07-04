import { Image } from "@/components";
import { images } from "@/lib/image";

export const ImagePreview = () => {
  return (
    <section className="grid place-items-center px-6">
      <Image src={images.loginPreview} alt="Login Preview" />
    </section>
  );
};
