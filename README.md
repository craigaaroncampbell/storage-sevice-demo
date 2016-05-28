This is a demo to show that services are persistent (data stored on them persists even when their use in the view is no longer being rendered) whereas controllers are not persistent (data stored on them disappears when they cease to be rendered).

**How the Demo Works**
 The app has a controller with a counter ("controller counter ") and a service with a different counter ("service counter"). There is a third counter  ("other counter") that is used to trigger when the view is and is not rendered (render the view with the counters when the "other counter" is less than 2. Then stop rendering the view when "other counter" is set to 2. Finally re-render the view when the "other counter" hits 3 and above.)

The "service counter" , "controller counter", and "other counter" each increment when you click buttons for each, but the view ceases to be rendered when "other counter" hits 2 When the view stops being rendered and then is brought back later (when "other counter" hits 3), the "service counter" stays where it originally was before the view was dropped whereas the "controller counter" starts back over at 0.


**Setup**
1. ```npm i```

2. ```node server```

3. Navigate to `localhost:5000` in your browser.
