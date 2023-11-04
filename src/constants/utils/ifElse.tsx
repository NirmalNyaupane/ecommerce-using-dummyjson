export const ifElse = <T, K>(codition: boolean, ifTrue: T, ifFalse: K) =>
  codition ? ifTrue : ifFalse;
