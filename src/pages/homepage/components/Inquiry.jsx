import React from 'react'
import BackgroundI from '../../../assets/background/image.png'
const Inquiry = () => {
    return (
        <div className='container mx-auto bg-white mt-4 '>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-80 rounded-md"
                style={{
                    backgroundImage: `url(${BackgroundI})`,
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF] opacity-85 rounded-md"></div>
                {/* Content Layer */}
                <div className="relative text-white h-72 flex items-center">
                    <div className="grid grid-cols-2 w-full">
                        <div className="p-4">
                            <h4 className="font-semibold text-3xl">
                                An easy way to send <br /> requests to all suppliers
                            </h4>
                            <p className="font-regular text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div className="grid items-end h-64 px-5 ">
                            <form className="bg-white text-black p-4 rounded shadow-lg">
                                <h4 className="text-Primary font-semibold mb-4">Send quote to suppliers</h4>
                                <input
                                    type="text"
                                    placeholder="What item you need?"
                                    className="text-black w-full placeholder-gray-500 p-1 mb-4 border rounded"
                                />
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Type more details"
                                    className="w-full placeholder-gray-500 p-1 mb-4 border rounded"
                                ></textarea>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        className="placeholder-black p-1 border rounded "
                                        placeholder="Quantity"
                                    />
                                    <select
                                        name=""
                                        id=""
                                        className="flex items-center p-2 border rounded appearance-none bg-white text-black pr-8"
                                        style={{
                                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' fill=\'%238B96A5\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z\' clip-rule=\'evenodd\'/%3E%3C/svg%3E")',
                                            backgroundPosition: 'right 0.5rem center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    >                                        <option value="">Pcs</option>
                                    </select>
                                </div>
                                <button className="bg-gradient-to-r from-[#127FFF] to-[#0067FF] text-white font-semibold py-1 px-3 mt-3 rounded shadow-lg hover:opacity-90">
                                    Send inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inquiry