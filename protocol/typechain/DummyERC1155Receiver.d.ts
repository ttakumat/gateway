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

interface DummyERC1155ReceiverInterface extends ethers.utils.Interface {
  functions: {
    'ERC1155_BATCH_RECEIVED()': FunctionFragment;
    'ERC1155_RECEIVED()': FunctionFragment;
    'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)': FunctionFragment;
    'onERC1155Received(address,address,uint256,uint256,bytes)': FunctionFragment;
    'setRejectTransferFlag(bool)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'ERC1155_BATCH_RECEIVED',
    values?: void,
  ): string;
  encodeFunctionData(
    functionFragment: 'ERC1155_RECEIVED',
    values?: void,
  ): string;
  encodeFunctionData(
    functionFragment: 'onERC1155BatchReceived',
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'onERC1155Received',
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setRejectTransferFlag',
    values: [boolean],
  ): string;

  decodeFunctionResult(
    functionFragment: 'ERC1155_BATCH_RECEIVED',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ERC1155_RECEIVED',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'onERC1155BatchReceived',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'onERC1155Received',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setRejectTransferFlag',
    data: BytesLike,
  ): Result;

  events: {
    'BatchTokenReceived(address,address,uint256[],uint256[],bytes)': EventFragment;
    'TokenReceived(address,address,uint256,uint256,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BatchTokenReceived'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenReceived'): EventFragment;
}

export class DummyERC1155Receiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DummyERC1155ReceiverInterface;

  functions: {
    ERC1155_BATCH_RECEIVED(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    ERC1155_RECEIVED(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setRejectTransferFlag(
      _shouldRejectTransfer: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;
  };

  ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<string>;

  ERC1155_RECEIVED(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  setRejectTransferFlag(
    _shouldRejectTransfer: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  staticCall: {
    ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<string>;

    ERC1155_RECEIVED(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<string>;

    setRejectTransferFlag(
      _shouldRejectTransfer: boolean,
      overrides?: Overrides,
    ): Promise<void>;
  };

  filters: {
    BatchTokenReceived(
      operator: null,
      from: null,
      tokenIds: null,
      tokenValues: null,
      data: null,
    ): EventFilter;

    TokenReceived(
      operator: null,
      from: null,
      tokenId: null,
      tokenValue: null,
      data: null,
    ): EventFilter;
  };

  estimateGas: {
    ERC1155_BATCH_RECEIVED(): Promise<BigNumber>;
    ERC1155_RECEIVED(): Promise<BigNumber>;
    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
    ): Promise<BigNumber>;
    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
    ): Promise<BigNumber>;
    setRejectTransferFlag(_shouldRejectTransfer: boolean): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC1155_BATCH_RECEIVED(): Promise<PopulatedTransaction>;
    ERC1155_RECEIVED(): Promise<PopulatedTransaction>;
    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
    ): Promise<PopulatedTransaction>;
    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
    ): Promise<PopulatedTransaction>;
    setRejectTransferFlag(
      _shouldRejectTransfer: boolean,
    ): Promise<PopulatedTransaction>;
  };
}
