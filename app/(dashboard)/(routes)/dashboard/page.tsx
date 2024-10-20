import { UserButton } from "@clerk/nextjs";

const dashboard = ()=>{
    return(
        <div>
        <h1>Dashboard Page (Protected)</h1>
        <div>
            <UserButton />
        </div>
        </div>
    )
}
export default dashboard;