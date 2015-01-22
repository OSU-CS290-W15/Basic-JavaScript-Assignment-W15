Basic JavaScript Assignment
===========================

This part of the assignment will cover fundamental JavaScript topics outside the context of web development. Fully automated tests will be provided for all assignment components. These are a tool to help you assess if your code is working as intended. Passing the tests does not guarantee a good grade nor does failing them guarantee a poor grade. The grade will be based on the extent to which you meet the requirements for code in this class and the extent to which the requirements in the source files are met.

Work Log
--------
In order to be eligible to receive an A you must submit a work log. It will not contribute points directly to the assignment, but without it the maximum grade you will be eligible for is an 89%. The purpose is to allow me to tune the difficulty of assignments to ensure that you are getting the amount of practice needed without spending too much time on any given topic.

The format is as follows:

```
Start: Wed, 7 Jan 2015 21:42:26 -0800
End: Wed, 7 Jan 2015 22:42:26 -0800
Tasks: During this period I drew a diagram of the classes I will be using to implement the message passing portion of the assignment.

Start: Fri, 9 Jan 2015 18:00:00 -0800
End: Fri, 9 Jan 2015 20:42:26 -0800
Tasks: During this period I debugged for 1 hour to find a type and implement the send function of the cleint.
```

You can get most of this information from the git log if you run:
`git log --pretty=format:"Start: %nEnd: %ad %nTasks: %s" --date=rfc`
You just need to fill in the Start: time. Use the same date format. I would suggest copying and pasting the End time and just editing the time (or day if you went through midnight in a work session).

Have one entry per work session.

Put this log in log.txt.

Instructions
------------
- Create a new repository called cs290-assignment3 at the location you specified in week 1.
- Clone this repository and copy all of the contents to that repository
  - The directory structure should look like this:
    - cs290-assignment3
      - log.txt
      - qunit_runner.html
      - qunit
      - src
      - tests
- **You are only allowed to modify the files in the src directory.**
  - There are some additional files, those are just a hook for us to eventually support a better testing system.
  - The comments in the files in the src directory describe the intended behavior of the functions that you need to fill in. Please ask on the discussion boards if you are confused about the intended functionality of any function.
  - Within those files, your code should go between the `//your code here` comments.
  - You should replace `return undefined;` with appropriate return statements.
- Add **OSU-CS290-Tester** as a collaborator. This will be an account that myself and the TAs share to access your repos.
- To test your code open the `qunit_runner.html` web page locally. Along with the red errors check for statements saying something like `Expected 4 assertions, but 2 were run`. This means that the test had to abort early due to a error it could not recover from. That means there are two additional tests that are not even getting run.
  - Given the nature of automated tests, it is easy to see what the expected values are and simply hard code those returns. If you do this for any portion of the assignment, you will get a 0 for the whole assignment. (For example, variableModification should work for any value, not just 42, but we are only testing the value 42. If you hardcode the values `47`, `'42'` and `'42foo'` that is a violation of this rule. )
