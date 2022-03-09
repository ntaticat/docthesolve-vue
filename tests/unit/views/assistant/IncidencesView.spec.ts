import IncidencesViewVue from '@/views/assistant/IncidencesView.vue';
import { shallowMount } from '@vue/test-utils';
import WrapperLike from '@vue/test-utils/dist/interfaces/wrapperLike';

describe('IncidencesView Component', () => {

  let wrapper: WrapperLike;

  beforeAll(() => {
    wrapper = shallowMount(IncidencesViewVue);
  });

  test('h1 should contain certain text', () => {

    const h1Tag = wrapper.find("h1");

    expect(h1Tag.exists()).toBeTruthy();

    const h1Value = h1Tag.text();

    expect(h1Value).toBe("Tabla de Incidencias | Asistente Técnico");
  });
});