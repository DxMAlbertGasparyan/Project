const Interface = ()=>{
 

    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p: Point = { x: 10, y: 20 };
    interface IUser {
        id: number;
        name: string;
        sayWords(words: string): void;
    }
    let employeer: IUser = {
          
        id: 1, 
        name: "Alice",
        sayWords: function(words: string): void{
            console.log(`${this.name} говорит ${words}`);
        }
    }
    interface StringArray {
        [index: number]: string;
    }
     
    let phones: StringArray;
    phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
     
    let myPhone: string = phones[0];
    console.log(myPhone);
    employeer.sayWords("Привет, как дела?");
    console.log(p);


    return(
        <>
        <h1>Hello</h1>
        </>
    )
}

export default Interface;