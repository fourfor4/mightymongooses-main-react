import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import MongooseABI from "../abi/MightyMongoose.json";
import { mongooseContractAddress } from "../contracts";

const mongooseContractInterface = new ethers.utils.Interface(MongooseABI);
const mongooseContract = new Contract(
  mongooseContractAddress,
  mongooseContractInterface
);

export const useDurationToGetation = () => {
  const [DurationToGestation] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "DurationToGestation",
      args: [],
    }) ?? [];

  return DurationToGestation;
};

export const useTokenPrice = () => {
  const [tokenPrice] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "tokenPrice",
      args: [],
    }) ?? [];

  return tokenPrice;
};

export const useChildPrice = () => {
  const [childPrice] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "childPrice",
      args: [],
    }) ?? [];

  return childPrice;
};

export const useTokenURI = (tokenId) => {
  const [tokenURI] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "tokenURI",
      args: [tokenId],
    }) ?? [];

  return tokenURI;
};

export const useBaseURI = () => {
  const [baseURI] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "baseURI",
      args: [],
    }) ?? [];

  return baseURI;
};

export const useUserAllTokens = (address) => {
  const [userAllTokens] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "userAllTokens",
      args: [address],
    }) ?? [];

  return userAllTokens;
};

export const useBreedStore = (address) => {
  const [breedStore] =
    useContractCall({
      abi: mongooseContractInterface,
      address: mongooseContractAddress,
      method: "breedStore",
      args: [address],
    }) ?? [];

  return breedStore;
};

export const useGestationApprove = () => {
  const { state, send, event } = useContractFunction(
    mongooseContract,
    "gestationApprove",
    {}
  );

  return { state, send, event };
};

export const useGiveBirth = () => {
  const { state, send, event } = useContractFunction(
    mongooseContract,
    "giveBirth",
    {}
  );

  return { state, send, event };
};

export const useSafeMint = () => {
  const { state, send, event } = useContractFunction(
    mongooseContract,
    "safeMint",
    {}
  );

  return { state, send, event };
};

export const useSafeMintWithSignature = () => {
  const { state, send, event } = useContractFunction(
    mongooseContract,
    "safeMintWithSignature",
    {}
  );

  return { state, send, event };
};

export const useTransferOwnership = () => {
  const { state, send } = useContractFunction(
    mongooseContract,
    "transferOwnership",
    {}
  );

  return { state, send };
};
