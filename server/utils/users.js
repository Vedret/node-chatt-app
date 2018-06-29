[{
    id:'/#1232132132',
    nem:'wedrtet',
    room:'The office Fansa'

}]

// addUser
//remove User(id)
//getUser (id)
//getUserList(room)


class Users{
    constructor(){
        this.users=[];
    }
    addUser(id,name,room){
        var user={id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id){
        let user=this.getUser(id);

        if(user){
            this.users=this.users.filter((user)=>user.id !== id);
        }
        return user;
    }
    getUser(id){
        return this.users.filter((user)=>user.id===id)[0]

    }
    getUserList(room){
        let users=this.users.filter((user)=>{
            return user.room===room;
        })
        var namesArray=users.map((user)=>{
            return user.name;
        })
        return namesArray;

    }
}

module.exports={Users};