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

What steps will reproduce the problem?
1. Install this triage webapp to an Andriod phone.
2. Set the Andriod system primary language to en-CA (OR, any value other than en-US or en-GB).
3. Ensure the Andriod Chrome's selected language is the Current Device Language.
4. Launch the installed triage webapp, check the value of window.navigator.language.
