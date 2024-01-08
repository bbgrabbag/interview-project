import Link from "next/link"


export default function Home() {
  return (
    <main className="p-24">
      <h1 className="text-xl">Interview Spice</h1>
      <div>
        <div>
          <Link href="/spices">Spices</Link>
        </div>
        <div>
          <Link href="/blends">Blends</Link>
        </div>
      </div>
    </main>
  )
}
