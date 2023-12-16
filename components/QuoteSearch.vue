<script setup lang="ts">
const quoteStore = useQuoteStore()

const searchString = ref('')

const matchingQuotes = computed(() => {
  return quoteStore.quotes.filter((quote) => {
    const textToSearch = [
      quote.text,
      quote.reference?.authorName,
      quote.reference?.referenceName,
    ]

    return textToSearch.some((text) => {
      return text?.toLowerCase().includes(searchString.value.toLowerCase())
    })
  })
})
</script>

<template>
  <div class="text-center">
    <button class="btn" onclick="filterSearch.showModal()">
      Search Quotes
    </button>
  </div>
  <dialog id="filterSearch" class="modal">
    <div class="modal-box">
      <div class="my-2 text-center flex justify-around">
        <input v-model="searchString" type="text" placeholder="Search" class="input input-md input-bordered input-primary w-full max-w-xs">
        <div class="inline-block">
          <form method="dialog">
            <button class="btn btn-primary">
              Close
            </button>
          </form>
        </div>
      </div>
      <div class="overflow-y-auto max-h-screen divide-y divide-slate-700">
        <NuxtLink v-for="quote in matchingQuotes" :key="quote.uuid" class="card py-5 px-3 rounded-none" :to="`quote/${quote.uuid}`">
          <div class="flex flex-col">
            <div class="text-sm font-bold mb-2">
              {{ smartEllipsis(quote.text, 175) }}
            </div>
            <h4 v-if="quote.reference?.referenceName" class="card-title text-base">
              {{ quote.reference.referenceName }}
            </h4>
            <h5 class="text-sm ">
              by {{ quote.reference?.authorName || "Anonymous" }}
            </h5>
          </div>
        </NuxtLink>
      </div>
    </div>
  </dialog>
</template>
