#Random Number Fucntion

randBetween <- function(low, high){
  number <- trunc(runif(10)*((high+1)-low) + low)
  return(number)
}

print(randBetween(5,10))
