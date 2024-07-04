import { ImagePreview } from "./image-preview";
import { LoginSection } from "./login-section";
export const Login = () => {
  return (
    <main className="container grid h-screen gap-4 md:grid-cols-2 md:gap-0">
      <ImagePreview />
      <LoginSection />
    </main>
  );
};
