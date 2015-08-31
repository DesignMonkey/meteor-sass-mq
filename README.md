# Sass Media Queries for Responsive layout
Mcaskill's media query library for sass. See full documentation at his Github: [https://github.com/mcaskill/sass-mq](https://github.com/mcaskill/sass-mq)  

### How to install  
```
$ meteor add designmonkey:sass-mq
```

### How to use (Scss)

```scss
$mq-breakpoints: (
    mobile:  320px,
    tablet:  740px,
    desktop: 980px,
    wide:    1300px
);

// Path has to be relative to folder structure
@import '.meteor/local/isopacks/designmonkey_sass-mq/os/packages/designmonkey_sass-mq/lib/_sass-mq';

.foo { 
    @include mq($from: mobile, $until: tablet) {
        background: red;
    }
    @include mq($from: tablet) {
        background: green;
    }
}
```
### How to use (Sass)

```scss
$mq-breakpoints: (mobile: 320px, tablet: 740px, desktop: 980px, wide: 1300px)

// Path has to be relative to folder structure
@import .meteor/local/isopacks/designmonkey_sass-mq/os/packages/designmonkey_sass-mq/lib/_sass-mq

.foo
  +mq($from: mobile, $until: tablet)
    background: red;

  +mq($from: tablet)
    background: green;

```
