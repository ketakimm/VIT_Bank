# Bank Compound Interest Planner

print("Namaste. Welcome to VIT Bank Compound Interest Planner")

#Choosing Scheme 

print("Choose scheme")
print("1. Savings Account (Yearly compounding)")
print("2. Fixed Deposit (Quarterly compounding)")
print("3. Education Loan (Monthly compounding)")

scheme = int(input("Enter your choice (1-3): "))

principal = float(input("Enter your principal amount (in ₹): "))

years = int(input("Enter time in years: "))

#Decide the rates and compounding frequency

if scheme == 1:
    rate = 0.05       #5% per year
    n = 1             #compounding once a year
    scheme_name = "Savings Account"
elif scheme == 2:
    rate = 0.07       #7% per year
    n = 4             #4 times per year
    scheme_name = "Fixed Deposit"
elif scheme == 3:
    rate = 0.08       #8% per year
    n = 12            #12 times per year
    scheme_name = "Education Loan"
else:
    print("Invalid choice!")
    #Program ends here
    exit()

print("Scheme selected:", scheme_name)
print("Principal = ₹", principal)
print("Rate =", rate*100, "%per year")
print("Time =", years, "years")

print()  #blank line

amount = principal

#Simple headings

print("Year   Opening_balance Interest   Closing_balance")

for year in range(1, years+1):
    opening = amount
    interest = opening*rate
    amount = opening + interest

    print(year, "       ", round(opening, 2), "      ",
           round(interest, 2), "       ", round(amount, 2))
    
total_interest = amount - principal

print()
print("Final Amount after", years, "years =", round(amount, 2))
print("Total interest earned =", round(total_interest, 2))