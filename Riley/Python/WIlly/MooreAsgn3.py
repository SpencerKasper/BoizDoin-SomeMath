import random

class Deck(object):
    def shuffleDeck(self):
        orderedCards=[]
        suits = (' of Hearts',' of Spades',' of Clubs',' of Diamonds')
        numbers = ('2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace')
        for x in range(len(numbers)):
            for y in range(len(suits)):
                card='({}{})'.format(numbers[x],suits[y])
                orderedCards.append(card)
        shuffledCards = random.sample(orderedCards, 52)
        return shuffledCards

class Game(object):
    def __init__(self):
        self.hand=Deck.shuffleDeck(self)
        self.ties=[]
    def dealHands(self,name1,name2):
        self.p1=Player(name1)
        self.p2=Player(name2)
        self.p1.hand=self.hand[0:26]
        self.p2.hand=self.hand[26:52]
    def playCards(self):
        VsCard1=self.p1.playCard()
        VsCard2=self.p2.playCard()
        for x in VsCard1[1]:
            if x == 'J':
                x='11'
            if x == 'Q':
                x='12'
            if x == 'K':
                x='13'
            if x == 'A':
                x='14'
        for y in VsCard2[1]:
            if y == 'J':
                y='11'
            if y == 'Q':
                y='12'
            if y == 'K':
                y='13'
            if y == 'A':
                y='14'
        if eval(x) > eval(y):
            (self.p1.scoreboard).append(1)
            a='{} played {}\n{} played {}\n{} won this battle\n{}: {}, {}: {}'.format(self.p1.name, VsCard1, self.p2.name, VsCard2, self.p1.name, self.p1.name, self.p1.score(), self.p2.name, self.p2.score())
            print(a)
            return
        if eval(y) > eval(x):
            (self.p2.scoreboard).append(1)
            a='{} played {}\n{} played {}\n{} won this battle\n{}: {}, {}: {}'.format(self.p1.name, VsCard1, self.p2.name, VsCard2, self.p2.name, self.p1.name, self.p1.score(), self.p2.name, self.p2.score())
            print(a)
            return
        else:
            a='{} played {}\n{} played {}\nNeither won this battle\n{}: {}, {}: {}'.format(self.p1.name, VsCard1, self.p2.name, VsCard2, self.p1.name, self.p1.score(), self.p2.name, self.p2.score())
            print(a)
            (self.ties).append(1)
            return
    def checkDone(self):
        if len(self.p1.hand)==0:
            if self.p1.score()>self.p2.score():
                winner=self.p1.name
            if self.p1.score()==self.p2.score():
                return 'The game is a tie! No winner'
            else:
                winner=self.p2.name
            a='Game Winner: {}\nTies: {}\n{}: {},{}: {}'.format(winner,(self.ties).count(1),self.p1.name, self.p1.score(),self.p2.name, self.p2.score())
            print(a)
            return
        else:
            return 'Game is not done. Please continue'
    def gameScore(self):
        return '{}: {},  {}: {}'.format(self.p1.name, self.p1.score(), self.p2.name, self.p2.score())
    def playAllCards(self):
        for x in range(len(self.p1.hand)):
            self.playCards()
        return self.checkDone()
            
        

class Player(object):
    def __init__(self, name):
        self.name=name
        self.scoreboard=[]
    def __iter__(self):
        self.max=len(self.hand)
        return self
    def __next__(self):
        try:
            nextResult = self.hand[self.max-1]
        except IndexError:
            raise StopIteration
        self.max-=1
        return nextResult
    def playCard(self):
        topCard=self.hand[0]
        self.hand.remove(topCard)
        return topCard
    def cardsLeft(self):
        return len(self.hand)
    def score(self):
        return (self.scoreboard).count(1)
    def sneakPeek(self):
        for i in self.hand:
            print('{}: {}'.format((25-(self.hand).index(i)), i))
    
            
    

