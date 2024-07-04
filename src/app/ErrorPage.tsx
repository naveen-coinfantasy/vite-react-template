import { Button, Title } from "@/components";
import { useNavigate } from "react-router";
export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="container grid h-screen place-items-center">
      <div className="flex flex-col items-center gap-6">
        <Title>Something Went Wrong</Title>
        <Button onClick={() => navigate("/", { replace: true })}>
          Go Back
        </Button>
      </div>
    </main>
  );
}
