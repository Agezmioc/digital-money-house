
import Link from "next/link";

const Header = () => {
    return <header>
            <nav className="flex justify-between mb-4 px-8 py-4 bg-[#C1FD35]">
                <div>
                    <Link href='/'>Logo</Link>
                </div>
                <ul className="flex">
                    <li>
                        <Link href='/login'>Ingresar</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/signup'>Crear Cuenta</Link>
                    </li>
                </ul>
            </nav>
        </header>
} 
export default Header;