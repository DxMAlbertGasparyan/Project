const App = ()=>{
   let text:string="Text";
   let decimal:number =6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   let octal: number = 0o744;
   let big:bigint =100n;
   return (
    <>
        <h1>{text}</h1>
    </>
   )
}
export default App;