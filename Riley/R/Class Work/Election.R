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
