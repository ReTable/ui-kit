export default {
  template(variables, { tpl }) {
    const name = `Ui${variables.componentName.slice(3)}Icon`;

    variables.componentName = name;
    variables.exports[0].declarations[0].init.arguments[0].name = name;

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
