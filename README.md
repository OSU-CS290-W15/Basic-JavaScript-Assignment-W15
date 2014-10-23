Basic JavaScript Assignment
===========================

This assignment will cover fundamental JavaScript topics outside the context of web development. Core concepts like objects, variables and functions will be covered. Fully automated tests will be provided for all assignment components.

~~**As of right now the assignment is not complete, there will be additional files added that you need to complete. However, the tests and code for the variables.js and simpleMath.js are stable so you can get to work on them immediately.**~~

**Extra work to get an A is not required for this assignment, simply passing all tests will get you an A**

Instructions
------------

- At your discretion, fork or clone this repository.
- Create a new directory called assignment3.
- Copy the contents of this repository into that directory.
  - The directory structure should look like this:
    - assignment3
      - qunit_runner.html
      - qunit
      - src
      - tests
- **You are only allowed to modify the files in the src directory.**
  - The comments in the files in the src directory describe the intended behavior of the functions that you need to fill in. Please ask on Piazza if you are confused about the intended functionality of any function.
  - Within those files, your code should go between the `//your code here` comments.
  - You should replace `return undefined;` with appropriate return statements.
- To test your code open the `qunit_runner.html` web page locally.
  - Given the nature of automated tests, it is easy to see what the expected values are and simply hard code those returns. If you do this for any portion of the assignment, you will get a 0 for the whole assignment. (For example, variableModification should work for any value, not just 42, but we are only testing the value 42. If you hardcode the values `47`, `'42'` and `'42foo'` that is a violation of this rule. )

**CLI Testing (Advanced)**

To run qunit tests via the command line:

**Method 1:**

 first install [Node.js](http://nodejs.org), then install Grunt by running `npm install -g grunt-cli`. Then install Node.js dependencies by running `npm install`, and finally run `grunt test`.

Note: If you forked this repository before Thu Oct 23, you have to manually add `package.json` and `Gruntfile.js` to your assignment3 folder (or use git!)

**Method 2:**

Install PhantomJS binary: http://phantomjs.org/download.html

Run the following command from ROOT directory of repository:

`phantomjs run_qunit.js assignment3/qunit_runner.html | grep assertions`

Example output: 47 assertions of 47 passed, 0 failed.
