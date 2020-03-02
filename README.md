[![License](https://img.shields.io/npm/l/react-questions.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![Version](https://img.shields.io/npm/v/react-questions.svg?style=flat-square)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-questions.svg?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/react-questions.svg?style=flat-square)

![](logo.png) 

# ❓ react-questions ❓

The perfect package for any kind of survey, questions card etc.
It will wrap your components with a nicely animated transition and gives you the possibility to customize your content freely.

## Getting Started 🏂
### Install
```
  npm i react-questions
```

### Import it 🖥️
```
import Questions from 'react-questions'
```

### Wrap your custom card-component with it 🔑

```
import Questions from 'react-questions'

...

const finish = () => {
  /* called when finished */
}

const questions = [
  {id: 1, question: "What's your name?"},
  {id: 2, question: "How old are you?"},
]

return (
  <Questions questions={questions} animation="blur-fade">
    {(submit, currentQuestion) => (
      <div className="your-custom-component" onClick={submit}>
        <button onClick={submit}>Submit</button>
      </div>
    )}
  </Questions>
)

### Note: 
Currently the `Questions`-component is not collecting the answers for you. THe idea is that you collect it by yourself with hook into the submit function and collect your answers by yourself.

```

### Supported properties
```
  questions: any[];
  onFinish: () => void;
  children: (nextCard: any, currentIndex: number) => ReactElement;
  animation?: "blur-fade" | "grow-fade";
```

#### questions: Element (required)
A list of your questions. The shape of the elements is up to you. It just needs to be at least one element. The object will be passed to the render function as `currentQuestion`

#### onFinish(): void (optional)
This function will be called when the set of questions is done.

#### children(nextCard: any, currentIndex: number): ReactElement
The function that the component will wrap. It will pass on the `nextCard`. Which is one of the objects provided by the questions array.

#### animation: "blur-fade" | "grow-fade" (optional)
The type of animations. Currently two different types provided. 
Feel free to play with them 


