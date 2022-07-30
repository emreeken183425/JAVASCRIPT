<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# JS-CC-007 : Count Digits

Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.



##  Learning Outcomes
At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.
- Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.



## Problem Statement

- Write a function that takes a 3 parameters: a digit, lower and upper bounds as integer. The function will calculate how many times the given digit occurs within the numbers including lower and upper bounds.
- Please solve the problem for  `0 <= digit < 10` and `0 < low < high`, otherwise function should return `-1`.
- If no occurrences is found in the given range, function should return `0`. 

**<p align="center">&#9786; Happy Coding &#9997;</p>**

## Count Digits

### JavaScript

```js
function countDigits(digit, low, high) { 
    
    // returning value should be int type.
    return null;
}

/* *** Tests *** */
let desc = "reverse range";
let inputDigit = 1;
let inputLow = 3;
let inputHigh = 2;
let actual = countDigits(inputDigit, inputLow, inputHigh);
let expected = -1;
assertEqual(actual, expected, desc);

desc = "digit gt 9";
inputDigit = 10;
inputLow = 2;
inputHigh = 3;
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = -1;
assertEqual(actual, expected, desc);

desc = "no match";
inputDigit = 2;
inputLow = 5;
inputHigh = 10;
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = 0;
assertEqual(actual, expected, desc);

desc = "3_30_39";
inputDigit = 3;
inputLow = 30;
inputHigh = 39;
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = 11;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
```

### Python

```python
def countDigits(digit, low, high): 
    
    # returning value should be int type.
    return None 
	pass

# *** Tests ***
class Test(unittest.TestCase):
    def test_countDigits_reverse_range(self):
        desc = "reverse range"
        inputDigit = 1
        inputLow = 3
        inputHigh = 2
        actual = countDigits(inputDigit, inputLow, inputHigh)
        expected = -1
        self.assertEqual(actual, expected, desc)

    def test_countDigits_digit_gt_9(self):
        desc = "digit gt 9"
        inputDigit = 10
        inputLow = 2
        inputHigh = 3
        actual = countDigits(inputDigit, inputLow, inputHigh)
        expected = -1
        self.assertEqual(actual, expected, desc)

    def test_countDigits_no_match(self):
        desc = "no match"
        inputDigit = 2
        inputLow = 5
        inputHigh = 10
        actual = countDigits(inputDigit, inputLow, inputHigh)
        expected = 0
        self.assertEqual(actual, expected, desc)

    def test_countDigits_3_30_39(self):
        desc = "3_30_39"
        inputDigit = 3
        inputLow = 30
        inputHigh = 39
        actual = countDigits(inputDigit, inputLow, inputHigh)
        expected = 11
        self.assertEqual(actual, expected, desc)

unittest.main(verbosity=2)
```


