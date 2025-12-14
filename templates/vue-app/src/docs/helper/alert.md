# SweetAlert Helper Documentation

This module provides reusable functions for showing different types of alerts using **SweetAlert2**.  
It also integrates with your API requests for confirmation actions.

---

## Table of Contents

- [showAlert](#1-showalert)
- [showSuccessAlert](#2-showsuccessalert)
- [showWarningAlert](#3-showwarningalert)
- [showErrorAlert](#4-showerroralert)
- [showCancelAlert](#5-showcancelalert)
- [showConfirmDeleteAlert](#6-showconfirmdeletealert)
- [Example Usage](#example-usage)

---

## 1️⃣ showAlert

```ts
showAlert(
  type: "success" | "warning" | "error" | "info" | "question",
  message: string,
  confirmedAction?: Function,
  confirmBtnText: string = 'Ok',
  showCancelBtn: boolean = false,
  cancelBtnText: string = 'No'
): Promise<void>

Description: Generic function to display an alert.

Parameters:

type: Alert type (success, warning, error, info, question)
message: Message to display in the alert
confirmedAction (optional): Function executed when user confirms
confirmBtnText (optional): Text for confirm button, default "Ok"
showCancelBtn (optional): Show cancel button, default false
cancelBtnText (optional): Text for cancel button, default "No"

Example

const getArticles = async () => {
  const res = await GetRequest('https://jsonplaceholder.typicode.com/posts')
  console.log(res)

  await showSuccessAlert(() => {
    console.log('Action confirmed!')
  }, 'Success')
}