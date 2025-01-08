import Link from "next/link";

const NotFound = () => {
    return (
        <div className="fixed-top notFound">
            <p>
                <span>404</span>
                <i>Page Not Found</i>
                <Link href="/">Go Home</Link>
            </p>
        </div>
    )
}

export default NotFound;