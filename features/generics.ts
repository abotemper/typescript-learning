class ArrayOfNumbers {
  constructor(public collection: number[]){}

get(index: number): number {
  return this.collection[index];
}
}

class ArrayStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

