import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

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
                <SectionHeaders 
                subHeader={'check out'}
                mainHeader={'Menu'} />
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