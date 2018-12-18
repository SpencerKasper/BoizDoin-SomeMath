

word = "bbaaebb"
counter = 0
for x in range(len(word)):
    if (word[x]=="a") or (word[x]=="e"):
        counter = counter + 1
        print "This worked"
        
print counter