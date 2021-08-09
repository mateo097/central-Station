import { AppBar, Grid, GridContentAlignment, GridItemsAlignment, GridJustification, Toolbar } from "@material-ui/core";

import "./navbar.css";


export type NavbarProps = {
    
    children?: React.ReactNode;
    /** it accepts value between 0 and 24 inclusive */
    elevation?: number;
    justify?: GridJustification;
    alignItems?: GridItemsAlignment;
    alignContent?: GridContentAlignment;
    position?: "fixed" | "absolute" | "sticky" | "static" | "relative" | undefined;
}

const Navbar = ({ children, alignItems="center", alignContent, justify, elevation=5, position="fixed",  } : NavbarProps ) => {
    return <AppBar 
        position={position} 
        elevation={elevation}
        className="appbar-appbar" 
        style={{ backgroundColor: `var(--primary-color)`}}>
            <Toolbar>
                <Grid container justify={justify} alignItems={alignItems} alignContent={alignContent}>
                    { children }
                </Grid>
            </Toolbar>
        </AppBar>
}

export default Navbar;