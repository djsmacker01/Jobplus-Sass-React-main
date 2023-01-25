"use strict";
import Express from "express";
import bodyParser from "body-parser"
// var express = require("");


var app = Express();

//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/node", function (req, res) {
  res.send("This node js");
});

app.get("/maths", function (req, res) {
  // res.json(req.body);
  const a = req.body.a;
  const b = req.body.b;
  const mathFunction = req.body.mathFunction;
 let result = "unknow math function"

  if(mathFunction === "add"){
     result = a + b
  }
  else if(mathFunction === "sub")
  { 
   result = a - b
  }
  else{
    res.send(`Nop try add or sub`)
  }

  // const result = a - b;
  res.json({ result });
});

app.get("/add/:one/:two", function (req, res) {
  const one = parseFloat(req.params.one);

  const two = parseFloat(req.params.two);

  if (isNaN(one) || isNaN(two)) {
    res.send(`  Invalid number`);
  } else {
    const result = one + two;
    res.json({
      a: one,
      b: two,
      result,
      prettyResult: `The result is  ${one} + ${two} = ${result}`,
    });
  }
  // res.send(`The result is  ${one} + ${two} = ${one + two}` )

  // res.send("This node js");
});

/* istanbul ignore next */
// if (!module.parent) {

// }
app.listen(3000);
console.log("Express started on port 3000");
