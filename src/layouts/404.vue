<script lang="ts" setup>
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 h-100vh flex flex-center flex-col text-center dark:text-gray-200">
    <div class="prose prose-sm m-auto">
      <div text-4xl>
        <div i-carbon-warning inline-block />
      </div>
      <div>
        <button btn text-sm m="3 t8" @click="router.back()">
          {{ t('button.back') }}
        </button>
      </div>
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

