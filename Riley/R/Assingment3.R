#Assignment 3 -

#Loading Assignment 3 csv into scores Dataframe
scores <- data.frame(read.csv("file.csv"))

#Creates plot from scores data.frame
attach(scores)
plot(high_GPA, univ_GPA, main = "High School GPA vs College GPA",
     xlab = "HS GPA", ylab = "College GPA",
     pch = 24, bg="red", xlim = c(0, 4), ylim = c(0, 4))