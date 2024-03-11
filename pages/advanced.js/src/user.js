class User {

    // -----------------------static---------------
    static all = []

    static findByName(name) {
        return User.all.find(user => user.name === name)
    }

    // HM1: create the static method findByAgeRange(minAge, maxAge)
    // if it's called like: User.findByAgeRange(10,20)
    //    returns an array of users with age between 10 and 20
    // if it's called like: User.findByAgeRange(null,20)
    //    returns an array of users with age under or equal 20
    // if it's called like: User.findByAgeRange(10,null)
    //    returns an array of users with age over or equal 10


    static findByAgeRange(minAge, maxAge) {

        if (minAge == 10 && maxAge == 20) {
            return User.all.filter(user => user.age >= minAge && user.age <= maxAge)

        } else if (minAge == null && maxAge ) {
            return User.all.filter(user => user.age <= maxAge)

        } else if (minAge && maxAge == null) {
            return User.all.filter(user => user.age >= minAge)


        }
    }

    // ---------------------prototype-----------------------
    constructor(name, age, avatar, online) {
        this.name = name
        this.age = age
        this.avatar = avatar
        this.online = online
        this.friends = []
        this.recivedMessages = []
        this.sentMessages = []

        User.all.push(this)
    }

    // ----------------------------friend related methods---------------

    findFriendByName(name) {
        return this.friends.find(user => user.name === name)
    }

    addFriend(user) {
        // HW2: use a condition to prevent duplicate relationships

        if (this.friends==false) {
            this.friends.push(user)
            user.friends.push(this)
            console.log('Prietenul a fost adaugat cu succes')            

        } else {
            
            console.log('Prietenul deja exista');
           
        }
    }

    addFriendByName(name) {
        let user = User.findByName(name)
        this.friends.push(user)
        user.friends.push(this)
    }

    // HW3*: for comodity you could add the next methods:
    //  removeFriend(user)
    //  removeFriendByName(name)

    removeFriend(user) {
        this.friends.splice(user)
        user.friends.splice(this)
    }

    removeFriendByName(name) {
        let user = User.findByName(name)
        this.friends.splice(user)
        user.friends.splice(this)
    }

    // ----------------------message related methods-------------------------

    sendMessage(messageContent, user) {
        let message = new Message(messageContent, this, user, null)
        this.sentMessages.push(message)
        user.recivedMessages.push(message)
    }



    render() {
        console.log(`[${this.name}]`)
    }
}