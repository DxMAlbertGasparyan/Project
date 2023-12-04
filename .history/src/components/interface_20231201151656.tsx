const Interface = ()=>{
    interface IUser {
        id: number;
        name: string;
    }
    let employee: IUser = {
        id: 1, 
        name: "Tom"
    }

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
    let employee: IUser = {
          
        id: 1, 
        name: "Alice",
        sayWords: function(words: string): void{
            console.log(`${this.name} говорит "${words}"`);
        }
    }
      
    employee.sayWords("Привет, как дела?");
    console.log(p);
    console.log("id: ", employee.id);
    console.log("name: ", employee.name);
    return(
        <>
        <h1>Hello</h1>
        </>
    )
}

export default Interface;