# @aoijs/aoi.structures

A collection of data structures implemented in TypeScript that ease the storage and manipulation of data.

## Installation

```bash
npm install @aoijs/aoi.structures
```

## Usage

```typescript
//Typescript
import { Group } from '@aoijs/aoi.structures';

const group = new Group<string,string>(10); // Creates a group with a capacity of 10

group.set("Hello", "World"); // Sets the value of "Hello" to "World"
group.get("Hello"); // Returns "World"

group.has("Hello"); // Returns true

group.delete("Hello"); // Deletes the value of "Hello"
group.has("Hello"); // Returns false

```

```javascript
//Javascript cjs

const { Group } = require('@aoijs/aoi.structures');

const group = new Group(10); // Creates a group with a capacity of 10

group.set("Hello", "World"); // Sets the value of "Hello" to "World"
group.get("Hello"); // Returns "World"

group.has("Hello"); // Returns true

group.delete("Hello"); // Deletes the value of "Hello"
group.has("Hello"); // Returns false
```

## Documentation

[Documentation](https://aoijs.github.io/aoi.structures/)

## License

[MIT](./LICENSE)
