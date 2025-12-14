# useVModelSync Composable Documentation

The `useVModelSync` composable provides a **reactive two-way binding** between a prop and internal state in Vue 3.  
It is primarily used to sync a prop (default is `modelValue`) with a local state and automatically emit updates to the parent component.

---

## Description

`useVModelSync` simplifies the process of handling **v-model bindings** inside custom components.  
It ensures that:

1. Any changes in the prop from the parent component automatically update the internal state.
2. Any changes in the internal state are emitted back to the parent using the `update:propName` event.

This composable is generic and can work with **any type** (`T`).

---

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `props` | `Record<string, any>` | - | The props object of the component to be synced. |
| `emit` | `(event: string, ...args: any[]) => void` | - | The component's emit function used to notify the parent of changes. |
| `propName` | `string` | `'modelValue'` | The name of the prop to sync. Can be customized if not using `modelValue`. |

---

## Return Value

Returns a **ref** that holds the synchronized state of the specified prop.  
This ref can be used internally in the component as a reactive variable.

---

## Notes

- By default, it syncs the `modelValue` prop, but the `propName` parameter allows for custom prop names.
- It automates two-way binding with minimal boilerplate, making component development simpler.
- TypeScript generics allow it to work with any data type (`string`, `number`, `object`, `array`, etc.).
- It uses Vue's `watch` to track both the prop changes and state changes efficiently.
