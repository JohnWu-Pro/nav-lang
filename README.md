# window.navigator.language returns incorrect value when running as installed PWA on Andriod

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=1348955

```
Chrome Version       : 103.0.5060.129
URLs (if applicable) : https://johnwu-pro.github.io/nav-lang/index.html
Other browsers tested:
     Safari: N/A
    Firefox: OK
       Edge: N/A
Operating System     : Andriod 10
```

### What is the expected result?
The expected value is `en-CA`.

### What happens instead?
The actual value is `en-GB`, which is not in my Andriod OS selected languages, nor my Andriod Chrome selected language.

When loading the page as a normal web page, window.navigator.language returns correct value (e.g. `en-CA`). The issue only exists when loading the web app/page as an intalled PWA (i.e. webapp in standalone mode).

### What steps will reproduce the problem?
1. Set the Andriod system primary language to `en-CA` (OR, any value other than `en-US` or `en-GB`).
1. Ensure the Andriod Chrome's selected language is the Current Device Language.
1. Install this triage webapp to an Andriod phone.
1. Launch the installed triage webapp, check the value of window.navigator.language.
