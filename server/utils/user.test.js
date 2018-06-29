const expect=require('expect');
const {Users}=require('./users');



describe('Users',()=>{

    let users;
    beforeEach(()=>{
        users = new Users();
        users.users=[{
            id:'1',
            name:'Mike',
            room:'Node course'
        },
        {
            id:'2',
            name:'wedret',
            room:'Node course'
        },
        {
            id:'3',
            name:'Ko',
            room:'Node course'
        }]


    it('Should add new user',()=>{
        let users=new Users();
        let user={
            id:'123',
            name:'wedret',
            room:'Office'
        };
        let resUser=users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });


    
 it('Should return names for node course',()=>{

    let userList=users.getUserList('Node course')
    expect(userList).toEqual(['Mike','Julie']);
 }) ;      
    });
});