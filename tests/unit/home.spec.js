import { shallowMount } from "@vue/test-utils";
//import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";


describe("Home.vue", () => {
  // it("renders props.msg when passed", () => {
  //   const msg = "new message";
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg },
  //   });
  //   expect(wrapper.text()).toMatch(msg);
  // });

  test("Presencia de clase descripcionCard", () => {
    const wrapper = shallowMount(Home);
    const clase = wrapper.find("#descripcionCard");
    //console.log(clase);
    expect(clase.exists()).toBe(false);
  })

  test("Presencia de titulo", () => {
    const wrapper = shallowMount(Home);
    const clase = wrapper.find("#descripcionCard");
    //console.log(clase);
    expect(clase.exists()).toBe(false);
  })

});

