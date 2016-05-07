# Implementation of examples with es6

For fun I thought I would try to reimplement these objects
as es6 classes.  

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Both `fantasy.es6.js` and `cars.es6.js` run fine in 
current versions of both Firefox and Chrome. (I haven’t tried Edge but would
be curious to know if it works there.)

As commented in `cars.es6.js`, there is as yet no native support for private
methods in es6 classes. There are rumors that something to that effect might
be added in the future. In the meantime I used the rather crummy convention
of “hey, it’s private, nudge nudge”… which consists of placing an underbar
before “private” method names.  See the links and discussion at
<http://stackoverflow.com/questions/22156326>.

I think es6 classes really clean up a lot of the `this`-wrangling one has to
do with the explicit prototypal style we’ve been using for a while. Although
the new class syntax has its [detractors](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.i45psaok5), personally I find the syntax very intuitive and easy to reason
with.
