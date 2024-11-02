import React from 'react';
import { Book, AlertTriangle, Gauge } from 'lucide-react';
import { EVMTransactionType, TransactionMetadata } from '../utils/evmTransactions';

export function TransactionDocs() {
  const categories = {
    'Basic Transfers': [
      EVMTransactionType.NATIVE_TRANSFER,
      EVMTransactionType.TOKEN_TRANSFER,
      EVMTransactionType.NFT_TRANSFER,
      EVMTransactionType.BATCH_TRANSFER,
    ],
    'DeFi Operations': [
      EVMTransactionType.SWAP,
      EVMTransactionType.LIQUIDITY_PROVISION,
      EVMTransactionType.LIQUIDITY_REMOVAL,
      EVMTransactionType.STAKING,
      EVMTransactionType.UNSTAKING,
      EVMTransactionType.LENDING,
      EVMTransactionType.BORROWING,
      EVMTransactionType.REPAYMENT,
      EVMTransactionType.YIELD_FARMING,
      EVMTransactionType.HARVEST,
    ],
    'Smart Contract Operations': [
      EVMTransactionType.CONTRACT_DEPLOYMENT,
      EVMTransactionType.CONTRACT_CALL,
      EVMTransactionType.PROXY_UPGRADE,
      EVMTransactionType.DELEGATE_CALL,
      EVMTransactionType.STATIC_CALL,
    ],
    'Governance': [
      EVMTransactionType.PROPOSAL_CREATION,
      EVMTransactionType.VOTE_CAST,
      EVMTransactionType.DELEGATE,
    ],
    'NFT Operations': [
      EVMTransactionType.NFT_MINT,
      EVMTransactionType.NFT_BURN,
      EVMTransactionType.NFT_AUCTION_CREATE,
      EVMTransactionType.NFT_BID,
      EVMTransactionType.NFT_AUCTION_SETTLE,
    ],
    'Token Operations': [
      EVMTransactionType.TOKEN_MINT,
      EVMTransactionType.TOKEN_BURN,
      EVMTransactionType.TOKEN_APPROVE,
      EVMTransactionType.TOKEN_PERMIT,
    ],
    'Bridge & Layer 2': [
      EVMTransactionType.BRIDGE_DEPOSIT,
      EVMTransactionType.BRIDGE_WITHDRAWAL,
      EVMTransactionType.BRIDGE_CLAIM,
      EVMTransactionType.L2_DEPOSIT,
      EVMTransactionType.L2_WITHDRAWAL,
      EVMTransactionType.L2_BATCH_SUBMISSION,
    ],
    'Multisig & Security': [
      EVMTransactionType.MULTISIG_SUBMISSION,
      EVMTransactionType.MULTISIG_CONFIRMATION,
      EVMTransactionType.MULTISIG_EXECUTION,
    ],
    'Other Operations': [
      EVMTransactionType.WRAP,
      EVMTransactionType.UNWRAP,
      EVMTransactionType.FLASH_LOAN,
      EVMTransactionType.REBASING,
      EVMTransactionType.CLAIM_REWARDS,
    ],
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case 'LOW':
        return 'bg-green-100 text-green-800';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800';
      case 'HIGH':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getGasUsageBadgeColor = (level: string) => {
    switch (level) {
      case 'LOW':
        return 'bg-blue-100 text-blue-800';
      case 'MEDIUM':
        return 'bg-purple-100 text-purple-800';
      case 'HIGH':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-medium text-gray-900">EVM Transaction Types Documentation</h2>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Legend</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Risk Level:</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Low</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">High</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Gas Usage:</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Low</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">Medium</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">High</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(categories).map(([category, types]) => (
            <div key={category}>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {types.map(type => {
                  const metadata = TransactionMetadata[type];
                  return (
                    <div key={type} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{type.replace(/_/g, ' ')}</h4>
                        <div className="flex gap-1">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getRiskBadgeColor(metadata.riskLevel)}`}>
                            {metadata.riskLevel}
                          </span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getGasUsageBadgeColor(metadata.gasUsageLevel)}`}>
                            {metadata.gasUsageLevel}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{metadata.description}</p>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Common Methods: </span>
                        {metadata.commonMethods.join(', ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}