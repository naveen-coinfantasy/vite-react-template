import { Button, Image, Input, Title } from "@/components";
import { getNFTImage } from "@/lib/services";
import { cn } from "@/lib/utils";
import { NFTDetailSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
type NFTDetailForm = z.infer<typeof NFTDetailSchema>;
export const NFTDetail = () => {
  const { handleSubmit, register, formState, reset } = useForm<NFTDetailForm>({
    resolver: zodResolver(NFTDetailSchema),
  });
  const { isSubmitting, errors } = formState;
  const [nftImage, SetNftImage] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const onFormSubmit = async (data: NFTDetailForm) => {
    try {
      SetNftImage("");
      setErrorResponse("");
      const image = await getNFTImage(data);
      SetNftImage(image);
    } catch (error) {
      SetNftImage("");
      if (typeof error === "string") {
        setErrorResponse(error);
      }
      if (error instanceof Error) {
        setErrorResponse(error.message);
      }
    }
  };
  const ErrorMessage = ({ message }: { message: string }) => (
    <span
      className={cn(
        "absolute top-full mt-2 text-xs font-light text-red-400 transition-opacity duration-150",
        {
          "opacity-0": message.length === 0,
        }
      )}
    >
      {message}
    </span>
  );
  return (
    <section className="overflow-y-auto">
      <Title>NFT Image</Title>
      <div className="space-y-4 py-4">
        <form
          className="flex flex-col items-center gap-8 md:flex-row"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="relative flex w-full flex-col gap-2.5 md:basis-1/3">
            <Input
              id="token-id"
              label="Token Id"
              placeholder="Token Id"
              type="text"
              {...register("tokenId")}
            />
            <ErrorMessage message={errors.tokenId?.message ?? ""} />
          </div>
          <div className="relative flex w-full flex-col gap-2.5 md:basis-1/3">
            <Input
              id="contract-address"
              label="Contract Address"
              placeholder="Contract Address"
              type="text"
              {...register("contractAddress")}
            />
            <ErrorMessage message={errors.contractAddress?.message ?? ""} />
          </div>
          <div className="flex w-full gap-4 self-center md:w-auto md:self-end">
            <Button
              className="grow px-4 py-3"
              type="submit"
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Search"}
            </Button>
            <Button
              className="grow px-4 py-3"
              type="button"
              variant={"ghost"}
              onClick={() => reset()}
            >
              Clear
            </Button>
          </div>
        </form>
        {errorResponse && (
          <p className="text-center font-bold text-red-500">{errorResponse}</p>
        )}
        {nftImage && (
          <>
            <Title>Result</Title>
            <Image
              src={nftImage}
              alt="NFT Image"
              className="size-64 duration-300 animate-in fade-in zoom-in"
            />
          </>
        )}
      </div>
    </section>
  );
};
