// TODO: Fix the type errors in calculateBalanceWithInterest related to string/number arithmetics

import { Account } from '../types/account';

export function calculateBalanceWithInterest(account: Account, interest: number): string {
  // Currently fails: account.balance + interest
  // Fix required: ensure correct calculation and string result
  // TODO: Implement calculation with type safety
  return '';
}

export function formatBalance(balance: string): string {
  // TODO: Implement currency formatting (placeholder)
  return '';
}