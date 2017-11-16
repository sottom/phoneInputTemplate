# Phone Input Template

This javascript file creates a phone number template for an input box of your choice.  
Users just type their number and it will auto format.

![picture](img/demo.PNG)

# Setting it up

1. Create and navigate to the /js folder in the root of your project  
2. Clone the repo
`git clone https://github.com/sottom/phoneInputTemplate.git`
3. Copy the simple boilerplate code below and paste it into the index.html file at the root of your project
4. Run your project


```
<html>
<head>

  <!-- path to phoneInputTemplate.js -->
  <script src="/js/phoneInputTemplate/phoneInputTemplate.js"></script>

</head>
<body>

  <!-- input box must have an 'id' attribute -->
  <input type="text" id="myInput">

  <script>
    <!-- initialize the phone template by passing in the input box's 'id' name -->
    phoneTemplate("myInput");
  </script>

</body>
</html>
```
