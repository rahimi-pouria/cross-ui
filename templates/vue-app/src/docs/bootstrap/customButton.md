# CustomButton – BootstrapVueNext Versio

## Description
A flexible and reusable button component designed for  **Vue 3** and **BootstrapVueNext**.  .  
Supports form submission, modals, loading indicators, icons, routing, and dropdowns.  
Part of a cross-framework UI system adaptable to multiple frontend environments.

## Props

| Prop Name             | Type                               | Required | Description                                                                                      |
|-----------------------|------------------------------------|----------|------------------------------------------------------------------------------------------------|
| `id`                  | `String`                           | No       | Unique identifier for the button element, useful for targeting and testing.                    |
| `variantBtn`          | `String`                           | No       | Bootstrap button variant style (e.g., `'primary'`, `'danger'`).                                |
| `typeButton`          | `'button' \| 'submit' \| 'reset'` | No       | Button type attribute, useful for form buttons (default: `'button'`).                          |
| `label`               | `String`                           | No       | Text label displayed inside the button. Hidden if `iconName` is provided.                      |
| `btnClass`            | `String`                           | No       | Additional CSS classes to customize button appearance.                                         |
| `iconName`            | `String`                           | No       | Name of the icon to display inside the button.                                                |
| `iconType`            | `String`                           | No       | Reserved for future icon configuration.                                                        |
| `iconClass`           | `String`                           | No       | Additional CSS classes applied to the icon element.                                           |
| `modalId`             | `String`                           | No       | Optional, reserved for modal integration.                                                      |
| `textColor`           | `String`                           | No       | CSS class to define the text color inside the button (e.g., `'text-white'`).                   |
| `to`                  | `String`                           | No       | Used with `<router-link>` for internal navigation.                                             |
| `hasDropdown`         | `Boolean`                          | No       | Enables dropdown trigger behavior if set to true.                                             |
| `icon`                | `Boolean`                          | No       | Renders the button as an icon-only button if true.                                            |
| `altIcon`             | `Boolean`                          | No       | Optional alternative icon style for specific layouts.                                         |
| `disabled`            | `Boolean`                          | No       | Disables the button when true.                                                                 |
| `isLoading`           | `Boolean`                          | No       | Displays a loading spinner if true, useful during asynchronous actions.                        |
| `isLoadingClass`      | `String`                           | No       | CSS classes applied to the loading spinner element (e.g., Bootstrap spinner classes).          |
| `linkBtn`             | `String`                           | No       | Turns the button into a link (`<a>`) if a URL is provided.                                     |
| `sizeVuetifyBtn`      | `String`                           | No       | Vuetify-specific, ignored in BootstrapVue context.                                            |
| `elevationVuetifyBtn` | `String`                           | No       | Vuetify-specific, ignored in BootstrapVue context.                                            |
| `appendIcon`          | `String`                           | No       | Vuetify-specific, ignored in BootstrapVue context.                                            |
| `prependIcon`         | `String`                           | No       | Vuetify-specific, ignored in BootstrapVue context.                                            |

## Usage

**Notes:**
- The component is responsive and integrates seamlessly with modals, dropdowns, and Vue Router.
- When `typeButton` is `'submit'`, the button works naturally inside `<form>` elements, compatible with libraries like VeeValidate or VueUse Form.
- The `@click` event emits a `click` event where you can implement your custom logic such as form validation or async API calls.
- For async actions triggered on click, it is recommended to toggle `isLoading` in the parent component to:
    - Show a loading spinner
    - Prevent multiple clicks during the request
- If the click handler is synchronous/simple, setting `isLoading` is not necessary.
- If `iconName` is set, the text label is hidden and the icon is shown instead.
- Props not applicable for the current framework (e.g., Vuetify props in BootstrapVue) are ignored gracefully.

## Example

```vue
<CustomButton
  framework="bootstrap-vue"
  variant-btn="primary"
  :label="'Submit'"
  :type-button="'submit'"
  :is-loading="isSubmitting"
  :is-loading-class="'spinner-border spinner-border-sm text-white'"
  @click="submitForm"
/>
