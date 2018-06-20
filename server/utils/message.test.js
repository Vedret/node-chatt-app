let expect = require('expect');

let {generateMessage,generateLocationMessage}=require('./message')

describe ('generateMessage',()=>{

    it('should generate correct message object',()=>{
        let from='Jen';
        let text='Some message';
        let message=generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toInclude({
            // from:from // from equal from
            from, // ES6 sintax
            // text:text
            text
        });


    })
});

describe('generatelocationMessage',()=>{

    it('should generate correct location object',()=>{

        let from ='John';
        let longitude=1;
        let latitude=2;
        let url='https://www.google.com/maps?q=1,2';
        let message=generateLocationMessage(from,longitude,latitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toInclude({from,url});


    })
})