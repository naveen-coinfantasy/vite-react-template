import { NFTResponseSchema } from "@/schemas";
import { AxiosError } from "axios";
import { ZodError } from "zod";
import { axiosInstance } from "./axios";
export const getNFTImage = async ({
  tokenId,
  contractAddress,
}: {
  tokenId: string;
  contractAddress: string;
}) => {
  try {
    const response = await axiosInstance.get("/nft/image", {
      params: {
        tokenId,
        contractAddress,
      },
    });
    if (response.data?.error) {
      throw new Error(response.data.message);
    }
    const parsedResponse = NFTResponseSchema.parse(response.data);
    return parsedResponse.data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    if (error instanceof ZodError) throw new Error(error.issues[0].message);
    throw error;
  }
};
