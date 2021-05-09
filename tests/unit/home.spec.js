import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  test("Presencia de texto en etiqueta h1", () => {
    const wrapper = shallowMount(Home);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toContain("Frontendnini");
  })

  test("Presencia de clase titular", () => {
    const wrapper = shallowMount(Home);
    const titular = wrapper.find(".titular");
    expect(titular.exists()).toBe(true);
  })
});

