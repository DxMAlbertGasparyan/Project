const App = ()=>{
   let text:string="Text";
   let decimal:number =6;
   let hex: number = 0xf00d;  
   let binary: number = 0b1010;
   let octal: number = 0o744;
   let color: string = "blue";
color = 'red';
   console.log(decimal);
   console.log(hex);
   console.log(binary);
   console.log(octal);
   
//    let big:bigint = 100n;
   return (
    <>
        <h1>{text}</h1>
    </>
   )
}
export default App;