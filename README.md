# EA_Min1
---

### Screenshot
<img src="https://user-images.githubusercontent.com/7610219/68511140-8ee4a600-0275-11ea-9bd8-d5b3d5029f79.png" width="150"> 

### Table of Contents

- [Models](#models)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

## Models

##### Student schema

```typescript
const StudentSchema: Schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phones: { type: Array, required: true },
    studies: { type: Array, required: true }
});
```

##### Subject schema

```typescript
const SubjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});
```

##### Routes

| Model | Type | Routes | Description |
| :---:| :---: | --- | --- |
| STUDENT | GET | /student/telematics | Get telematics students |
|  | GET | /students/systems | Get systems in telecomunications students |
|  | GET | /students/aeros | Get aerospacial students |
| SUBJECT | GET | /subjects/ | Get all subjects |
|  | GET | /subjects/**:name** | Get students studying a subject |
#### Technologies

- node.js
- express
- mongoose
- angular

## How To Use

#### Installation

Libraries:

```
npm i
```

Run node project:

```
nodemon index.js
```
>(1) Keep it running on a separate cmd while you are working on your project in order to see the changes   

Install angular:

```
npm install -g @angular/cli
npm install --save-dev @angular-devkit/build-angular
```

>The second command is used in order to avoid future errors

Run mongoDB:

```
mongod
```

>(2) Keep it running on a separate cmd while you are working on your project in order to see the changes  

Run the project on local server:

```
ng serve --open
```
>CAUTION!: You have to be on .\frontend folder in order to run this line 

>(3) Keep it running on a separate cmd while you are working on your project in order to see the changes   

## License

MIT License

Copyright (c) 2020 Izan Pérez Cosano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
npm install
npm install typescript -s
npm run tsc -- --init
npm install express -s
npm install @types/express -s
npm install mongodb
npm install mongoose
```
