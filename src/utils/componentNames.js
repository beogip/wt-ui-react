// flow
export default function mapDisplayNames(ParentComponent) {
  const Component = ParentComponent;
  const keys = Object.keys(Component);
  if (!keys.length) return;
  keys.filter(key => Component[key] instanceof Function).forEach((key) => {
    const parentName = Component.displayName || Component.name;
    Component[key].displayName = `${parentName}.${Component[key].name.slice(2)}`;
    mapDisplayNames(Component[key]);
  });
}
