<script setup lang="ts">
import { Reference } from "~/types";

const references = await queryContent<Reference>("/references").find();
</script>
<template>
  <Container>
    <div :class="useColumnSettings(references.length)" class="gap-5">
      <div
        class="card bg-slate-800 m-5 inline-block"
        v-for="reference in references"
      >
        <div class="card-body">
          <div class="card-title">
            {{ reference.referenceName }}
          </div>
          by {{ reference.authorName }}
        </div>
      </div>
    </div>
  </Container>
</template>
