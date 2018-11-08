import random

dice = ['1','2','3','4','5','6']

#rolls a six sided dice
def rollDice():
    roll = random.sample(dice, 1)
    return roll

#converts the dice roll into an integer value
def convertRoll(roll):
    if roll == ['1']:
        newRoll = 1
    if roll == ['2']:
        newRoll = 2
    if roll == ['3']:
        newRoll = 3
    if roll == ['4']:
        newRoll = 4
    if roll == ['5']:
        newRoll = 5
    if roll == ['6']:
        newRoll = 6
    return newRoll

#Function compares the two rolls and decides the winner
def checkWinner(player, computer):
    if (player > computer):
        winner = "Riley"
    if (computer > player):
        winner = "The computer"
    if (computer == player):
        winner = "Tied. No one"
    return winner

playerRoll = rollDice()
computerRoll = rollDice()

numericalPlayerRoll = convertRoll(playerRoll)
numericalComputerRoll = convertRoll(computerRoll)

winner = checkWinner(numericalPlayerRoll, numericalComputerRoll)

print ('Player Roll', numericalPlayerRoll)
print ("Computer Roll", numericalComputerRoll)
print (winner, "has won the game.")