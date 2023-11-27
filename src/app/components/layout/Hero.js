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
                <p className="my-6 text-gray-500 text-sm">
                    Discover our café as the perfect spot for a brief respite in the midst of a busy day. 
                    Offering a selection of fine coffees and thoughtfully crafted snacks, 
                    we infuse new energy into your daily routine. More than just a place for coffee, 
                    our café serves as a sanctuary for your soul. 
                    Whether it's a bustling weekday or a leisurely weekend, our café stands as an ideal choice for rejuvenating your spirit and setting off anew. 
                    With our cozy atmosphere and friendly service, 
                    we ensure that each visit leaves you feeling joyful and satisfied.
                </p>
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