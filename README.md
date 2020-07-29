# Bin2Dec 

**Production example:** https://monroy-bin2dec.netlify.app

**Technologies used:** React for components and CSS Grid for styling and responsiveness.

## - Convert Binary to Decimal -

The function responsible can be found [here](https://github.com/joaorbrodrigues/bin2dec/blob/d177838b153e6bc2132c57b57525de11ac0261eb/src/components/Form.js#L31).

Basically, for every number in binary, there's a multiplication of the number in a given position by 2 elevated to the index. After these numbers are obtained, a reduce is used to sum them all and obtain the final result.

### Example: 

For number **1011011**<sub>2</sub>, we have the following indexes:

|  <sub>6</sub>   | <sub>5</sub> | <sub>4</sub> | <sub>3</sub> | <sub>2</sub> | <sub>1</sub> |  <sub>0</sub>   |
| :-------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :-------------: |
| 1<sub>MSB</sub> |      0       |      1       |      1       |      0       |      1       | 1<sub>LSB</sub> |

To make calculation easier, we reverse the array, to start from the less significant bit (at index 0) and then, start the calculation:

1 * 2<sup>0</sup> = **1**

1 * 2<sup>1</sup> = **2**

0 * 2<sup>2</sup> = **0**

1 * 2<sup>3</sup> = **8**

1 * 2<sup>4</sup> = **16**

0 * 2<sup>5</sup> = **0**

1 * 2<sup>6</sup> = **64**

Now, we have the following array:

| <sub>6</sub> | <sub>5</sub> | <sub>4</sub> | <sub>3</sub> | <sub>2</sub> | <sub>1</sub> | <sub>0</sub> |
| :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: |
|      64      |      0       |      16      |      8       |      0       |      2       |      1       |

Then, we sum all values with reduce.

So, **1 0 1 1 0 1 1**<sub>2</sub> = **91**<sub>10</sub>

## - Convert Decimal to Binary -

The function responsible can be found [here](https://github.com/joaorbrodrigues/bin2dec/blob/d177838b153e6bc2132c57b57525de11ac0261eb/src/components/Form.js#L40).

For this conversion, first, the MSB index is obtained to fill the array with the correct amount of bits (initially 0). After that, for each index returned by the logarithmic function, the number 1 is set.

### Example: 

For number **91**<sub>10</sub>, the MSB index is calculated:

**1st step:** 

**log<sub>2</sub>91** = log(91) / log(2) = 6.5077...

Applying **Math.flor()**, we have 6. So the MSB is in index 6. This means that the array has 7 positions and that the index 6 has a bit 1.

|  <sub>6</sub>   | <sub>5</sub> | <sub>4</sub> | <sub>3</sub> | <sub>2</sub> | <sub>1</sub> |  <sub>0</sub>   |
| :-------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :-------------: |
| 1<sub>MSB</sub> |      0       |      0       |      0       |      0       |      0       | 0<sub>LSB</sub> |

**2nd step:** 

Now, to find the other indexes where the bit 1 exists, we have to do the following:

91 - (2<sup>6</sup>) = **27**

So, **27** is the number to apply the log to find the next index:

**log<sub>2</sub>27** = log(27) / log(2) = 4.75488...

This means that we have a bit 1 in index 4.

This goes until the number gets to 0.

So:

27 - (2<sup>4</sup>) = **11**

**log<sub>2</sub>11** = log(11) / log(2) = 3.4594...

11 - (2<sup>3</sup>) = **3**

**log<sub>2</sub>3** = log(3) / log(2) = 1.5849...

3 - (2<sup>1</sup>) = **1**

**log<sub>2</sub>1** = log(1) / log(2) = 0

In the end we have the following:

|  <sub>6</sub>   | <sub>5</sub> | <sub>4</sub> | <sub>3</sub> | <sub>2</sub> | <sub>1</sub> |  <sub>0</sub>   |
| :-------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :-------------: |
| 1<sub>MSB</sub> |      0       |      1       |      1       |      0       |      1       | 1<sub>LSB</sub> |

Then, **91**<sub>10</sub> = **1 0 1 1 0 1 1**<sub>2</sub>

#### Important: 

Please note that the arrays represented here are inverted (6 to 0), so in the the end the array is reversed (0 to 6) to give the correct binary.