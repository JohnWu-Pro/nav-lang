# window.navigator.language returns incorrect value when running as installed PWA on Andriod

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=1348955

Chrome Version       : 103.0.5060.129
URLs (if applicable) : https://johnwu-pro.github.io/nav-lang/index.html
Other browsers tested:
     Safari: N/A
    Firefox: OK
       Edge: N/A
Operating System     : Andriod 10

What steps will reproduce the problem?
(1) Create an install-able PWA by following the instructions (and initial sources) at https://web.dev/codelab-make-installable/.
(2) Insert the following code snippet into `index.html`, right before the `</body>`
```
<script>
document.body.appendChild(document.createElement('div')).innerHTML = `
  <div>window.navigator.language: ${window.navigator.language}</div>
`
</script>
```
(3) Deploy the PWA to a site, so that it's accessible via HTTPS.
(4) Install the PWA to an Andriod phone.
(5) Set the Andriod system primary language to en-CA (a value other than en-US or en-GB).
(6) Ensure the Andriod Chrome's selected language is the Current Device Language.
(7) Launch the installed PWA, check the value of window.navigator.language.
