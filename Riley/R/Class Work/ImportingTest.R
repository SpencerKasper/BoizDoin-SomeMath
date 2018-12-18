#Importing Data into R

data = read.csv("rnd.csv", header = FALSE)

with(data, print(summary(lm(v2 ~ v1))))
