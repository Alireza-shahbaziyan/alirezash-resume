<template>
    <div class="flex flex-col justify-between items-center my-20 ">
        <div class="text-2xl md:text-4xl FONT-BOLD TEXT-COLOR-DARK mt-10 mb-5">Recent Posts</div>

        <div class="flex flex-col md:flex-row justify-around items-center w-full text-slate-900 my-14">
            <div class="my-8 md:my-1 card md:w-96 h-96 w-10/12   shadow-xl">
                <figure class="px-5 pt-5 my-4">
                    <img src="data:image/png;base64,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"
                        alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">django channels!</h2>
                    <p> Channels has opened a new world of possibilities for Django developers, allowing</p>
                    <div class="card-actions">
                        <button class="btn btn-ghost text-sky-600 btn-primary">Read More <i
                                class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div class="my-8 md:my-1 card md:w-96 h-96 w-10/12   shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/1200px-HTTP_logo.svg.png"
                        alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Hypertext Transfer Protocol </h2>
                    <p>The Hypertext Transfer Protocol (HTTP) is an application ..</p>
                    <div class="card-actions">
                        <button class="btn btn-ghost text-sky-600 btn-primary">Read More <i
                                class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div class="my-8 md:my-1 card md:w-96 h-96 w-10/12   shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSmxIvqrWqF2dGHpt8DYmut4Hw7jbalaYaTIw_5vFlxj9uByc-AfWFa4lWFviEjJ5-ns&usqp=CAU"
                        alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">What is Javascript Promise?</h2>
                    <p>Promises are a way to implement async programming in JavaScript...</p>
                    <div class="card-actions">
                        <button class="btn btn-ghost text-sky-600 btn-primary">Read More <i
                                class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>


        </div>

    <div class="m-4"> <a class="rounded-full btn-md btn btn-ghost border border-black m-2 text-slate-900">View
            all Post<i class="bi bi-arrow-right"></i> </a></div>
</div>
</template>




