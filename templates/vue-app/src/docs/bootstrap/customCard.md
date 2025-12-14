# CustomCard – BootstrapVueNext Version

## Description
A highly flexible and reusable card component built with **Vue 3** and **BootstrapVueNext**.  
Supports custom titles, subtitles, images, body content, footers, embedded buttons, and links.  
Part of a cross-framework UI system adaptable to multiple frontend environments.

## Props

| Prop Name           | Type                        | Default   | Description                                                                                 |
|---------------------|-----------------------------|-----------|---------------------------------------------------------------------------------------------|
| `id`                | `String`                    | `''`      | Unique identifier for the card.                                                             |
| `title`             | `String`                    | `''`      | Main card title.                                                                            |
| `subTitle`          | `String`                    | `''`      | Subtitle shown below the title.                                                             |
| `titleTag`          | `String`                    | `'h4'`    | HTML tag used for the title.                                                                |
| `subTitleTag`       | `String`                    | `'h6'`    | HTML tag used for the subtitle.                                                             |
| `classCard`         | `String`                    | `''`      | Custom CSS classes for the outer card.                                                      |
| `imgSrc`            | `String`                    | `''`      | Source of the image.                                                                         |
| `imgAlt`            | `String`                    | `''`      | Alternate text for the image.                                                                |
| `imgTop`            | `Boolean`                   | `false`   | Places the image at the top of the card.                                                    |
| `imgBottom`         | `Boolean`                   | `false`   | Places the image at the bottom.                                                             |
| `imgLeft`           | `Boolean`                   | `false`   | Aligns image to the left.                                                                    |
| `imgRight`          | `Boolean`                   | `false`   | Aligns image to the right.                                                                   |
| `imgStart`          | `Boolean`                   | `false`   | Alias for `imgLeft`.                                                                         |
| `imgEnd`            | `Boolean`                   | `false`   | Alias for `imgRight`.                                                                        |
| `imgWidth`          | `String \| Number`          | `''`      | Width of the image.                                                                          |
| `imgHeight`         | `String \| Number`          | `''`      | Height of the image.                                                                         |
| `noBody`            | `Boolean`                   | `false`   | Removes the default card body wrapper.                                                      |
| `overlay`           | `Boolean`                   | `false`   | Enables image overlay layout.                                                               |
| `align`             | `String`                    | `''`      | Aligns the content inside the card.                                                         |
| `bgVariant`         | `String`                    | `''`      | Bootstrap background variant.                                                                |
| `borderVariant`     | `String`                    | `''`      | Bootstrap border variant.                                                                    |
| `textVariant`       | `String`                    | `''`      | Bootstrap text color variant.                                                                |
| `headerCard`        | `String`                    | `''`      | Optional header text shown above body.                                                      |
| `headerTag`         | `String`                    | `'div'`   | Tag for the header slot.                                                                     |
| `headerBgVariant`   | `String`                    | `''`      | Background variant for the header.                                                          |
| `headerBorderVariant`| `String`                   | `''`      | Border variant for the header.                                                               |
| `headerTextVariant` | `String`                    | `''`      | Text variant for the header.                                                                 |
| `headerClass`       | `String`                    | `''`      | Custom class for the header.                                                                 |
| `footerCard`        | `String`                    | `''`      | Optional footer text shown at the bottom.                                                  |
| `footerTag`         | `String`                    | `'div'`   | Tag for the footer slot.                                                                     |
| `footerBgVariant`   | `String`                    | `''`      | Background variant for the footer.                                                          |
| `footerTextVariant` | `String`                    | `''`      | Text variant for the footer.                                                                 |
| `bodyTag`           | `String`                    | `'div'`   | HTML tag for the card body.                                                                  |
| `bodyClass`         | `String`                    | `''`      | Class for the card body.                                                                     |
| `bodyBgVariant`     | `String`                    | `''`      | Background variant for the body.                                                             |
| `bodyBorderVariant` | `String`                    | `''`      | Border variant for the body.                                                                 |
| `bodyTextVariant`   | `String`                    | `''`      | Text color variant for the body.                                                             |
| `customClassText`   | `String`                    | `''`      | Additional classes for the inner body text.                                                 |
| `descriptionCard`   | `String`                    | `''`      | Default description text used in the body.                                                  |
| `showBtn`           | `Boolean`                   | `false`   | Toggles rendering of an embedded `CustomButton`.                                           |
| `idBtn`             | `String`                    | `''`      | ID of the button.                                                                            |
| `btnClass`          | `String`                    | `''`      | Classes for the embedded button.                                                            |
| `variantBtn`        | `String`                    | `''`      | Variant of the embedded button.                                                             |
| `labelBtn`          | `String`                    | `''`      | Label text for the button.                                                                   |
| `typeButton`        | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML type of the button.                                                                |
| `linkBtn`           | `String`                    | `''`      | Optional link for `<a>` style buttons.                                                      |
| `customCardLink`    | `String`                    | `''`      | URL rendered as a link in the card body.                                                    |
| `titleCustomLink`   | `String`                    | `''`      | Anchor text for `customCardLink`.                                                           |
| `tag`               | `String`                    | `'div'`   | Root HTML tag for the card.                                                                  |
| `imgSrcError`       | `String`                    | `''`      | Fallback image source (not currently implemented).                                          |


Notes:

The card fully supports BootstrapVueNext image placement props such as imgTop, imgBottom, imgLeft, imgRight, imgStart, imgEnd.
Conditional rendering is used for headers, footers, and the button slot.
The <custom-button> component is optional and can be toggled with the showBtn prop.
Slot content overrides the default description and can be used for full customization.
Events like @click from the embedded button bubble up through defineEmits.


## Usage

```vue
<CustomCard
  id="product-card"
  title="Product Name"
  sub-title="Limited Offer"
  img-src="/images/product.jpg"
  img-top
  class-card="shadow rounded"
  description-card="This is a special product card with full support for headers, images, and buttons."
  custom-card-link="https://example.com/product"
  title-custom-link="View Details"
  :show-btn="true"
  btn-class="btn btn-success"
  label-btn="Buy Now"
  @click="handleBuy"
/>
