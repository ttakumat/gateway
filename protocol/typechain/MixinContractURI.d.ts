/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface MixinContractURIInterface extends ethers.utils.Interface {
  functions: {
    'contractURI()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setContractURI(string)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'contractURI', values?: void): string;
  encodeFunctionData(functionFragment: 'owner', values?: void): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: void,
  ): string;
  encodeFunctionData(
    functionFragment: 'setContractURI',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;

  decodeFunctionResult(
    functionFragment: 'contractURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setContractURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export class MixinContractURI extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MixinContractURIInterface;

  functions: {
    contractURI(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    setContractURI(
      newContractURI: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;
  };

  contractURI(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  setContractURI(
    newContractURI: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  staticCall: {
    contractURI(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: Overrides): Promise<void>;

    setContractURI(
      newContractURI: string,
      overrides?: Overrides,
    ): Promise<void>;

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): EventFilter;
  };

  estimateGas: {
    contractURI(): Promise<BigNumber>;
    owner(): Promise<BigNumber>;
    renounceOwnership(): Promise<BigNumber>;
    setContractURI(newContractURI: string): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<BigNumber>;
  };

  populateTransaction: {
    contractURI(): Promise<PopulatedTransaction>;
    owner(): Promise<PopulatedTransaction>;
    renounceOwnership(): Promise<PopulatedTransaction>;
    setContractURI(newContractURI: string): Promise<PopulatedTransaction>;
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>;
  };
}
