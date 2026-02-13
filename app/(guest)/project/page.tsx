import Link from "next/link"
export default function projectpage(){
    return(
        <div>
            <main>
                <h1>Project Page</h1>

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