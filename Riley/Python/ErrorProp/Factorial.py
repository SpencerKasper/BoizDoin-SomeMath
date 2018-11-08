#Program will manually computer factorial of an integer. Will out put the same as math.factorial(number)


number = 1


def printFactorial(number):
    total = 1

    if number == 0:
        print total
    
    else:
        for x in range(number):
            total = total * (number-x)
        print total

printFactorial(number)

    
