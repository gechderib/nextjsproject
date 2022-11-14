import MainNavigation from "./MainNavigation";

function Layout({children}){
    return <div>
        <MainNavigation/>
        <div>
            {children}
        </div>
    </div>
}

export default Layout;