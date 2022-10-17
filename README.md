# Creating a global alert using context in react native

Speak dev! In this class we will use the react context, which is normally only used to manage global state data, to create a visual component that will also be available for the entire application.

In this way, we are going to build an alert that can be called from any point in the code, without having to import the alert component inside each screen, in addition to managing the visualization state individually.

It is important to point out that you need to be very careful in this type of approach, as contexts usually cause the entire tree of internal components to be re-rendered for every change of state within them. That's why it's important to use this type of approach sparingly, understanding exactly the associated trade-offs and evaluating whether or not it's worth going with this implementation.

At the end of this class you will have a React Native base project with navigation between screens configured, in addition to the global alert ready to be used in your next project.

## How to run this project

Clone this repo

```bash
  https://github.com/Alex-dll/React-Native-Global-Modal
```

Go to project directory

```bash
  cd React-Native-Global-Modal
```

Install the dependencies

```bash
  yarn | yarn install
```

```bash
  npx pod-install
```

Start the aplication

```bash
 expo start
```

## Used Tools 🧰

- [x] React-Native
- [x] Typescript
---

Tanks [Felipe Maffezzoli](https://github.com/femaffezzolli) for the amazing content

🚀Foguete não tem ré
