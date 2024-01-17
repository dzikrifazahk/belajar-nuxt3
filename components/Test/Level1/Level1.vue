
import type { ClientOnly } from '#build/components';
<template>
    <!-- ini client only -->
    <ClientOnly fallbackTag="span">
        <template #fallback>
            <p>
              Please Wait Loading ...
            </p>
        </template>
        <div>
            Hallo ini components level 1    
        </div>
    </ClientOnly>
</template>