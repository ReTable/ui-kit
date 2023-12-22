import * as t from '@babel/types';

export function buildDisplayName(
  member: string,
  scope: string,
  name: string,
): t.ExpressionStatement {
  return t.expressionStatement(
    t.assignmentExpression(
      '=',
      t.memberExpression(t.identifier(member), t.identifier('displayName')),
      t.stringLiteral(`${scope}(${name})`),
    ),
  );
}
