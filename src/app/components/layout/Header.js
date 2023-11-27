import Link from 'next/link'

export default function Header() {
    return (
        <header className='flex items-center justify-between'>
            <Link className="text-title font-semibold text-3xl" href="">
                Cat Cafe
            </Link>
            <nav className='flex items-center gap-8 text-gray-600 semibold'>
            <Link href={''}>Home</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Contact</Link>
            <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
            </nav>
        </header>
    );
}