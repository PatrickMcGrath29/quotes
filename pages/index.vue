<script setup>
const quotes = await queryContent("quotes").findOne();
</script>

<template>
  <Container>
    <div class="grid gap-7 grid-cols-1 md:grid-cols-3">
      <div v-for="quote in quotes.body">
        <div class="card bg-neutral hover:bg-opacity-80 shadow-xl">
          <div class="card-body">
            <p>
              {{ quote.text }}
            </p>
            <h4 class="card-title text-base">
              {{ quote.author }}, {{ quote.reference }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
