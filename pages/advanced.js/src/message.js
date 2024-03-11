class Message {
    static all = []


    constructor (content, fromUser,toUser,status) {
        this.content = content
        this.fromUser = fromUser
        this.toUser = toUser
        this.status = status
        Message.all.push(this)
    }
    render () {
        console.log(`[${this.content}]`)
    }
}

