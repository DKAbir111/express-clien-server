import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}
