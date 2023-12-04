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