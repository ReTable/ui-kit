function normalizeName(originalName) {
  if (originalName.endsWith('small')) {
    const name = originalName.slice(3, -5);

    return `Ui${name}SIcon`;
  }

  if (originalName.endsWith('medium')) {
    const name = originalName.slice(3, -6);

    return `Ui${name}MIconInner`;
  }

  const name = originalName.slice(3, -5);

  return `Ui${name}IconLInner`;
}

export default {
  template(variables, { tpl }) {
    const name = normalizeName(variables.componentName);

    variables.componentName = name;
    variables.exports[0].specifiers[0].local.name = name;

    return tpl`
      ${variables.imports};

      ${variables.interfaces};

      const ${variables.componentName} = (${variables.props}) => (
        ${variables.jsx}
      );

      ${variables.exports};
    `;
  },
};
