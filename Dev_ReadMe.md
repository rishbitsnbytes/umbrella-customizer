_This file is notes for developers and reviewers!_

# This app is written keeping following things in mind:-

- App-Features
- Edge Cases
- Code-Extensibility
- Code-Readability and Reusability

## 1. App-Features

App is full responsive.
App has al the thing for good UX, every little action and process is reflected in app UI like Uploading, Validating, Processing, Progress etc. which enhances the UX multifold, that's what I use in my most codes. Attention to detail oriented UI-UX.

## 2. Edge Cases

There were few edge cases I could think of and experience while using the app handled and mentioned in code-comments.

> - File Size Validation.
> - File Type Validation - this has been handled in 2 ways - native html 'accept' attribute but it has a flaw in which user can change this option in their file explorer and upload file of any other type, so this has been handled through further checks in validation js file.
> - Appropriate error feedback to user when Type or Size or both validation fails.
> - Multiple-upload Prevention
> - Unnecessary clicks prevention when app is under processing state by locking the buttons.
> - Removing of logo, re-upload of same file, reclicking on already selected color etc.

## 3. Code-Extensibility

I have not used any statice variables anywhere. Everywhere it's some data structure (arrays and objects).
PRIMARILY, there is data folder in which there is a JSON file which contains colorOptionsData, which has color and umbrella image details.
If you want to add any new color, just add new object is same schema, and app will have new option, not other change needed in code.

Also, I have not used backend endpoint to manage the upload functionlity, since the app's use case is only for preview, not for saving. But in case if it's required then it can easily be extended with modifying few function calls in main 'index.js' file.
Note :-  
_For new Umbrella Image just save the new images in 'assset/umbrella-images/' folder with file name 'umbrella-${color-name}'_
_Primary Color is the main color which is umbrella color, secondary color is lighter than primary for button borders and tertairy is even lighter for whole app body background._

## 4. Code-Readability, Reusability and Modification.

I know a lot of time and energy gets wasted if there is no good good readability and also reusability.
That's why, primarily, I have written the app in functional Programming way, so many functions can be reused, extended and easily understood just by their names.
I tried to write the code in a functional way and divided all the operations into tiny chunks and extrated them into generalised function.Thus enhances the reusability of code and readability and modification.
Also, left comments where requires, sometimes been very generous to leave very long-comments which many may not prefer, but it saves a lot of time just to read the comment text instead of code to understand how an edge case has been handled.

Thanks for reading!
I am available to connect anytime.
