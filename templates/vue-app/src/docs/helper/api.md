# API Requests Documentation

This module is designed to send HTTP requests to a server using **axios**.  
It includes four main methods: **GET, POST, PUT, DELETE**, and an internal `Request` function for error handling and response management.

---

## Table of Contents

- [Main Functions](#main-functions)
    - [GetRequest](#1-getrequest)
    - [PostRequest](#2-postrequest)
    - [PutRequest](#3-putrequest)
    - [DeleteRequest](#4-deleterequest)
- [Internal Request Function](#internal-request-function)
- [Default Error Handling](#default-error-handling)
- [Examples](#examples)

---

## Main Functions

### 1️⃣ GetRequest

```ts
GetRequest(url: string, params?: object, noAlert?: boolean, timeout?: number)

Description: Sends a GET request to the server and retrieves data.

Parameters:
url: API endpoint
params (optional): Query parameters
noAlert (optional): If true, suppresses error alerts
timeout (optional): Request timeout in milliseconds
Returns: Response data from the server


Example

const getArticles = async () => {
    const res = await GetRequest('https://jsonplaceholder.typicode.com/posts')
    console.log(res)
}

------------------------------------------------
PostRequest(url: string, data?: object, noAlert?: boolean, timeout?: number)

Description: Sends a POST request to the server (e.g., user signup or create article).

Parameters:

url: API endpoint
data (optional): Payload to send
noAlert and timeout: Same as GetRequest
Returns: Response data from the server

Example

const getArticles = async () => {
    const res = await GetRequest('https://jsonplaceholder.typicode.com/posts')
    console.log(res)
}

------------------------------------------------
PutRequest(url: string, data?: object, noAlert?: boolean, timeout?: number)

Description: Sends a PUT request to update data.
Parameters: Same as PostRequest
Returns: Response data from the server

Example

const putArticle = async () => {
    const res = await PutRequest('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'New Title',
      summary: 'Updated summary'
    })
  console.log(res)
}

------------------------------------------------
DeleteRequest(url: string, params?: object, noAlert?: boolean, timeout?: number)

Description: Sends a DELETE request to remove data.

Parameters:

url: API endpoint
params (optional): Query parameters
noAlert and timeout: Same as GetRequest
Returns: Response data from the server

Example

const deleteArticle = async () => {
  const res = await DeleteRequest('https://jsonplaceholder.typicode.com/posts/1')
  console.log(res)
}

------------------------------------------------

export const isLogin = (token: string | null ): boolean => {
    return !token
}

## Optional: Login Check Helper

Sometimes you want to check if a user is logged in **before sending an API request**.  
This helper function only checks the token you pass and **does not perform any redirects or alerts**.  
It is up to the developer to decide what to do if the user is not logged in.

### isLogin

```ts
isLogin(token: string | null): boolean

Example

import { isLogin } from '@/utility/api'

const token = localStorage.getItem('auth_token')

if (!isLogin(token)) {
  console.log('User is not logged in')
  // Optional: Redirect or show alert
  router.push('/sign-in')
} else {
  console.log('User is logged in')
}
