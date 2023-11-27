import Image from "next/image"
import Right from "../icons/Right"

export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12">
                {/* <h1 className="text-4xl font-semibold">Nothing is better than having a cup of&nbsp;
                    <span className="text-primary">coffee</span>
                </h1> */}
                <h1 className="text-4xl font-semibold">
                    From bean to cup, <br/>
                    for that moment of <br/>
                    <span className="text-coffee">
                        Perfection
                    </span>
                </h1>
                <p className="mt-4 text-gray-500">Without coffee, life just like missing a piece</p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-400 semibold">
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>
            
            <div className="relative">
                <Image src={'/Image/coffee2.png'} layout={'fill'} objectFit={'contain'} alt={'coffee'}></Image>
            </div>
            
        </section>
    )
}