import Link from "next/link"
export default function About(){
    return(
        <div>
            <main>
                <h1>about me</h1>
                <div>
                    <nav>
                        <ul>
                            <li><Link href="/">back</Link></li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    )
}