export default function MenuLatte() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/Image/latte.png" className="max-h-auto max-h-45 block mx-auto" alt="coffee" />
            </div>
            
            <h4 className="font-semibold my-2">Latte</h4>
            <p className="text-gray-500 text-sm">
            An Americano is a type of coffee made by diluting espresso with hot water, 
            resulting in a strength similar to that of traditional drip coffee. 
            </p>
            <button className="mt-4 bg-coffee text-white rounded-full px-8 py-2">Add to Cart $3.5</button>
        </div>
    );
}