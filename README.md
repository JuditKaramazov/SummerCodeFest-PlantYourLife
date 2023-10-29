# "Summer Code Fest": Plan(t) Your Life

<h1 align="center">
  <img src="https://github.com/JuditKaramazov/SummerCodeFest-PlantYourLife/blob/b82273aab068e0427c8598cbb5ae81213502019f/assets/favicon.png" width="150" height="150" alt="Cactus visual asset">
</h1>

This is a [React Native](https://reactnative.dev/) project working with [`create-expo-app`](https://expo.dev/); that is why I highly encourage you to install `Expo Go` on your mobile device instead of using the browser. This way, you will get an accurate idea of the app that I had in mind while losing the mental sanity that I had left.

## Getting Started

First, clone the repository:

```bash
$ git clone https://github.com/JuditKaramazov/SummerCodeFest-PlantYourLife.git
```

Then, execute the API we'll be using as a json-server:

```bash
$ json-server --watch src/services/server.json --host YOUR_IP --port 3333
```

As a note, we'll incorporate the same information in our ./services/api.ts file, which should look as follows: `http://YOUR_IP:3333`. Then, simply run the development server:

```bash
$ npx expo start
```

And use the QR code in order to access the application on `Expo Go`.

## Introduction

![Alt text](https://github.com/JuditKaramazov/SummerCodeFest-PlantYourLife/blob/b82273aab068e0427c8598cbb5ae81213502019f/assets/Screenshot-01.png)

Although I am fully aware we're already finishing October and soon we will all immerse ourselves in a vibe that only Majora's Mask could replicate, this project is still part of the `Summer Code Fest` (check out my [Spotify Replica](https://github.com/JuditKaramazov/SummerCodeFest-Spotify) or [M. Pomodoro Rajoy Timer](https://github.com/JuditKaramazov/SummerCodeFest-M.Pomodoro-Rajoy) to learn more!), and it aims to practice the basics I couldn't explore during my formation. In this case, and since one of the main subjects affecting my life these last months has been gravitating around the idea of moving out with this teammate of mine (`happy birthday` again!), I decided to create an application focused on the one and only reality we should all embrace and rely on as functional adults: `plants`.

- Just like roommates, they are the perfect allies whenever our scenarios change so drastically - and just like them, they require `time`, `nutrients` and the `proper environment`.
- They can be as small and portable as our dearly beloved `mobile devices`.
- Above all, they force us to stick to a well-organized lifestyle, and nothing workings better for it than `reminders` and `notifications`.

Considering this, and since I wanted to keep learning and practicing `TypeScript` independently of my external circumstances, creating a customized `React Native` application inspired by my new condition, my roommate's passion for plants, and our overall lack of time management felt like the only possible solution. Why `React Native`, though? In all honesty, and due to the convoluted nature of our daily lives, it seemed appropriate to make `Plan(t) Your Life` fit in our pockets; this way, we won't forget to pay attention to what truly matters to us.


![Alt text](https://github.com/JuditKaramazov/SummerCodeFest-PlantYourLife/blob/b82273aab068e0427c8598cbb5ae81213502019f/assets/Screenshot-02.png)

## Features & Style

After clarifying some relevant matters regarding this unstable, chaotic and unpredictable essence of ours, allow me to explain what's the content you'll find by accessing this repository:

- The possibility to `create an account` and keep track of the user's selected options.
- A collection of `several plants` and `environments`, each one with their own particularities and preferences.
- Some not-so-accurate descriptions of... human beings? Plants? Both?
- A customizable alarm allowing the user to `manage the watering time` of their plants by `notifying` them on their phones.
- A `private section` (called `My Plants`) displaying the user's `selected reminders`. If these reminders are not necessary anymore, there's possibility to `delete` them.
- A bunch of bad jokes, puns and tons of courage for the ones struggling with a new reality.

As for the `images` that I decided to incorporate, my intention was to properly capture a cheerful spirit that would not have been possible to recreate without [Freepik](https://www.freepik.com/) amazing artists and contributions. As usual, thank you so much for such incredible art!
On the other hand, I highly encourage you to give [Screely](https://screely.com/) or [Mockuper](https://mockuper.net/generator) a try for your mockups and screenshots.

<p align="center">
  <img src="https://github.com/JuditKaramazov/SummerCodeFest-PlantYourLife/blob/b82273aab068e0427c8598cbb5ae81213502019f/assets/Screenshot-03.png" alt="Screenshot 3">
</p>

Please note that while I'm trying my best to improve and explore different technologies, tools and possibilities, there might be some inconsistencies, bugs and errors that will surely be addressed in the future.
Do not hesitate to let me know about it, though!
