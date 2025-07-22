// TODO: Ensure the Account interface uses the correct type for the balance property and provide any necessary types for the rest of the app.

export interface Account {
  id: string;
  owner: string;
  // The balance property type was changed from number to string
  balance: string; // ensure type safety for balance as string
}