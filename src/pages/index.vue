<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <div class="prose prose-sm m-auto text-left">
    <h1>azabroflovski</h1>
    <p>{{ t('intro.desc') }}</p>
    <p>{{ t('intro.desc2') }}</p>
    <p>{{ t('intro.desc3') }}</p>

    <h4>Blog posts</h4>

    <ul>
      <li>
        <RouterLink to="/commit-style">
          Git commit style guide
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.prose {
  max-width: 55ch !important;
}
</style>
