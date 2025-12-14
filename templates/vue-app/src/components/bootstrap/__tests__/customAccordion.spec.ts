import CustomAccordion from '../customAccordion.vue'
import {autoTestComponent} from "../../../../utils/testComponents";
import {shallowMount} from "@vue/test-utils";

describe('CustomAccordion - full auto', () => {
    it('renders correctly with given props & slot', async  () => {
        const wrapper = await autoTestComponent(CustomAccordion, {
            props: {
                id: 'myAccordion',
                title: 'Click Me',
                visible: true,
                customClass: 'my-accordion-item',
                bodyClass: 'p-3 bg-light',
                bodyStyle: { border: '1px solid #ccc' },
                headerTag: 'h3'
            },
            hasSlot: true,
            slots: { default: '<p>This is the accordion content with custom slot.</p>' }
        })
        console.log(wrapper.html())
    })
})