# 100 Days Of Code - Log

<!-- toc -->

- [Day 00: January 03, 2017](#day-00-january-03-2017)
  * [Today's Progress](#todays-progress)
  * [Thoughts](#thoughts)
- [Day 01: January 04, 2017](#day-01-january-04-2017)
  * [Today's Progress](#todays-progress-1)
  * [Thoughts](#thoughts-1)
  * [Link(s) to work](#links-to-work)
- [Day 02: January 05, 2017](#day-02-january-05-2017)
  * [Today's Progress](#todays-progress-2)
  * [Thoughts](#thoughts-2)
- [Day 03: January 06, 2017](#day-03-january-06-2017)
  * [Today's Progress](#todays-progress-3)
  * [Thoughts](#thoughts-3)
- [Day 04: January 07, 2017](#day-04-january-07-2017)
  * [Today's Progress](#todays-progress-4)
  * [Thoughts](#thoughts-4)
- [Day 05: January 08, 2017](#day-05-january-08-2017)
  * [Today's Progress](#todays-progress-5)
  * [Thoughts](#thoughts-5)
- [Day 06: January 09, 2017](#day-06-january-09-2017)
  * [Today's Progress](#todays-progress-6)
  * [Thoughts](#thoughts-6)
  * [Link(s) to work](#links-to-work-1)
- [Day 07: January 10, 2017](#day-07-january-10-2017)
  * [Today's Progress](#todays-progress-7)
  * [Thoughts](#thoughts-7)
- [Day 08: January 11, 2017](#day-08-january-11-2017)
  * [Today's Progress](#todays-progress-8)
  * [Thoughts](#thoughts-8)
- [Day 09: January 12, 2017](#day-09-january-12-2017)
  * [Today's Progress](#todays-progress-9)
  * [Thoughts](#thoughts-9)
  * [Problems](#problems)
- [Day 10: January 13, 2017](#day-10-january-13-2017)
  * [Today's Progress](#todays-progress-10)
  * [Thoughts](#thoughts-10)
- [Day 11: January 14, 2017](#day-11-january-14-2017)
  * [Today's Progress](#todays-progress-11)
  * [Thoughts](#thoughts-11)
- [Day 12: January 15, 2017](#day-12-january-15-2017)
  * [Today's Progress](#todays-progress-12)
  * [Thoughts](#thoughts-12)
  * [Link(s) to work](#links-to-work-2)
- [Day 13: January 16, 2017](#day-13-january-16-2017)
  * [Today's Progress](#todays-progress-13)
  * [Thoughts](#thoughts-13)
- [Day 14: January 17, 2017](#day-14-january-17-2017)
  * [Today's Progress](#todays-progress-14)
  * [Thoughts](#thoughts-14)
  * [Link(s) to work](#links-to-work-3)

<!-- tocstop -->

## Day 00: January 03, 2017

### Today's Progress

Start coding with codefreecamp, reviewed Bootstrap lib.

### Thoughts

I really struggled with layout, I need code more.


## Day 01: January 04, 2017

### Today's Progress

Finished the first project with Bootstrap on codefreecamp, and resolved two simple javascript algorithm problems.

### Thoughts

Bootstrap has done something I don't know. So if a class I'll use from Bootstrap, I'd look at how it implements.

### Link(s) to work

1. [Tribute](http://codepen.io/xandeer/pen/bgGgBm)


## Day 02: January 05, 2017

### Today's Progress

Resolved 5 simple javascript algorithm problems. At the same time, I tried to use `mocha` & `chai` to test my scripts.

### Thoughts

That 5 problems give me a chance to review the methods of `String` & `Array`.


## Day 03: January 06, 2017

### Today's Progress

1. Resolved 3 simple JavaScript algorithm problems.
2. Build a Echarts demo.
3. Init portfolio project.

### Thoughts

1. Meet some puzzles for testing with deep Array.
2. When I want to use webpack to start a bootstrap project, I encountered several troubles, and then I found there's a project [bootstrap-loader](https://github.com/shakacode/bootstrap-loader), that really helped me.


## Day 04: January 07, 2017

### Today's Progress

1. Resolved 3 algorithm problems.
2. Added portfolio's main framework.

### Thoughts

1. Reviewed Array's prototype methods: `filter`, `every`, `sort`.
2. I paid much time for layout, I think CSS is more difficult than JavaScript. So I need to do more practice on CSS.


## Day 05: January 08, 2017

### Today's Progress

1. Resolved 3 algorithm problems.

### Thoughts

1. When we want to diff two arrays, we could get their sum and intersection first, then remove intersection's element from sum, the rest is what we want.


## Day 06: January 09, 2017

### Today's Progress

1. Convert a given number into a Roman number.
2. Finished the portfolio's layout.
3. Optimized the style file, tried to use BEM like.

### Thoughts

1. I took more than 1h to think it out. The most import is that the relation of the input arguments an d the output.
2. Know why you're writing the code you're writing, and how it works. At begin, I used `.container-fluid`, but I didn't know the difference from `.container`, so that made me in trunk.

### Link(s) to work

1. [Convert to Roman](/basic-algorithm/convert-to-roman.js)


## Day 07: January 10, 2017

### Today's Progress

1. Resolved 3 algorithm problems.
2. Started FlyBird.

### Thoughts

1. `string` can't be changed, so all the change on it will return a new `string`.


## Day 08: January 11, 2017

### Today's Progress

1. Resolved 3 algorithm problems.
2. Finished the simple functions of FlappyBird.

### Thoughts

1. When I use `new Date() - 0` in `window.requestAnimationFrame`'s renderLoop, if I leave the page, the time will accumulate.


## Day 09: January 12, 2017

### Today's Progress

1. Sorted Union.
2. Convert HTML.
3. Spinal Case.
4. Finished FlappyBird.

### Thoughts

1. I made a mistake with its test case, it really wasted my much time.
2. Learned a new usage of `String.prototype.replace`, we can put a `function` as its second param.
3. Reviewed `String.prototype.replace`.
4. Optimize the codes step by step. If I meet a problem, I'd just solve it.


### Problems

1. Cannot resolve module `webpack-dev-server/client`. I installed it locally, then it fixed.


## Day 10: January 13, 2017

### Today's Progress

1. Sum Fibs.
2. Sum Primes.
3. Deploy FlappyBird to `master branch`. I do it with `webpack` and `Travis CI`.

### Thoughts

1. At first, I didn't understand the problem, after I read the declaration of the problem again carefully, I saw what should I do.
2. I use `n / i == 1` to check that if `n` is divisible by `i`. Of course, it's wrong! Then, I print the array that I use it to store primes, the result tells me that "every number is prime". So, I realize where I was wrong. Finally, I replace `n / i == 1` with `n % i === 0`.
3. I paid much time to deploy FlappyBird to github pages. It's worth to do it. Since then, I could deploy projects to github pages quickly.


## Day 11: January 14, 2017

### Today's Progress

1. Finder Keepers.
2. Drop Elements.
3. Steamroll Arrays.

### Thoughts

1. Today, I read the illustrations carefully, so I really know results what should I give.
2. If the results have contained an object, I should use `chai-json-equal` to assert them.


## Day 12: January 15, 2017

### Today's Progress

1. Binary Agents.
2. Truth Check.
3. Add Together.
4. Finish the myself portfolio.

### Thoughts

1. At first, think how to write codes, then code it. Finally, let the repeat statements to a function.

### Link(s) to work

1. [Xandeer's Portfolio](http://xandeer.me/100-days-of-code/portfolio)


## Day 13: January 16, 2017

### Today's Progress

1. Start using 'qiniu' to store my images.
2. Write `build.sh` to deploy the github-pages with *travis*.
3. Validate US Telephone Numbers.
4. Record Collection.

### Thoughts

1. Update routine scripts are helpful.
2. Finish a RegExp pattern step by step, think about the general situation,
then add the unusual situation.


## Day 14: January 17, 2017

### Today's Progress

1. Symmetric Difference.

### Thoughts

1. Once again, I don't understand the problem carefully.

### Link(s) to work

1. [sym](basic-algorithm/sym.js)
