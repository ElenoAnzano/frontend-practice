export default function Guestlayout({ children}: Readonly<{ children: React.ReactNode }>){
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}