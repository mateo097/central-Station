import PublicRoutesPath from "./public-routes-path";

export type routes = {
    path: string,
    path_ref?: (id: string | number) => string,
    component: () => JSX.Element,
    state: "Public" | "Private",
    restricted?: boolean
}

const routers = {
    ...PublicRoutesPath
}

export default routers;