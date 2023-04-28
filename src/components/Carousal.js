import React from 'react'

const Carousal = () => {
    return (
        <>
            <div id="default-carousel" className="relative w-full my-4 mx-auto" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1420745981456-b95fe23f5753?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY4MjY4Mjc1Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY4MjY4Mjc3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY4MjY4Mjc5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY4MjY4Mjc5OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY4MjY4MjgzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokLiinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    )
}

export default Carousal