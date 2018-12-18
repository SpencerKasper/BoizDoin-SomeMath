#Lecture notes from November 6th 2018

#Taking user input
cost = input("How much does this cost?")

#List
num = [2*n+1 for n in range(10)]
num
len(num)

def is_prime(n):
    #Code to determin if n is prime
    return n

primes = [n for n in range(100) if is_prime(n)]             #pass to function "is_prime"

#Infix notation "3 + 4"
#Polish Notation "+ 3 4"
#Postfix notation "3 4 +" or Reverse Polish Notation (RPN)

