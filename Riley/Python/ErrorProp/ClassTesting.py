


class Restaurant(object):
    bankrupt = False
    def open_branch(self):
        if not self.bankrupt:
            print("branch opened")
        else:
            print("branch closed")


riley = Restaurant()

riley.open_branch()

riley.bankrupt = True

riley.open_branch()