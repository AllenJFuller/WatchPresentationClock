# WatchPresentationClock
I wanted to play with the new-ish Fitbit SDK after getting an Ionic so I made this presentation timer.  This was coded in Fitbit Studio (https://studio.fitbit.com/) with help from the following sources.

Fitbit SDK Forum: https://community.fitbit.com/t5/SDK-Development/bd-p/sdk
Fitbit Developer Guide: https://dev.fitbit.com/build/guides/

I would like to thank the community for posting their questions so I could learn from them.

# How It Works
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

# To-do:
Full disclosure I am not sure if/when I will get to implementing these changes.  That said, when I have time I hope to make these improvements.
1. Add tumblers to set the over all time and the yellow and red times (to replace the current settings screen).
2. Reformat to work with Ionic (the settings screen does not fit currently).

# Button Icons
Button icons are from the Fitbit github repository located here: https://github.com/Fitbit/sdk-design-assets

I do not own these icons and am using under the license listed there. The license for the poroject as a whole does not apply to the button icons.
