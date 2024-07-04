import { z } from "zod";

export const NFTDetailSchema = z.object({
  tokenId: z.string().min(1, "Token Id is required"),
  contractAddress: z.string().min(1, "Contract Address is required"),
});
export const NFTResponseSchema = z.object({
  error: z.boolean(),
  message: z.string(),
  data: z.string().min(1),
});
