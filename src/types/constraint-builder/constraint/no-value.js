import { Constraint } from "./base";

export class NoValueConstraintBuilder extends Constraint {
  constructor(opts = {}) {
    super(opts);
  }

  build() {
    const { errFn, constraintFn, constraintName } = this;

    this.onConstraintAdded({ name: constraintName });

    const newBase = constraintFn(errFn);

    return newBase;
  }
}
