const root = document.getElementById('app') as HTMLElement;
interface State {
  // text: string;
  id: string,
  title: string
  description: string
  comments?: string[]
}

type Property = keyof State;

export { root };
export type { State, Property };
