import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <>
            <nav>

                <div className="logo">
                    <Link href="/"><h1>BANK | YES | CASE</h1></Link>
                </div>
                <Link href="/">หน้าเเรก</Link>
                <Link href="/about">เกี่ยวกับเรา</Link>
                <Link href="/products">สินค้าทั้งหมด</Link>
            </nav>



        </>
    )
}