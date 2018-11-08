

word = "beautiful" #3 Sylables
counter = 0

def checkIfVowel(letter):
    vowels = ["a","e","i","o","u"]
    for x in range(len(word)):
        if (word[letter-1]==vowels[x-1]):
            isVowel = True
        else:
            isVowel = False
    return isVowel

for x in range(len(word)):
    if (word[x]=="a") or (word[x]=="e") or (word[x]=="i") or (word[x]=="o") or (word[x]=="u"):
        if (x < len(word)):
           isVowel = checkIfVowel(x)
           if (isVowel==False):
               counter = counter + 1


print counter


            