<template>
  <header class="my-2">
    <Container>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <HeaderItems />
            </ul>
          </div>
          <NuxtLink to="/" class="btn btn-ghost normal-case text-2xl">
            Quotes
          </NuxtLink>
        </div>
        <div class="navbar-end">
          <QuoteSearch :show-icon="true" />
          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-1">
              <HeaderItems />
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>
