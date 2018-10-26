# Dj React Component
Dj React Component is a very basic component with two main parts. A visual
list of songs with title, artist, etc. and a visual music player with all the buttons
you'd normally find in a music player such as play, pause, forward, etc.

It's all made with [react](https://reactjs.org) and [ant.design](https://ant.design)

## Try
Go to [https://toca87.github.io/dj/](https://toca87.github.io/dj/)

## Use
Run:

    yarn install

*Go [here]() for instructions on installing yarn*

    yarn run start

It should launch a website in your [localhost:3000](http://localhost:3000) with the dj.

Go to the [localhost](http://localhost:3000) and type something in Search to get a List 
of Songs and to enable the Player.

This is just a visual stub app and the events are all defined in the container 
Dj (Dj.js) to print in log.debug a message for each event. Customize the events for
your own purpose. Check the src/.

To see debug messages (Chrome):

    Inspect(Ctrl+Shift+I) ->  Console -> Dropdown right to Filter input box -> Check: Verbose

You can also see the debug messages in the [github pages link](https://toca87.github.io/dj/) 
in the Try section.
