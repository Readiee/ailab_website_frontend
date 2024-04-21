<template>
  <div class="container flex gap-6">
    <div class="content__left w-full">
      <template v-if="project?.is_realized">
        <template v-if="!fetchScriptError"> 
          <DropfileBox v-if="project?.type == 0" />
          <WebCamBox v-if="project?.type == 1" />
        </template>
        <div v-if="fetchScriptError" class="base-box px-4 py-8 text-center error mt-4">
          По техническим причинам пока невозможно опробовать функционал данного проекта.
        </div>
      </template>

      <template v-else>
        <div v-if="fetchScriptError" class="base-box px-4 py-8 text-center">
          Данный проект еще разрабатывается.
        </div>
      </template>
      
      <!-- WebCam elements for script -->
      <div class="hidden">
        <div class="option">
          <select id="video-codec">
            <option value="default" selected>Default codecs</option>
            <option value="VP8/90000">VP8</option>
            <option value="H264/90000">H264</option>
          </select>
        </div>

        <div class="option">
          <input id="use-stun" type="checkbox">
          <label for="use-stun">Use STUN server</label>
        </div>

        <h2>State</h2>
        <p>
          ICE gathering state: <span id="ice-gathering-state" />
        </p>
        <p>
          ICE connection state: <span id="ice-connection-state" />
        </p>
        <p>
          Signaling state: <span id="signaling-state" />
        </p>

        <h2>Data channel</h2>
        <pre id="data-channel" style="height: 200px;" />

        <h2>SDP</h2>

        <h3>Offer</h3>
        <pre id="offer-sdp" />

        <h3>Answer</h3>
        <pre id="answer-sdp" />
      </div>

      <div class="project__main mt-8 mb-4">
        <span class="color-caption text-sm">Проект</span>
        <h3 class="my-2 uppercase">{{ project?.title }}</h3>
        <p>{{ project?.description }}</p>
      </div>

      <div class="project__authors mt-8 mb-10">
        <span class="color-caption text-sm">Авторы</span>
        <div class="authors-list flex flex-wrap gap-8 mt-4">
          <template v-for="author in project?.authors" :key="author.link">
            <UserGroup :img="author.photo" :title="author.first_name + ' ' + author.last_name" caption="ИКИТ СФУ" />
          </template>
        </div>
      </div>

      <div class="project__instruction">
        <AppAccordion title="Инструкция" :content="project?.instruction">
          <div v-html="project?.instruction" />
          <!-- <p>{{ project?.instruction }}</p> -->
        </AppAccordion>
      </div>
    </div>

    <!-- <div class="content__right w-1/3">
      <div class="other-projects-list flex flex-col gap-3">
        <template v-for="otherProject in projects" :key="otherProject.slug">
          <ProjectGroup :project="otherProject" />
        </template>
      </div>
    </div> -->
  </div>

  <ProjectsSection title="Другие проекты" style="margin-top: 120px;" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useProject from '@/hooks/useProject'
import UserGroup from '@/components/UserGroup.vue'
import DropfileBox from '@/components/DropfileBox.vue'
import WebCamBox from '@/components/WebCamBox.vue'
import AppAccordion from '@/components/UI/AppAccordion.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import { watch } from 'vue'

const route = useRoute()
const { project, slug, fetchScriptError } = useProject()

watch(() => route.params.slug, (newVal) => {
	slug.value = String(newVal)
})

watch(project, newValue => {
	if (newValue?.title) {
		document.title = newValue.title + ' — ' + 'НУЛ СИИ ИКИТ'
	}
})
</script>

<style scoped>
.container {
  max-width: 1120px;
}
</style>