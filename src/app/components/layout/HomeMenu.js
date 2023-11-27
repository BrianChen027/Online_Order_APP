import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-10 right-10 w-full 
        justify-start">
                <div className="absolute -top-[20px] -left-16 -z-10">
                    <Image src={'/Image/bg_coffee_beans1.png'} width={650} height={500} objectFit={'contain'} alt={'bd_left_coffee'} />
                </div>
                <div className="absolute -top-[-10px] -right-16 -z-10">
                    <Image src={'/Image/bg_coffee_beans2.png'} width={650} height={500} objectFit={'contain'} alt={'bd_right_coffee'} />
                </div>
            </div>
            
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
                <h2 className="text-coffee font-bold text-4xl italic">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
        
    );
}