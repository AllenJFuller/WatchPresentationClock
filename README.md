# WatchPresentationClock
I wanted to play with the new-ish Fitbit SDK after getting a Versa, so I made this presentation timer.  This was coded in Fitbit Studio (https://studio.fitbit.com/) with help from the following sources.

Fitbit SDK Forum: https://community.fitbit.com/t5/SDK-Development/bd-p/sdk
Fitbit Developer Guide: https://dev.fitbit.com/build/guides/

I would like to thank the community for posting their questions, so I could learn from them.  There are parts of the code for this app that were taken from the Fitbit developer guide and forum then modified for use in my app, I do not claim ownership of that code, which is why I wanted to link to my primary resources up front.

## What is it?
I love presentation clocks on my phone.  If you have never used one the main point is to provide feedback at a glance while practicing or delivering a presentation.  My number one use case is taking a break, to play games or read, I can see instantly if I am good on time or if I need to wrap up what I am doing.  Obviously, the main use is for presentations and I have used tools like this to help keep me on track when I am practicing or giving presentations at work or school, or when I am running discussions.  When I wanted to play with Fitbit studio this was the idea that came to mind. 

## How It Works
This app uses the clock API to decrease the timer by 1 each second.  The timer variable is converted to hours, minutes and seconds and displayed.  The background color starts green and moves to peach at less than 50% time remaining, then to red at less than 25% remaining.  When the timer reaches 0 the string "Finished!" displays and the watch vibrates.  Pushing either the reset button or the start/stop button will reset the timer.

The bottom right button is the start/stop button.

The upper right button resets the time to the current length.

The upper left button lets the user set the timers to one of six values:
- 10 min
- 15 min
- 30 min
- 60 min
- 1.5 hrs
- 2 hrs

The app does not run if the screen turns off, so the app keeps the watch on as long as it is running.

NOTE: This app does drain the battery because the screen must remain on at all times while running.  If you need a simple timer I recommend the built-in timer. This app is great when you want to glance at the time to see where you stand (using the colors).

## To-do:
Full disclosure, I am not sure if/when I will get to implementing these changes.  This app was made for fun, to learn Fitbit Studio, and play with JavaScript.  That said, when I have time I hope to make these improvements.

1. Add tumblers to set the overall time and the yellow and red times (to replace the current settings screen).
2. Reformat to work with Ionic (the settings screen does not fit currently).
3. Make a real app icon.
4. Add single vibrations at color changes.
5. Implement the storage option to save the last selected timer length on relaunch (currently defaults to 10 minutes on each launch).

## App Icon
If it is not obvious I made the app icon in GIMP.  The icons are in the resources folder called "icon.png" and is included in the license for the app but I recommend not using it.

## Button Icons
Button icons are from the Fitbit GitHub repository located here: https://github.com/Fitbit/sdk-design-assets

I do not own these icons and am using under the license listed there. The license for the project as a whole does not apply to the button icons. 
