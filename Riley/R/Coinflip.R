#Coinflip 2.0


barValues <- rep(0,30)
runs <- 100000
for(i in 1:runs){
  pos = sum(runif(30) < .5)
  barValues[pos] <-  barValues[pos] + 1
}

barplot(barValues/runs)

