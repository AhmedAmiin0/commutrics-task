<template>
  <div class="d-flex justify-content-center align-items-center flex-column py-3">
    <div class="formHeader">
      <h5>Send Invitations</h5>
      <form>
        <Input name="name" placeholder="name" />
        <Input name="email" placeholder="email address" type="email" />
        <Btn class="filled w-100">
          Send
          <template #rightIcon>
            <SendIcon />
          </template>
        </Btn>
      </form>
      <form>
        <div class="d-flex justify-content-between align-items-center w-100">
          <h6>Upload a CSV</h6>
          <Btn class="classic">
            Download Email Template
            <template #rightIcon>
              <SendIcon />
            </template>
          </Btn>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100">
          <Input name="csv" placeholder="name" type="file">
            <template #rightIcon>
              <DownloadIcon />
            </template>
          </Input>
          <Btn class="filled h-100">
            Upload
            <template #rightIcon>
              <SendIcon />
            </template>
          </Btn>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import Btn from "@/components/Btn.vue";
import SendIcon from "@/components/Icons/SendIcon.vue";
import Input from "@/components/Input.vue";
import DownloadIcon from "@/components/Icons/DownloadIcon.vue";
</script>
