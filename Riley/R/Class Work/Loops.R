#Loops

loop <- function(n){
  for(i in 1:n){
    print(i)
  }
}

loop(4)

#Manual Factorial Function

fact <- function(x){
  # 0! = 1
  if (x == 0){
    return(1)
  }else{
    total <- 1
    for(i in 1:x){
      total = total*i
    }
    return(total)
  }
}

#Vector of Factorials
v <- factorial(1)

for (i in 2:10) {
  v <- append(v,factorial(i))
}
