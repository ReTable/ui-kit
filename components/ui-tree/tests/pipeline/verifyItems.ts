import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import { HiddenBranch, HiddenLeaf, Kind, Pipeline, VisibleBranch, VisibleLeaf } from './types';

function verifyVisibleLeaf(root: HTMLElement, leaf: VisibleLeaf) {
  const element = screen.queryByTestId(leaf.testId);

  expect(element, `Leaf with id ${leaf.id} should be rendered`).not.toBeNull();

  if (element == null) {
    return;
  }

  expect(root, `Leaf with id ${leaf.id} should be inside tree`).toContainElement(element);

  expect(
    element,
    `Leaf with id ${leaf.id} should have id attribute with ${leaf.id} value`,
  ).toHaveAttribute('data-id', leaf.id.toString());
  expect(
    element,
    `Leaf with id ${leaf.id} should have name attribute with ${leaf.name} value`,
  ).toHaveAttribute('data-name', leaf.name);

  expect(
    element,
    `Leaf with id ${leaf.id} should have level attribute with ${leaf.level} value`,
  ).toHaveAttribute('data-level', leaf.level.toString());
}

function verifyHiddenLeaf(leaf: HiddenLeaf) {
  const element = screen.queryByTestId(leaf.testId);

  expect(element, `Leaf with id ${leaf.id} shouldn't be rendered`).toBeNull();
}

function verifyVisibleBranch(root: HTMLElement, branch: VisibleBranch) {
  const element = screen.queryByTestId(branch.testId);

  expect(element, `Branch with id ${branch.id} should be rendered`).not.toBeNull();

  if (element == null) {
    return;
  }

  expect(root, `Branch with id ${branch.id} should be inside tree`).toContainElement(element);

  expect(
    element,
    `Branch with id ${branch.id} should have id attribute with ${branch.id} value`,
  ).toHaveAttribute('data-id', branch.id.toString());
  expect(
    element,
    `Branch with id ${branch.id} should have name attribute with ${branch.name} value`,
  ).toHaveAttribute('data-name', branch.name);

  expect(
    element,
    `Branch with id ${branch.id} should have is-expanded attribute with ${branch.isExpanded} value`,
  ).toHaveAttribute('data-is-expanded', branch.isExpanded.toString());
  expect(
    element,
    `Branch with id ${branch.id} should have level attribute with ${branch.level} value`,
  ).toHaveAttribute('data-level', branch.level.toString());
}

function verifyHiddenBranch(branch: HiddenBranch) {
  const element = screen.queryByTestId(branch.testId);

  expect(element, `Branch with id ${branch.id} shouldn't be rendered`).toBeNull();
}

export function verifyItems(root: HTMLElement, pipeline: Pipeline): void {
  for (const item of pipeline) {
    switch (item.kind) {
      case Kind.HiddenLeaf: {
        verifyHiddenLeaf(item);

        break;
      }
      case Kind.VisibleLeaf: {
        verifyVisibleLeaf(root, item);

        break;
      }
      case Kind.HiddenBranch: {
        verifyHiddenBranch(item);

        break;
      }
      case Kind.VisibleBranch: {
        verifyVisibleBranch(root, item);

        break;
      }
    }
  }
}
