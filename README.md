# @akarui/Structures

A collection of data structures implemented in TypeScript that ease the storage and manipulation of data.

## Installation

```bash
npm install @akarui/structures
```

## Usage

```typescript
//Typescript
import { Group } from '@akarui/structures';

const group = new Group<string,string>(10); // Creates a group with a capacity of 10

group.set("Hello", "World"); // Sets the value of "Hello" to "World"
group.get("Hello"); // Returns "World"

group.has("Hello"); // Returns true

group.delete("Hello"); // Deletes the value of "Hello"
group.has("Hello"); // Returns false

```

```javascript
//Javascript cjs

const { Group } = require('@akarui/structures');

const group = new Group(10); // Creates a group with a capacity of 10

group.set("Hello", "World"); // Sets the value of "Hello" to "World"
group.get("Hello"); // Returns "World"

group.has("Hello"); // Returns true

group.delete("Hello"); // Deletes the value of "Hello"
group.has("Hello"); // Returns false
```

## Documentation

[Documentation](https://akaruidevelopment.github.io/structures/)

## License

[MIT](./LICENSE)
