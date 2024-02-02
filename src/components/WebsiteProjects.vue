<template>
    <div class="BG flex flex-col justify-between items-center my-20">
        <div class="text-2xl md:text-4xl FONT-BOLD mt-10 mb-5">Recent Website Projects</div>

        <div class="flex flex-col md:flex-row justify-around items-center w-full">

            <div style="background-color: #0a7977;" class="my-10 project-card rounded-md w-11/12 h-96 md:w-5/12 flex flex-col md:flex-row justify-center items-center ">
                <img class=" rounded-md" src="../../public/Projects/Concept | Pre-Raphaelite art exhibition landing page.jpg"
                    alt="">
            </div>

            <div  class="my-10 project-card bg-cyan-600 rounded-md w-11/12 h-96 md:w-5/12 flex flex-col md:flex-row justify-center items-center ">
                <img class=" rounded-md" src="../../public/Projects/Photo Studio Website.jpg"
                    alt="">
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-around items-center w-full ">

            <div style="background-color: #8a8a8a;" class="my-10 project-card rounded-md w-11/12 h-96 md:w-5/12 flex flex-col md:flex-row justify-center items-center ">
                <img class=" rounded-md" src="../../public/Projects/The Louvre Museum Redesign Concept.jpg"
                    alt="">
            </div>

            <div class="my-10 project-card bg-yellow-500 rounded-md w-11/12 h-96 md:w-5/12 flex flex-col md:flex-row justify-center items-center ">
                <img class=" rounded-md" src="../../public/Projects/Website Banner Design.jpg"
                    alt="">
            </div>
        </div>


        <div class="m-4"> <a class="rounded-full sm:btn-sm md:btn-md  btn btn-ghost border border-white m-2 text-white">Viewall Projects<i class="bi bi-arrow-right"></i> </a></div>
    </div>
</template>
<style>

/*.project-card{
    height: 32rem;
} */


.project-card img{
    width: 80%;
    height: 90%;
    transition: 1s all;    
}
.project-card img:hover{
        width: 100%;
        height: 100%;
}
</style>