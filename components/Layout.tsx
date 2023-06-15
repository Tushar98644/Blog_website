import Navbar from "./Navbar";

interface proptypes {
    children: any;
}

const Layout = ({children}:proptypes) => {
    return ( 
        <div>
            <Navbar/>
            {children}
        </div>
     );
}
 
export default Layout;