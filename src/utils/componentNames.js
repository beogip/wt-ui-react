// flow
export default function mapDisplayNames(ParentComponent) {
  const Component = ParentComponent;
  Object.keys(Component).forEach((key) => {
    Component[key].displayName = `${Component.name}.${Component[key].name.slice(2)}`;
  });
}
