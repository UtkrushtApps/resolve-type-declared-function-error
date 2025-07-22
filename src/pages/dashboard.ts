// TODO: Wire up the dashboard code to use the account calculation functions properly
import { Account } from '../types/account';
import { calculateBalanceWithInterest, formatBalance } from '../services/account';

const account: Account = {
  id: 'abc123',
  owner: 'Alice',
  balance: '5000', // balance is a string
};

const INTEREST_RATE = 0.05;

export function renderDashboard() {
  // TODO: Use calculateBalanceWithInterest to show the correct balance after interest
  // and format the resulting balance
  // Output to console for demonstration
  console.log('Owner:', account.owner);
  // TODO: log the formatted balance with interest
}
