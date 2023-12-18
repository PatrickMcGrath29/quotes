<script setup lang="ts">
defineProps({
  showIcon: {
    type: Boolean,
    default: false,
  },
})
const quoteStore = useQuoteStore()
const searchString = ref('')

const matchingQuotes = computed(() => {
  const stripString = (text: string) => {
    return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  }

  return quoteStore.quotes.filter((quote) => {
    const textToSearch = [
      quote.text,
      quote.reference?.authorName,
      quote.reference?.referenceName,
    ]

    return textToSearch.some((text) => {
      return text !== undefined && text !== null && stripString(text).includes(stripString(searchString.value))
    })
  })
})
</script>

<template>
  <div class="text-center">
    <button class="btn btn-ghost" onclick="filterSearch.showModal()">
      <svg v-if="showIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <span v-else>Search Quotes</span>
    </button>
  </div>
  <dialog id="filterSearch" class="modal">
    <div class="modal-box h-full flex flex-col overflow-hidden max-sm:w-full max-sm:max-h-full max-sm:rounded-none">
      <div class="my-2 text-center flex justify-around space-x-2">
        <input v-model="searchString" type="text" placeholder="Search" class="input input-md input-bordered input-primary w-full max-w-xs">
        <div class="inline-block">
          <button class="btn btn-primary" onclick="filterSearch.close()">
            Close
          </button>
        </div>
      </div>
      <div class="overflow-y-auto max-h-screen divide-y divide-slate-700">
        <NuxtLink v-for="quote in matchingQuotes" :key="quote.uuid" class="card py-5 px-3 rounded-none" :to="`/quote/${quote.uuid}`" onclick="filterSearch.close()">
          <div class="flex flex-col">
            <div class="text-sm mb-2">
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
        <div v-if="matchingQuotes.length === 0" class="text-center my-5">
          No results found.
        </div>
      </div>
    </div>
  </dialog>
</template>
