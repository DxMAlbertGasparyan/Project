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
            console.log(`${this.name} говорит "${words}"`);
        }
    }
      
    employeer.sayWords("Привет, как дела?");
    console.log(p);
    return(
        <>
        <h1>Hello</h1>
        </>
    )
}

export default Interface;