#Reverse Polish Notation to Infix Notation

#User input
stack = [2, 4]      #placeholder stack to remove errors when assigning a,b
txt = input('Enter RPN or <return>: ')

while(txt != ''):
    stack = []
    new_txt = txt.split()
    for component in new_txt:
        if component == "+":
            #Grabbing last two items
            a,b = stack[-2:]
            #Deleting last two items
            del stack[-2:]
            #Adding back to the stack in proper order
            stack.append(a + b)

        elif component == "-":
            a,b = stack[-2:]
            del stack[-2:]
            stack.append(a - b)

        elif component == "*":
            a,b = stack[-2:]
            del stack[-2:]
            stack.append(a * b)

        elif component == "/":
            a,b = stack[-2:]
            del stack[-2:]
            stack.append(a / b)

        else:
            stack.append(int(component))

    print(stack[0])
    txt = input('Enter RPN or <return>: ')


