#Lecture Notes for November 1st, 2018

x = [1, 3.13, True, "Dog", [1,2,3]]
a,b = 1,2

#Method
x.index(1)
x.index("Dog")


if "cat" in  x:
    print(x.index("cat"))
else:
    print("Cat is not in list")

#Editing Lists/Arrays
x.append("frog")
x.insert(2,"frog")
x.remove("frog")                            #removes the first isntance of "frog"
del x[1]
x.sort()

x.sort(reverse = True, key = str.lower)     #lexicographical order

#Function
def f(x):
    x.sort()
    return x

x = [12 ,3 ,4,23, 3]
y = x                                       # y = x stores a reference to the object in lists
y
f(x)
y

#Tuple
newx = (1,2,3)
#newx[0] = 2                                 #Imutable, can not be changed

#String
name = "Fred"
#name[0] = "D"                               #Can not, strings are imutable

name = "D" + name[1:]                       #Re-assigning new string into name
name

#Dictionary
myPals = {"Joe":15, "Tom":8, "Sue":12}
myPals["Fred"] = 20
myPals

message = "four score and seven years ago"
count = {}
for ch in message:
    count.setdefault(ch,0)
    count[ch] = count[ch] + 1
import pprint
pprint.pprint(count)
count
