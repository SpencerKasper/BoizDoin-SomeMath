#Coin Flip Probability 

#Probability Function

prob <- function(n,p,x){
  #(n x) (p^x) ((1-p)^(n-x))
  prob <- choose(n,x) * (p^x) * ((1-p)^(n-x))
  return(prob)
}

#Creating vector of all probabilites
barValues <- prob(1000, .5, 0)
for (i in 1:1000) {
  barValues <- append(barValues, prob(1000, .5, i))
}

barValues
barplot(barValues)
sum(barValues[22:31])



#Flipping 60 coins
prob <- function(n,p,x){
  #(n x) (p^x) ((1-p)^(n-x))
  prob <- choose(n,x) * (p^x) * ((1-p)^(n-x))
  return(prob)
}

#Storing the prob of 0-60 heads into probs
probs <- prob(60, .5, 0)
for (i in 1:60) {
  probs <- append(probs, prob(60, .5, i))
}

#Prob that there are more than 34 heads
sum(probs[36:61])

#Prob that the number of heads is an odd number
sum(probs[seq(2,61,2)])
