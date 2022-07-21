// TODO: Find out the difference between mount and shallowMount
import { mount } from "@vue/test-utils";
import BookCard from "../BookCard.vue";
import { assert, describe, test } from "vitest";

describe("Testing UI: BookCard", () => {
  test("Should render the correct values in the right places", () => {
    const wrapper = mount(BookCard, {
      props: {
        book: {
          title: "Matar a un ruiseñor",
          participants: "8 people",
          author: "Leslie y Mar",
        },
      },
    });

    assert.equal(wrapper.element.querySelector('[data-testid="title"]').innerHTML, "Matar a un ruiseñor");
  });
});
