import { ReactNode } from "react";
import { EquationParserError } from "equation-parser";
import { EquationResolveError } from "equation-resolver";

type Combined = EquationParserError | EquationResolveError;

export type ErrorHandler = {
  [Key in Combined["errorType"]]?: (
    node: Extract<Combined, { errorType: Key }>
  ) => ReactNode;
};

export const modifiedErrorHandler: ErrorHandler = {
  // Parser errors
  numberWhitespace: () => "",
  invalidNumber: () => "",
  adjecentOperator: () => "",
  invalidChar: ({ character }) => "",
  invalidUnary: ({ symbol }) => "",
  multipleExpressions: () => "",
  matrixMixedDimension: ({ lengthExpected, lengthReceived }) => "",
  matrixEmpty: () => "",
  vectorEmpty: () => "",
  expectedEnd: () => "",
  expectedSquareBracket: () => "",
  expectedCloseParens: () => "",
  operatorLast: () => "",

  // Resolver errors
  functionUnknown: ({ name }) => "",
  functionArgLength: ({ name, minArgs, maxArgs }) =>
    minArgs === maxArgs ? `` : ``,
  functionNumberOnly: ({ name }) => "",

  functionSqrt1Positive: ({ name }) => "",
  functionRoot1PositiveInteger: ({ name }) => "",
  functionRoot2Positive: ({ name }) => "",
  functionSum1Variable: ({ name, variableType }) => "",
  functionSum2Integer: ({ name }) => "",
  functionSum3Integer: ({ name }) => "",

  variableUnknown: ({ name }) => "",

  plusDifferentUnits: () => "",
  plusMatrixMismatch: ({ aDimensions, bDimensions }) => "",
  plusminusUnhandled: () => "",
  scalarProductUnbalanced: ({ aLength, bLength }) => "",
  vectorProduct3VectorOnly: () => "",
  matrixProductMatrixMismatch: ({ aDimensions, bDimensions }) => "",
  divideNotZero: () => "",
  divideMatrixMatrix: () => "",
  powerUnitlessNumberExponent: () => "",

  operatorInvalidArguments: ({ operator, a, b }) => "",

  noComparison: () => "",

  matrixDifferentUnits: () => "",
  matrixNoNesting: () => "",

  invalidEquation: () => "",

  placeholder: () => "",

  invalidUnit: () => "",
};
