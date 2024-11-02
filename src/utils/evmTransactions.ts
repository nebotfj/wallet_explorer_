import { Transaction } from '../types';

export enum EVMTransactionType {
  // Basic Transfer Types
  NATIVE_TRANSFER = 'NATIVE_TRANSFER',
  TOKEN_TRANSFER = 'TOKEN_TRANSFER',
  NFT_TRANSFER = 'NFT_TRANSFER',
  BATCH_TRANSFER = 'BATCH_TRANSFER',

  // DeFi Operations
  SWAP = 'SWAP',
  LIQUIDITY_PROVISION = 'LIQUIDITY_PROVISION',
  LIQUIDITY_REMOVAL = 'LIQUIDITY_REMOVAL',
  STAKING = 'STAKING',
  UNSTAKING = 'UNSTAKING',
  LENDING = 'LENDING',
  BORROWING = 'BORROWING',
  REPAYMENT = 'REPAYMENT',
  YIELD_FARMING = 'YIELD_FARMING',
  HARVEST = 'HARVEST',

  // Smart Contract Interactions
  CONTRACT_DEPLOYMENT = 'CONTRACT_DEPLOYMENT',
  CONTRACT_CALL = 'CONTRACT_CALL',
  PROXY_UPGRADE = 'PROXY_UPGRADE',
  DELEGATE_CALL = 'DELEGATE_CALL',
  STATIC_CALL = 'STATIC_CALL',

  // Governance
  PROPOSAL_CREATION = 'PROPOSAL_CREATION',
  VOTE_CAST = 'VOTE_CAST',
  DELEGATE = 'DELEGATE',

  // NFT Operations
  NFT_MINT = 'NFT_MINT',
  NFT_BURN = 'NFT_BURN',
  NFT_AUCTION_CREATE = 'NFT_AUCTION_CREATE',
  NFT_BID = 'NFT_BID',
  NFT_AUCTION_SETTLE = 'NFT_AUCTION_SETTLE',

  // Token Operations
  TOKEN_MINT = 'TOKEN_MINT',
  TOKEN_BURN = 'TOKEN_BURN',
  TOKEN_APPROVE = 'TOKEN_APPROVE',
  TOKEN_PERMIT = 'TOKEN_PERMIT',

  // Bridge Operations
  BRIDGE_DEPOSIT = 'BRIDGE_DEPOSIT',
  BRIDGE_WITHDRAWAL = 'BRIDGE_WITHDRAWAL',
  BRIDGE_CLAIM = 'BRIDGE_CLAIM',

  // Layer 2 Operations
  L2_DEPOSIT = 'L2_DEPOSIT',
  L2_WITHDRAWAL = 'L2_WITHDRAWAL',
  L2_BATCH_SUBMISSION = 'L2_BATCH_SUBMISSION',

  // Multisig Operations
  MULTISIG_SUBMISSION = 'MULTISIG_SUBMISSION',
  MULTISIG_CONFIRMATION = 'MULTISIG_CONFIRMATION',
  MULTISIG_EXECUTION = 'MULTISIG_EXECUTION',

  // Other Common Operations
  WRAP = 'WRAP',
  UNWRAP = 'UNWRAP',
  FLASH_LOAN = 'FLASH_LOAN',
  REBASING = 'REBASING',
  CLAIM_REWARDS = 'CLAIM_REWARDS',
  
  // Fallback
  UNKNOWN = 'UNKNOWN'
}

export interface EVMTransactionMetadata {
  type: EVMTransactionType;
  description: string;
  commonMethods: string[];
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  gasUsageLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

export const TransactionMetadata: Record<EVMTransactionType, EVMTransactionMetadata> = {
  [EVMTransactionType.NATIVE_TRANSFER]: {
    type: EVMTransactionType.NATIVE_TRANSFER,
    description: 'Direct transfer of native blockchain currency (ETH, MATIC, etc.)',
    commonMethods: ['transfer', 'send'],
    riskLevel: 'LOW',
    gasUsageLevel: 'LOW'
  },
  [EVMTransactionType.TOKEN_TRANSFER]: {
    type: EVMTransactionType.TOKEN_TRANSFER,
    description: 'Transfer of ERC20 tokens',
    commonMethods: ['transfer', 'transferFrom'],
    riskLevel: 'LOW',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.NFT_TRANSFER]: {
    type: EVMTransactionType.NFT_TRANSFER,
    description: 'Transfer of ERC721 or ERC1155 tokens',
    commonMethods: ['transferFrom', 'safeTransferFrom'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.BATCH_TRANSFER]: {
    type: EVMTransactionType.BATCH_TRANSFER,
    description: 'Multiple token transfers in a single transaction',
    commonMethods: ['batchTransfer', 'multiTransfer', 'safeBatchTransferFrom'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.SWAP]: {
    type: EVMTransactionType.SWAP,
    description: 'Exchange of one token for another through DEX',
    commonMethods: ['swap', 'swapExactTokensForTokens', 'swapTokensForExactTokens'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.LIQUIDITY_PROVISION]: {
    type: EVMTransactionType.LIQUIDITY_PROVISION,
    description: 'Adding liquidity to DEX pools',
    commonMethods: ['addLiquidity', 'mint', 'join'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.LIQUIDITY_REMOVAL]: {
    type: EVMTransactionType.LIQUIDITY_REMOVAL,
    description: 'Removing liquidity from DEX pools',
    commonMethods: ['removeLiquidity', 'burn', 'exit'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.STAKING]: {
    type: EVMTransactionType.STAKING,
    description: 'Locking tokens for rewards',
    commonMethods: ['stake', 'deposit', 'lock'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.UNSTAKING]: {
    type: EVMTransactionType.UNSTAKING,
    description: 'Withdrawing staked tokens',
    commonMethods: ['unstake', 'withdraw', 'unlock'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.LENDING]: {
    type: EVMTransactionType.LENDING,
    description: 'Supplying assets to lending protocols',
    commonMethods: ['supply', 'mint', 'deposit'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.BORROWING]: {
    type: EVMTransactionType.BORROWING,
    description: 'Borrowing assets from lending protocols',
    commonMethods: ['borrow', 'draw'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.REPAYMENT]: {
    type: EVMTransactionType.REPAYMENT,
    description: 'Repaying borrowed assets',
    commonMethods: ['repay', 'repayBorrow'],
    riskLevel: 'LOW',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.YIELD_FARMING]: {
    type: EVMTransactionType.YIELD_FARMING,
    description: 'Depositing tokens in yield farming protocols',
    commonMethods: ['farm', 'deposit', 'stake'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.HARVEST]: {
    type: EVMTransactionType.HARVEST,
    description: 'Collecting farming rewards',
    commonMethods: ['harvest', 'getReward', 'claim'],
    riskLevel: 'LOW',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.CONTRACT_DEPLOYMENT]: {
    type: EVMTransactionType.CONTRACT_DEPLOYMENT,
    description: 'Deploying new smart contracts',
    commonMethods: ['constructor'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.CONTRACT_CALL]: {
    type: EVMTransactionType.CONTRACT_CALL,
    description: 'Standard interaction with smart contracts',
    commonMethods: ['*'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.PROXY_UPGRADE]: {
    type: EVMTransactionType.PROXY_UPGRADE,
    description: 'Upgrading proxy contract implementation',
    commonMethods: ['upgrade', 'upgradeToAndCall'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.DELEGATE_CALL]: {
    type: EVMTransactionType.DELEGATE_CALL,
    description: 'Contract calls using delegatecall',
    commonMethods: ['delegatecall'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.STATIC_CALL]: {
    type: EVMTransactionType.STATIC_CALL,
    description: 'Read-only contract calls',
    commonMethods: ['staticcall'],
    riskLevel: 'LOW',
    gasUsageLevel: 'LOW'
  },
  [EVMTransactionType.PROPOSAL_CREATION]: {
    type: EVMTransactionType.PROPOSAL_CREATION,
    description: 'Creating governance proposals',
    commonMethods: ['propose', 'createProposal'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.VOTE_CAST]: {
    type: EVMTransactionType.VOTE_CAST,
    description: 'Voting on governance proposals',
    commonMethods: ['vote', 'castVote'],
    riskLevel: 'LOW',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.DELEGATE]: {
    type: EVMTransactionType.DELEGATE,
    description: 'Delegating voting power',
    commonMethods: ['delegate'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.NFT_MINT]: {
    type: EVMTransactionType.NFT_MINT,
    description: 'Creating new NFTs',
    commonMethods: ['mint', 'safeMint'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.NFT_BURN]: {
    type: EVMTransactionType.NFT_BURN,
    description: 'Destroying NFTs',
    commonMethods: ['burn'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.NFT_AUCTION_CREATE]: {
    type: EVMTransactionType.NFT_AUCTION_CREATE,
    description: 'Creating NFT auctions',
    commonMethods: ['createAuction', 'list'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.NFT_BID]: {
    type: EVMTransactionType.NFT_BID,
    description: 'Bidding on NFT auctions',
    commonMethods: ['bid', 'placeBid'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.NFT_AUCTION_SETTLE]: {
    type: EVMTransactionType.NFT_AUCTION_SETTLE,
    description: 'Settling NFT auctions',
    commonMethods: ['settleAuction', 'endAuction'],
    riskLevel: 'LOW',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.TOKEN_MINT]: {
    type: EVMTransactionType.TOKEN_MINT,
    description: 'Creating new tokens',
    commonMethods: ['mint'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.TOKEN_BURN]: {
    type: EVMTransactionType.TOKEN_BURN,
    description: 'Destroying tokens',
    commonMethods: ['burn'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.TOKEN_APPROVE]: {
    type: EVMTransactionType.TOKEN_APPROVE,
    description: 'Approving token spending',
    commonMethods: ['approve'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.TOKEN_PERMIT]: {
    type: EVMTransactionType.TOKEN_PERMIT,
    description: 'Gasless token approvals',
    commonMethods: ['permit'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.BRIDGE_DEPOSIT]: {
    type: EVMTransactionType.BRIDGE_DEPOSIT,
    description: 'Depositing assets to bridge',
    commonMethods: ['deposit', 'bridge', 'send'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.BRIDGE_WITHDRAWAL]: {
    type: EVMTransactionType.BRIDGE_WITHDRAWAL,
    description: 'Withdrawing assets from bridge',
    commonMethods: ['withdraw', 'claim'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.BRIDGE_CLAIM]: {
    type: EVMTransactionType.BRIDGE_CLAIM,
    description: 'Claiming bridged assets',
    commonMethods: ['claim', 'finalize'],
    riskLevel: 'LOW',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.L2_DEPOSIT]: {
    type: EVMTransactionType.L2_DEPOSIT,
    description: 'Depositing to Layer 2',
    commonMethods: ['deposit', 'depositETH'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.L2_WITHDRAWAL]: {
    type: EVMTransactionType.L2_WITHDRAWAL,
    description: 'Withdrawing from Layer 2',
    commonMethods: ['withdraw', 'withdrawETH'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.L2_BATCH_SUBMISSION]: {
    type: EVMTransactionType.L2_BATCH_SUBMISSION,
    description: 'Submitting L2 transaction batch',
    commonMethods: ['submitBatch', 'publishBatch'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.MULTISIG_SUBMISSION]: {
    type: EVMTransactionType.MULTISIG_SUBMISSION,
    description: 'Submitting multisig transaction',
    commonMethods: ['submitTransaction'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.MULTISIG_CONFIRMATION]: {
    type: EVMTransactionType.MULTISIG_CONFIRMATION,
    description: 'Confirming multisig transaction',
    commonMethods: ['confirmTransaction'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.MULTISIG_EXECUTION]: {
    type: EVMTransactionType.MULTISIG_EXECUTION,
    description: 'Executing confirmed multisig transaction',
    commonMethods: ['executeTransaction'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.WRAP]: {
    type: EVMTransactionType.WRAP,
    description: 'Wrapping native currency (ETH → WETH)',
    commonMethods: ['deposit', 'wrap'],
    riskLevel: 'LOW',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.UNWRAP]: {
    type: EVMTransactionType.UNWRAP,
    description: 'Unwrapping wrapped native currency (WETH → ETH)',
    commonMethods: ['withdraw', 'unwrap'],
    riskLevel: 'LOW',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.FLASH_LOAN]: {
    type: EVMTransactionType.FLASH_LOAN,
    description: 'Flash loan transactions',
    commonMethods: ['flashLoan', 'executeOperation'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.REBASING]: {
    type: EVMTransactionType.REBASING,
    description: 'Token rebase operations',
    commonMethods: ['rebase', 'sync'],
    riskLevel: 'MEDIUM',
    gasUsageLevel: 'HIGH'
  },
  [EVMTransactionType.CLAIM_REWARDS]: {
    type: EVMTransactionType.CLAIM_REWARDS,
    description: 'Claiming protocol rewards',
    commonMethods: ['claim', 'getReward', 'harvest'],
    riskLevel: 'LOW',
    gasUsageLevel: 'MEDIUM'
  },
  [EVMTransactionType.UNKNOWN]: {
    type: EVMTransactionType.UNKNOWN,
    description: 'Unknown transaction type',
    commonMethods: ['unknown'],
    riskLevel: 'HIGH',
    gasUsageLevel: 'MEDIUM'
  }
};

export function analyzeTransaction(tx: Transaction): EVMTransactionMetadata {
  // Check if it's a contract deployment
  if (tx.to === 'Contract Creation') {
    return TransactionMetadata[EVMTransactionType.CONTRACT_DEPLOYMENT];
  }

  // Check if it's a native transfer
  if (tx.method === '' && parseFloat(tx.value) > 0) {
    return TransactionMetadata[EVMTransactionType.NATIVE_TRANSFER];
  }

  // Check for common method names
  const methodName = tx.method?.toLowerCase() || '';
  
  for (const [type, metadata] of Object.entries(TransactionMetadata)) {
    if (metadata.commonMethods.some(method => 
      method === '*' || methodName.includes(method.toLowerCase())
    )) {
      return metadata;
    }
  }

  return TransactionMetadata[EVMTransactionType.UNKNOWN];
}

export function getTransactionRiskLevel(tx: Transaction): string {
  const analysis = analyzeTransaction(tx);
  return analysis.riskLevel;
}

export function getTransactionGasUsage(tx: Transaction): string {
  const analysis = analyzeTransaction(tx);
  return analysis.gasUsageLevel;
}

export function categorizeTransactions(transactions: Transaction[]): Record<EVMTransactionType, Transaction[]> {
  const categorized: Record<EVMTransactionType, Transaction[]> = Object.values(EVMTransactionType)
    .reduce((acc, type) => ({ ...acc, [type]: [] }), {} as Record<EVMTransactionType, Transaction[]>);

  transactions.forEach(tx => {
    const analysis = analyzeTransaction(tx);
    categorized[analysis.type].push(tx);
  });

  return categorized;
}

export function getTransactionStats(transactions: Transaction[]): {
  totalTransactions: number;
  riskLevels: Record<string, number>;
  gasUsageLevels: Record<string, number>;
  typeDistribution: Record<string, number>;
} {
  const stats = {
    totalTransactions: transactions.length,
    riskLevels: { LOW: 0, MEDIUM: 0, HIGH: 0 },
    gasUsageLevels: { LOW: 0, MEDIUM: 0, HIGH: 0 },
    typeDistribution: {} as Record<string, number>
  };

  transactions.forEach(tx => {
    const analysis = analyzeTransaction(tx);
    stats.riskLevels[analysis.riskLevel]++;
    stats.gasUsageLevels[analysis.gasUsageLevel]++;
    stats.typeDistribution[analysis.type] = (stats.typeDistribution[analysis.type] || 0) + 1;
  });

  return stats;
}</content>