export { NavLink, Navbar,  };

function NavLink({ children, href }: { children: string; href: string }) {
    return (
    <div className={`
        flex-1
        border-3 text-center rounded-xl 
        text-2xl font-(sans-serif:--font-monoton)
        transition duration-350
        hover:bg-(--bg-secondary) hover:text-(--fg-secondary) 
        p-2 m-2 mt-0
        `}>
        <a href={href} >
        <p >{children}</p >
        </a>
    </div>
    );
}

function Navbar({ children }: { children: React.ReactNode }) {
    return <nav className="flex">{children}</nav>;
}

