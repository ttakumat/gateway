/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { POBMinter } from './POBMinter';

export class POBMinterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _mintableErc1155: string,
    _treasury: string,
    _tokenType: BigNumberish,
    _startingPrice: BigNumberish,
    _pricePerMint: BigNumberish,
    overrides?: Overrides,
  ): Promise<POBMinter> {
    return super.deploy(
      _mintableErc1155,
      _treasury,
      _tokenType,
      _startingPrice,
      _pricePerMint,
      overrides || {},
    ) as Promise<POBMinter>;
  }
  getDeployTransaction(
    _mintableErc1155: string,
    _treasury: string,
    _tokenType: BigNumberish,
    _startingPrice: BigNumberish,
    _pricePerMint: BigNumberish,
    overrides?: Overrides,
  ): TransactionRequest {
    return super.getDeployTransaction(
      _mintableErc1155,
      _treasury,
      _tokenType,
      _startingPrice,
      _pricePerMint,
      overrides || {},
    );
  }
  attach(address: string): POBMinter {
    return super.attach(address) as POBMinter;
  }
  connect(signer: Signer): POBMinterFactory {
    return super.connect(signer) as POBMinterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): POBMinter {
    return new Contract(address, _abi, signerOrProvider) as POBMinter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_mintableErc1155',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_treasury',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenType',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_startingPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_pricePerMint',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'txHash',
        type: 'uint256',
      },
    ],
    name: 'UpdatedRegistry',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dst',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_txHash',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintableErc1155',
    outputs: [
      {
        internalType: 'contract ERC1155Mintable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_treasury',
        type: 'address',
      },
    ],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'tokenIdToTxHash',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenType',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'treasury',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'txHashToTokenId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60c060405234801561001057600080fd5b506040516112a43803806112a4833981810160405260a081101561003357600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050600061007c6101bd60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081608081815250508060a081815250508260018190555050505050506101c5565b600033905090565b60805160a0516110b26101f26000398061040852806105765250806103e4528061055252506110b26000f3fe6080604052600436106100915760003560e01c8063715018a611610059578063715018a6146101e05780638da5cb5b146101f7578063db44e5d814610238578063f0f4426014610287578063f2fde38b146102d857610091565b80632269f9fb1461009657806330fa738c146100d757806340c10f19146101025780636184d3a51461015057806361d027b31461019f575b600080fd5b3480156100a257600080fd5b506100ab610329565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e357600080fd5b506100ec61034f565b6040518082815260200191505060405180910390f35b61014e6004803603604081101561011857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610355565b005b34801561015c57600080fd5b506101896004803603602081101561017357600080fd5b81019080803590602001909291905050506109c9565b6040518082815260200191505060405180910390f35b3480156101ab57600080fd5b506101b46109e1565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ec57600080fd5b506101f5610a07565b005b34801561020357600080fd5b5061020c610b8d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024457600080fd5b506102716004803603602081101561025b57600080fd5b8101908080359060200190929190505050610bb6565b6040518082815260200191505060405180910390f35b34801561029357600080fd5b506102d6600480360360208110156102aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bce565b005b3480156102e457600080fd5b50610327600480360360208110156102fb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cda565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b8060006005600083815260200190815260200160002054146103df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f74784861736820616c726561647920657869737473000000000000000000000081525060200191505060405180910390fd5b6104f37f00000000000000000000000000000000000000000000000000000000000000006104e57f0000000000000000000000000000000000000000000000000000000000000000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166308d7d4696001546040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561049c57600080fd5b505afa1580156104b0573d6000803e3d6000fd5b505050506040513d60208110156104c657600080fd5b8101908080519060200190929190505050610ee590919063ffffffff16565b610f2f90919063ffffffff16565b34101561054b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061105b6022913960400191505060405180910390fd5b60006106617f00000000000000000000000000000000000000000000000000000000000000006106537f0000000000000000000000000000000000000000000000000000000000000000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166308d7d4696001546040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561060a57600080fd5b505afa15801561061e573d6000803e3d6000fd5b505050506040513d602081101561063457600080fd5b8101908080519060200190929190505050610ee590919063ffffffff16565b610f2f90919063ffffffff16565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106cb573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff166108fc6106f98334610f5e90919063ffffffff16565b9081150290604051600060405180830381858888f19350505050158015610724573d6000803e3d6000fd5b506060600167ffffffffffffffff8111801561073f57600080fd5b5060405190808252806020026020018201604052801561076e5781602001602082028036833780820191505090505b509050848160008151811061077f57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060006001600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166308d7d4696001546040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561083257600080fd5b505afa158015610846573d6000803e3d6000fd5b505050506040513d602081101561085c57600080fd5b8101908080519060200190929190505050019050600081600154179050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f9419088600154856040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019060200280838360005b838110156109135780820151818401526020810190506108f8565b505050509050019350505050600060405180830381600087803b15801561093957600080fd5b505af115801561094d573d6000803e3d6000fd5b505050508560046000838152602001908152602001600020819055508060056000888152602001908152602001600020819055507f6d02ad638ef1efb9d08c39bbfc9fc87a23a53baa61ddba88623bf654504128ca8187604051808381526020018281526020019250505060405180910390a150505050505050565b60056020528060005260406000206000915090505481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a0f610f88565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610acf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60046020528060005260406000206000915090505481565b610bd6610f88565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c96576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610ce2610f88565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610da2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806110356026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080831415610ef85760009050610f29565b6000828402905082848281610f0957fe5b0414610f2457610f23610f1e60018686610f90565b61102c565b5b809150505b92915050565b600080828401905083811015610f5457610f53610f4e60008686610f90565b61102c565b5b8091505092915050565b600082821115610f7d57610f7c610f7760028585610f90565b61102c565b5b818303905092915050565b600033905090565b606063e946c1bb60e01b84848460405160240180846003811115610fb057fe5b81526020018381526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090509392505050565b805160208201fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373696e73756666696369656e742066756e647320746f2070617920666f72206d696e74a26469706673582212208ce8136c0f9debb905671410f2e7b6eb3c5c09517943332175838cef3747817464736f6c63430007030033';
