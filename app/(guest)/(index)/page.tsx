import Link from "next/link"
export default function Home() {
    return (
        <div >
            <main>
                <h1>Home Page</h1>

                <div>
                    <nav>
            <ul className="flex items-center gap-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/project">Projects</Link></li>
            </ul>
          </nav>
                </div>
            </main>
        </div>
    )
}