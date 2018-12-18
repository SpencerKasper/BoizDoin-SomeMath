#Dice Game
import random

class Dice(object):
    def rollDice(self, roll):
        dice = [1,2,3,4,5,6]
        rolledNumber = random.sample(dice, 1)
        return rolledNumber
        
class Game(object):
    def __init__(self):
        self.computerRoll = Dice.rollDice()
        print("The computer rolled ", self.computerRoll)
    def roll(self, name):
        self.player = Player.name
        self.playerRoll = Dice.rollDice(self)
        print("The computer rolled %d" % self.computerRoll)
        print("%s rolled %d" % (Player.name, self.playerRoll))
        if self.playerRoll > self.computerRoll:
            print("You won!")
        if self.computerRoll > self.playerRoll:
            print("You lost!")
        else:
            print("Tie!")

class Player(object):
    def __init__(self, name):
        self.name = name