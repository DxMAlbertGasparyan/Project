import { log } from "console";

const App = ()=>{
   let text:string="Text";
   let decimal:number =6;
   let hex: number = 0xfcba03;  
   let binary: number = 0b1010;
   let octal: number = 0o744;
   let color: string = "blue";
   color = 'red';
   let fullName: string = `Bob Bobbington`;
   let age: number = 37;
   let sentence: string = `Hello, my name is ${fullName}.I'll be ${age + 1} years old next month.`;
   let list: number[] = [1, 2, 3];
   let genericList: Array<number> = [1,2,3]
   enum Color {
    Red,
    Green,
    Blue,
   }
  let c: Color = Color.Green;
  enum Excample {
    x = 1,
    y,
    z,
  }
  let colorName: string = Excample[2];
   
  // Displays 'Green'
  console.log(colorName);
   console.log(c);
   console.log(list);
   console.log(sentence);
   console.log(color);
   console.log(decimal);
   console.log(hex);
   console.log(binary);
   console.log(octal);
   console.log(genericList);
   
//    let big:bigint = 100n;
   return (
    <>
        <h1>{text}</h1>
    </>
   )
}
export default App;