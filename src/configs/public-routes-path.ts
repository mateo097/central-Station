import AdminPage from "../Views/Admin/AdminPage";
import { routes } from "./routes";



const PublicPath = {
    "joinpage": <routes>{
        path: "/admin",
        component: AdminPage,
        state: "Public"
    }
}
export default {...PublicPath}
    
