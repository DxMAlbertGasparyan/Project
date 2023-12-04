const Interface = ()=>{
    interface IUser {
        id: number;
        name: string;
    }
    let employee: IUser = {
        id: 1, 
        name: "Tom"
    }
    console.log("id: ", employee.id);
    console.log("name: ", employee.name);
    return(
        <>
        <h1>Hello</h1>
        </>
    )
}

export default Interface;