<template>
  <div class="flex items-center h-full">
    <UContainer class="w-96">
      <UForm
        class="w-full"
        ref="form"
        :schema="schema"
        :state="state"
        @submit.prevent="submit"
      >
        <UFormGroup
          label="Email"
          required
          help="We will never share your email."
          name="email"
        >
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup
          label="Password"
          required
          name="password"
        >
          <UInput
            v-model="state.password"
            type="password"
          />
        </UFormGroup>

        <UButton
          class="mt-4"
          size="xs"
          type="submit"
          >Submit</UButton
        >
      </UForm>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

const state = ref({
  email: undefined,
  password: undefined,
});

const form = ref();

const submit = async () => {
  await form.value!.validate();
  //console.log("validated!");
};
</script>
