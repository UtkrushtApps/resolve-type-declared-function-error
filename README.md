# Task Overview
You are working on a TypeScript-based dashboard that displays account balances and applies interest calculations. A recent refactor changed the 'balance' property of the Account interface from number to string, but some of the functions still attempt arithmetic directly, causing a compilation error.

# Guidance
- Review how the Account interface and related functions handle the 'balance' property.
- Ensure that calculations involving the balance and interest handle types correctly and results are consistently formatted.
- Maintain type safety throughout the file and confirm that all issues related to the string/number type mismatch are addressed.
- Keep the data display accurate and appropriately formatted for the dashboard scenario.

# Objectives
- Resolve the compilation error related to the incompatible types in arithmetic operations.
- Update all relevant code to maintain type consistency for the balance calculations.
- Ensure account balances (with interest) are displayed correctly and type-safe.

# How to Verify
- The dashboard code should compile without any TypeScript errors.
- On running the dashboard, it should display each account owner's name and the correct balance including interest, formatted as intended.
- No type warnings or errors should be presented with respect to balance and calculation logic.
