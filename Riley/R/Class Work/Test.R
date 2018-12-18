#Test Document for in Class Work 9/25/18

one <- 1
two <- 3

if (one == 1 & two == 2) {
  print("True")
} else {
  print("False")
}

#Short Circuit Evaluation

if (x){
  if(y){
    
  }
}

#Numeric to Other
as.character(53140)
as.logical(3.14)
as.logical(0)
as.integer(3.14)
as.numeric((3.14))

#String to Other
as.numeric("53140")


1:3

class(1:10)

c(1,2,4,5,6,9)

#Flattens to one level (not 2d array)
x <- c(1:10, 100:110)
c(1:3, 6:8)

str(1:10)

#has optional arguments (same with c())
append(1:3, 6:8, after = 2)
append(1:3, 6:8, 2)
append(1:3, 6:8, 0)

rep(3,10)
rep(1:3, 4)
seq(3,10,.5)

x <- c(a = 1, b = 2)
x

#Indexing
d <- 3:11
d[1]
d[c(2,3)]
d[c(1:2,5,8:9)]
d[-1:-3]
d > 5
d %in% c(4:6, 8, 11:13)

append(d, 12, after = 3)

#Unifrom Random Numbers
trunc(runif(1)*6)
