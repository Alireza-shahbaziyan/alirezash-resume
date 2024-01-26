<template>
  <!-- <nav class="navbar flex justify-between items-center text-white BG h-20">
    <div>
      <div class="FONT-BOLD text-2xl">
        <i class=" text-sky-400 bi bi-balloon-fill inline-block"></i>
        Alireza</div>
    </div>
    <div>
        lorem
    </div>
    <div>lorem</div>
  </nav> -->
  <nav class="navbar BG FONT-BOLD text-white h-20 ">

    <div class="navbar-start">
      <div class=" text-2xl">
        <i class=" text-sky-400 bi bi-balloon-fill inline-block"></i>
        Alireza</div>
    </div>

    <div class="navbar-center hidden lg:flex ">
      <ul class="menu menu-horizontal px-1 text-lg">
        <li class="p-2"><a>Home</a></li>
        <li class="p-2">
          <details>
            <summary>Services</summary>
            <ul class="p-2">
              <li><a>Custom Websites</a></li>
              <li><a>Search Engine Optimization</a></li>
              <li><a>Website Maintenance Packages</a></li>
            </ul>
          </details>
        </li>
        <li class="p-2"><a>My Work</a></li>
        <li class="p-2"><a>Blog</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <i class="bi bi-list md:lg text-3xl md:hidden"></i>
      <button class="hidden md:block BTN-COLOR h-10 w-44 rounded-full ">Let's Talk <i class="hover:pl-1 bi bi-arrow-right"></i></button>
    </div>
  </nav>

</template>