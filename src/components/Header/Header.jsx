import "./Header.css"

export default function Header({children}){
    return(
        <header id="header-area">
            <h1 >{children}</h1>
        </header> 
    );
}