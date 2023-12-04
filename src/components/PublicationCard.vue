<template>
  <a :href="props.publication.link" class="publication-item">
    <div class="start">
      <h3>{{ props.number }}</h3>
    </div>
    <div class="main">
      <h3 class="uppercase">{{ props.publication.title }}</h3>
      <p class="mt-3">{{ props.publication.authors }}</p>
      <p class="mt-2">{{ props.publication.journal }}</p>
    </div>
    <div class="end">
      <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26.9558" r="25" stroke="white" stroke-width="2" />
        <path d="M31.037 23.695L20.2278 34.5042L18.4517 32.7282L29.261 21.9189L19.734 21.9189L19.734 19.4075H33.5484V33.2219H31.037V23.695Z" fill="white" />
      </svg>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Publication } from '@/api/types'

const props = defineProps({
	number: { type: Number, required: true },
	publication: { type: Object as () => Publication, required: true }
})

</script>

<style scoped lang="scss">

.publication-item {
  width: 100%;
  max-width: 1080px;

  display: grid;
  grid-template-columns: 54px 1fr 100px;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  padding: 24px 32px;

  border-radius: 8px;
  border: 1px solid var(--ghost-grey);
  background: var(--dark);
  // backdrop-filter: blur(37.5px);

  position: relative;
  z-index: 1;

  .start {
    display: flex;
    // justify-content: center;
    // padding-right: 20px;
    justify-content: flex-start;
  }

  .end {
    display: flex;
    justify-content: flex-end;
  }

  &:hover {
    color: var(--grey);
    // background-color: var(--ghost-grey);
  }

  &:hover path {
    fill: var(--purple);
    transition: 0.2s;
  }

  &:hover circle {
    stroke: var(--purple);
    transition: 0.2s;
  }

  &:not(hover) path {
    fill: white;
    transition: 0.2s;
  }

  &:not(hover) circle {
    stroke: white;
    transition: 0.2s;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(172,80,242);
    background: linear-gradient(270deg, #281c42 1.97%, rgba(54, 22, 121, 0) 108.44%);
    transition: opacity 0.2s linear;
    z-index: -1;
    opacity: 0;

    border-radius: 8px;
  }
  &:hover::before {
  opacity: 1;
}
}
</style>